import React from "react";
import { MdEditCalendar } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const StudentList = () => {
  return (
    <div className="ml-12 pb-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold mb-2 flex items-center ">Student List</h1>
        <Link to="/register" className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6 mr-4 mb-4">Add Student</Link>
      </div>
      <hr className="mb-12 border-black -ml-12" />
      <div className="flex flex-col w-[80%] bg-white p-12 mx-auto rounded-lg mb-12">
        <div className="">
          <form>
            <div className="mb-2">
              <p>Telephone</p>
            </div>
            <div className="flex gap-8">
              <div>
                <input
                  type="number"
                  required
                  className="focus:outline-none w-60 border-[1px] rounded-lg h-10"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Search"
                  className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="mt-12 text-sm">
            <table className="border-y border-gray-300 w-full">
              <thead>
                <tr className="border-y border-gray-300">
                  <th className="py-3 px-4 text-center">Name</th>
                  <th className="py-3 px-4 text-center">Date of Birth</th>
                  <th className="py-3 px-4 text-center">Email</th>
                  <th className="py-3 px-4 text-cennter">Telephone</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4 text-center">Smith</td>
                  <td className="py-2 px-4 text-center">2004-12-24</td>
                  <td className="py-2 px-4 text-center">smithwilson@abd.com</td>
                  <td className="py-2 px-4 text-center">+66 568 998 789</td>
                  <td className="py-2 px-4 flex gap-2 items-center text-center ml-7">
                    <MdEditCalendar className="cursor-pointer text-base" />
                    <MdOutlineDeleteOutline className="cursor-pointer text-lg" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
