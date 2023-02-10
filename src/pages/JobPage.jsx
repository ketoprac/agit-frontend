import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobContainer from "../components/JobContainer";
import { isAuthenticated } from "../utils/isAuthenticated";

const JobPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, []);

  return <JobContainer />;
};

export default JobPage;
