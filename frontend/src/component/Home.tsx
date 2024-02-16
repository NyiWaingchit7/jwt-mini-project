import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    console.log(accessToken);

    if (!accessToken) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-end items-center p-20">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline 
          focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
