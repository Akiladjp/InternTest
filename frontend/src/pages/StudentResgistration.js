import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const StudentResgistration = () => {
  
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName,
      address: address,
      dateOfBirth: dateOfBirth,
      gender: gender,
      email: email,
      phone: phone,
    };

    console.log("Request Data:", data);
    axios.post( "https://localhost:7222/api/Student", data)
      .then((res) => {
        setFullName("");
        setAddress("");
        setDateOfBirth("");
        setGender("");
        setEmail("");
        setPhone("");

        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="ml-12 pb-4">
      <h1 className="text-xl font-semibold mb-2">Student Registration</h1>
      <hr className="mb-12 border-black -ml-12" />
      <div className="flex flex-col w-[80%] bg-white p-12 mx-auto rounded-lg mb-12">
        <form onSubmit={handleSubmit}>
          <div className="gap-2 flex mb-6 h-8">
            <label className="w-40">Full Name </label>
            <input
              type="text"
              name="name"
              className="rounded-lg w-[80%] border-[1px] focus:outline-none"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="gap-2 flex mb-6 h-8">
            <label className="w-40">Address</label>
            <input
              type="text"
              name="address"
              required
              className="rounded-lg w-[80%] border-[1px] focus:outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="gap-2 flex justify-between mb-6 h-8">
            <div className="flex">
              <label className="w-40">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                required
                className="rounded-lg border-[1px] w-44 ml-2 px-2 focus:outline-none"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center text-sm">
              <p>Gender</p>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
          <div className="gap-2 flex mb-6 h-8">
            <label className="w-40">Email</label>
            <input
              type="email"
              name="email"
              required
              className="rounded-lg w-[80%] border-[1px] focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="gap-2 flex mb-6 h-8">
            <label className="w-40">Telephone</label>
            <input
              type="number"
              name="phone"
              required
              className="rounded-lg w-[20%] border-[1px] focus:outline-none"
              min="0"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              value="Add"
              className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6"
            />
          </div>
        </form>
        <div>
          <div className="mt-12 text-sm">
            <table className="border-y border-gray-300 w-full">
              <thead>
                <tr className="border-y border-gray-300">
                  <th className="py-3 px-4 text-center">Name</th>
                  <th className="py-3 px-4 text-center">Date of Birth</th>
                  <th className="py-3 px-4 text-center">Email</th>
                  <th className="py-3 px-4 text-cennter">Telephone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4 text-center">Smith</td>
                  <td className="py-2 px-4 text-center">2004-12-24</td>
                  <td className="py-2 px-4 text-center">smithwilson@abd.com</td>
                  <td className="py-2 px-4 text-center">+66 568 998 789</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <Link
              to="/"
              className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};