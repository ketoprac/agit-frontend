import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("jwt");
    toast.success('Logout success');
    navigate("/", { replace: true });
  };

  return (
    <div>
      <nav className="border p-5 flex justify-between items-center">
        <Link to="/jobs">
      <h1 className="text-3xl font-bold text-sky-800 text-center">Discover Jobs</h1>
        </Link>
      <button onClick={onLogout} className="group relative flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Logout</button>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
