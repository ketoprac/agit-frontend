import { useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <JobCard />
    </div>
  );
}

export default App;
