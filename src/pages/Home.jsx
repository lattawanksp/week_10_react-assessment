import { useEffect, useState } from "react";

const Home = () => {
  const [section, setSection] = useState("");

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        //console.log(data);
      });
  }, []);

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

      {/* ตาราง user  */}
      {section === "user" && (
        <table className="border-collapse border border-gray-300 w-96">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Last Name</th>
              <th className="border border-gray-300 px-4 py-2">Position</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {member.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.lastname}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ตาราง admin  */}

      {section === "admin" && <div>Admin Form</div>}
    </div>
  );
};

export default Home;
