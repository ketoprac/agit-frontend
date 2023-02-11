import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../service/apiService";
import Layout from "./Layout";

const JobDetail = () => {
  const [job, setJob] = useState(null);
  const { jobId } = useParams();

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await apiService.get(`positions/${jobId}`);
        setJob(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getJob();
  }, [jobId]);

  if (!job) {
    return null;
  }

  const {
    company_logo,
    title,
    company,
    location,
    type,
    description,
    how_to_apply,
  } = job;

  return (
    <Layout>
      <div className="mx-24 my-12 border p-12 rounded shadow">
        <div>
          <img src={company_logo} alt="company logo" />
          <div>
            <h1 className="text-2xl font-bold text-sky-600">{title}</h1>
            <p className="font-semibold">{company}</p>
            <p className="text-sm font-medium text-gray-700">
              {location} - {type}
            </p>
          </div>
          <br />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold text-gray-700">Description</p>
          <p className="text-sm">{description}</p>
          <br />
          <p className="text-lg font-bold text-gray-700">How to apply</p>
          <p className="text-sm">{how_to_apply}</p>
        </div>
        <button className="self-center whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 w-full md:w-min">
          Apply
        </button>
      </div>
    </Layout>
  );
};

export default JobDetail;
