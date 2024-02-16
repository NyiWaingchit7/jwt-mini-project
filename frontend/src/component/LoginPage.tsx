import { useState } from "react";
import { useNavigate } from "react-router-dom";
const defaultData = { name: "", password: "" };

const LoginPage = () => {
  const [data, setData] = useState(defaultData);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  const handleLogin = async () => {
    const respone = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },

      body: JSON.stringify({ ...data }),
    });
    const { name, message } = await respone.json();
    console.log(name, message);
    navigate("/");
    setData(defaultData);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5  items-center justify-center h-1/3">
        <h2 className="text-2xl font-bold ">Log in</h2>
        <input
          type="text"
          className="bg-gray-200 appearance-none w-md border-2 border-gray-200 rounded 
           py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Name..."
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="password"
          className="bg-gray-200 appearance-none w-md border-2 border-gray-200 rounded 
           py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Password..."
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div className="flex gap-1 items-center">
          <button
            onClick={handleLogin}
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Log in
          </button>
          <span>
            <a href="/register" className=" text-blue-500 ">
              sing up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
