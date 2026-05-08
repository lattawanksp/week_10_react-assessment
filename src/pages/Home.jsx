import { useState } from "react";

const Home = () => {
  const [section, setSection] = useState("");

  return (
    <div className="flex flex-col items-center pt-16 gap-6">
      <h1 className="text-4xl font-bold text-center">
        Generation Thailand <br /> React - Assessment
      </h1>

      <div className="flex gap-16">
        <button
          className="border px-4 py-2 rounded shadow hover:bg-gray-100 cursor-pointer"
          onClick={() => setSection("user")}
        >
          User Home Section
        </button>
        <button
          className="border px-4 py-2 rounded shadow hover:bg-gray-100 cursor-pointer"
          onClick={() => setSection("admin")}
        >
          Admin Home Section
        </button>
      </div>

      {section === "user" && <div>User Table</div>}
      {section === "admin" && <div>Admin Form</div>}
    </div>
  );
};

export default Home;
