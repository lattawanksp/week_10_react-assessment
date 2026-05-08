import { useEffect, useState } from "react";

const Home = () => {
  const [section, setSection] = useState("");
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  const handleSave = () => {
    fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, lastname: lastName, position }),
    })
      .then((res) => res.json())
      .then((newMember) => {
        setMembers([...members, newMember]);
        setName("");
        setLastName("");
        setPosition("");
      });
  };

  const handleDelete = (id) => {
    fetch(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setMembers(members.filter((member) => member.id !== id));
      });
  };

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

      {section === "admin" && (
        <div className="flex flex-col gap-4 w-full px-16">
          <h2 className="text-xl font-bold">Create User Here</h2>

          <div className="flex gap-4">
            <input
              className="border px-4 py-2 rounded w-64"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border px-4 py-2 rounded w-64"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="border px-4 py-2 rounded w-64"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer"
              onClick={handleSave}
            >
              Save
            </button>
          </div>

          <table className="border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                <th className="border border-gray-300 px-4 py-2">Position</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
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
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => handleDelete(member.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
