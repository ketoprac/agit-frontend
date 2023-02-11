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
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(4);

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.get(
        `positions/?location=${loc}&description=${desc}&full_time=${fullTime}`
      );
      const data = res.data;
      setJobs(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getJobData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          // `positions/?page=${currentPage}&limit=${jobsPerPage}`
          `positions`
        );
        setJobsLength(res.data.length);
        setJobs(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getJobData();
  }, []);

  // Pagination
  const lastJobsIndex = currentPage * jobsPerPage;
  const firstJobsIndex = lastJobsIndex - jobsPerPage;
  const currentJobs = jobs.slice(firstJobsIndex, lastJobsIndex);

  // console.log(jobsLength);

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentJobs &&
          currentJobs.map((item, index) => (
            <JobCard item={item} key={index} />
          ))
        )}
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
