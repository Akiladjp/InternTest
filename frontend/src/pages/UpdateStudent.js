import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    fullName: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7222/api/Student/${id}`);
        const data = response.data;
        setValues({
          fullName: data.fullName,
          address: data.address,
          dateofBirth: data.dateofBirth,
          gender: data.gender,
          email: data.email,
          phone: data.phone,
        });
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7222/api/Student/${id}`, values);
      navigate("/");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="ml-12 pb-4">
      <h1 className="text-xl font-semibold mb-2">Update Student</h1>
      <hr className="mb-12 border-black -ml-12" />
      <div className="flex flex-col w-[80%] bg-white p-12 mx-auto rounded-lg mb-12">
        <form onSubmit={handleSubmit}>
          <div className="gap-2 flex mb-6 h-8">
            <label className="w-40">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="rounded-lg w-[80%] border-[1px] focus:outline-none"
              required
              value={values.fullName}
              onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            />
          </div>
          <div className="gap-2 flex mb-6 h-8">
            <label className="w-40">Address</label>
            <input
              type="text"
              name="address"
              required
              className="rounded-lg w-[80%] border-[1px] focus:outline-none"
              value={values.address}
              onChange={(e) => setValues({ ...values, address: e.target.value })}
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
                value={values.dateofBirth}
                onChange={(e) => setValues({ ...values, dateofBirth: e.target.value })}
              />
            </div>
            <div className="flex gap-4 items-center text-sm">
              <p>Gender</p>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={values.gender === "Male"}
                onChange={(e) => setValues({ ...values, gender: e.target.value })}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={values.gender === "Female"}
                onChange={(e) => setValues({ ...values, gender: e.target.value })}
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
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="gap-2 flex mb-6 h-8">
            <label className="w-40">Phone</label>
            <input
              type="number"
              name="phone"
              required
              className="rounded-lg w-[20%] border-[1px] focus:outline-none"
              min="0"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              value="Update"
              className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
