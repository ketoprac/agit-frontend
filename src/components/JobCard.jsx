import { Link } from "react-router-dom";

const JobCard = ({ item }) => {
  const { id, title, company, location, type } = item;

  return (
    <Link to={`/jobs/${id}`}>
      <div className="flex flex-col justify-between border shadow-md h-52 w-96 p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex justify-start items-center">
          <div className="w-32 flex justify-center items-center">
            <img
              src={
                "https://startupjobs.asia/assets/d63988b5/65cdde2d/images/default/company-logo-placeholder.png?v=1666170268"
              }
              alt="logo"
              className="h-12"
            />
          </div>
          <div className="pl-8 text-left">
            <p className="font-semibold text-lg text-sky-700">{title}</p>
            <p>{company}</p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm">{location}</p>
            <p className="font-medium text-sm">{type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
