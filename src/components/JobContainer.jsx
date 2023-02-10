import React, { useEffect, useState } from "react";
import { apiService } from "../service/apiService";
import JobCard from "./JobCard";
import JobSearch from "./JobSearch";
import Layout from "./Layout";

const JobContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [loading, setLoading] = useState(false);

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
        setJobs(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getJobData();
  }, []);

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
          jobs &&
          jobs.map((item, index) => (
            <JobCard item={item} key={index} />
          ))
        )}
      </div>
    </Layout>
  );
};

export default JobContainer;
