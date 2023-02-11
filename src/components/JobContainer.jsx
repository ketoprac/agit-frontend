import React, { useEffect, useState } from "react";
import { apiService } from "../service/apiService";
import JobCard from "./JobCard";
import JobSearch from "./JobSearch";
import Layout from "./Layout";
import Pagination from "./Pagination";

const JobContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [jobsLength, setJobsLength] = useState(0);
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  const fetchJobs = async (params) => {
    setLoading(true);
    try {
      const res = await apiService.get(`positions`, { params });
      setJobsLength(res.data.length);
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onSearch = async (e) => {
    e.preventDefault();
    const params = { location: loc, description: desc, full_time: fullTime };
    await fetchJobs(params);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const currentJobs = jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <Layout>
      <JobSearch
        onSearch={onSearch}
        setLoc={setLoc}
        setDesc={setDesc}
        setFullTime={setFullTime}
        fullTime={fullTime}
        desc={desc}
        loc={loc}
      />
      <div className="flex flex-wrap gap-3 justify-center">
        {loading ? <p>Loading...</p> : currentJobs.map((item) => <JobCard key={item.id} item={item} />)}
      </div>
      <div className="w-screen flex items-center justify-center mt-3">
        <Pagination
          totalData={jobsLength}
          jobsPerPage={jobsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Layout>
  );
};

export default JobContainer;
