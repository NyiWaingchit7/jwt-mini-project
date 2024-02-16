import { useState } from "react";
const defaultData = { name: "", email: "", password: "" };
const Register = () => {
  const [data, setData] = useState(defaultData);
  const handleRegister = async () => {
    const respone = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
    const { name, token } = await respone.json();
    console.log(name, token);
    localStorage.setItem("token", token);
    setData(defaultData);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5  items-center justify-center h-1/3">
        <h2 className="text-2xl font-bold ">Sign up</h2>
        <input
          type="text"
          className="bg-gray-200 appearance-none w-md border-2 border-gray-200 rounded 
       py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Name..."
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          className="bg-gray-200 appearance-none w-md border-2 border-gray-200 rounded 
       py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Email..."
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          className="bg-gray-200 appearance-none w-md border-2 border-gray-200 rounded 
       py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Password..."
          required
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <div className="flex gap-1 items-center">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 
          focus:shadow-outline focus:outline-none text-white font-bold
           py-2 px-4 rounded"
            onClick={handleRegister}
          >
            Log in
          </button>
          <span>
            <a href="/login" className=" text-blue-500 ">
              log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
