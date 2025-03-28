import React, { useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

export const StudentList = () => {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState();
  const [result, setResult] = useState({});

  const [check, setCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7222/api/Student");
        setDetails(response.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://localhost:7222/api/Student/${id}`
      );
      console.log("Delete successful:", response.data);
      alert("Student deleted successfully!");
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
        alert("Error deleting the student: " + error.response.data.message);
      } else {
        console.error("Network error:", error.message);
        alert("Network error. Please try again.");
      }
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Search result is ", search);

    const phoneNum = search;
    setCheck(true);

    try {
      const response = await axios.get(
        `https://localhost:7222/api/Student/phone/${phoneNum}`
      );

      if (response.data.length === 0) {
        alert("No matching user");
      }

      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.log("error", error);
      alert("No matching Student");
      setCheck(false);
    }
  };

  return (
    <div className="ml-12 pb-4">
      <style>
        {`
          /* Remove spinner buttons for number input fields */
          input[type="number"]::-webkit-inner-spin-button, 
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold mb-2 flex items-center">
          Student List
        </h1>
        <Link
          to="/register"
          className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6 mr-4 mb-4"
        >
          Add Student
        </Link>
      </div>
      <hr className="mb-12 border-black -ml-12" />
      <div className="flex flex-col w-[80%] bg-white p-12 mx-auto rounded-lg mb-12">
        <form className="mb-4" onSubmit={handleSearch}>
          <div className="flex gap-8 items-center">
            <div>
              <input
                type="number"
                placeholder="Search by telephone"
                required
                className="focus:outline-none w-60 border rounded-lg h-10 px-2"
                min={0}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        {check === true ? (
          <div className="mt-12 text-sm">
            <table className="border-y border-gray-300 w-full">
              <thead>
                <tr className="border-y border-gray-300">
                  <th className="py-3 px-4 text-center">Name</th>
                  <th className="py-3 px-4 text-center">Date of Birth</th>
                  <th className="py-3 px-4 text-center">Email</th>
                  <th className="py-3 px-4 text-center">Telephone</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4 text-center">{result.fullName}</td>
                  <td className="py-2 px-4 text-center">
                    {result.dateofBirth}
                  </td>
                  <td className="py-2 px-4 text-center">{result.email}</td>
                  <td className="py-2 px-4 text-center">{result.phone}</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-12 text-sm">
            {details.length > 0 ? (
              <table className="border-y border-gray-300 w-full">
                <thead>
                  <tr className="border-y border-gray-300">
                    <th className="py-3 px-4 text-center">Name</th>
                    <th className="py-3 px-4 text-center">Date of Birth</th>
                    <th className="py-3 px-4 text-center">Email</th>
                    <th className="py-3 px-4 text-center">Telephone</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((item, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="py-2 px-4 text-center">{item.fullName}</td>
                      <td className="py-2 px-4 text-center">
                        {item.dateofBirth}
                      </td>
                      <td className="py-2 px-4 text-center">{item.email}</td>
                      <td className="py-2 px-4 text-center">{item.phone}</td>
                      <td
                        colSpan={2}
                        className="py-2 px-4 text-center flex gap-2 justify-center"
                      >
                        <Link to={`/update/${item.id}`}>
                          <FaRegEdit className="cursor-pointer text-base" />
                        </Link>
                        <MdOutlineDeleteOutline
                          className="cursor-pointer text-lg"
                          onClick={() => handleDelete(item.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1 className="text-center mt-4">No data available.</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
