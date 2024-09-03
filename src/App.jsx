import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"
// import jobData from "./JobDummyData"
import { useEffect, useState } from "react"
// import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"
import { getFirestore, collection, query, where, orderBy, getDocs } from 'firebase/firestore';

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
  
    // Initialize Firestore and the jobs collection reference
    const db = getFirestore();
    const jobsRef = collection(db, "jobs");
  
    // Build the base query with ordering
    let q = query(jobsRef, orderBy("postedOn", "desc"));
  
    // Conditionally add where clauses only if the criteria are defined
    if (jobCriteria.type !== undefined) {
      q = query(q, where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.title !== undefined) {
      q = query(q, where("title", "==", jobCriteria.title));
    }
    if (jobCriteria.experience !== undefined) {
      q = query(q, where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location !== undefined) {
      q = query(q, where("location", "==", jobCriteria.location));
    }
  
    try {
      // Execute the query
      const req = await getDocs(q);
      const tempJobs = [];
  
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate() // Convert Firestore Timestamp to Date
        });
      });
  
      // Set jobs state
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching jobs: ", error);
    } finally {
      // Reset search state if needed
      setCustomSearch(false);
    }
  };


  useEffect(() => {
    fetchJobs()
  },[])


  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {/* {customSearch && 
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
        </button>
      } */}
      {jobs.map((job)=> (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default App
