import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dash() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const user = location.state;

  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  const AddProjectServer = {
    customer_name: "",
    user_name: "",
    customer_phone: "",
    product: "",
    customer_place: "",
    day: "",
    price: "",
    sticky: "",
  };
  const [project, setProjectData] = useState(AddProjectServer);

  const datapassingproject = (e) => {
    e.preventDefault();
    setProjectData({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handlesendprojectserver = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/project/create`,
        project,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const server_Project = async () => {
    const produce = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/project/getallprojects`,
    );
    setProject(produce.data);
  };

  useEffect(() => {
    server_Project();
  }, [project]);
  console.log(token);
  console.log(user);
  return (
    <div className="w-full h-auto items-end flex flex-col gap-3 p-5 ">
      <div className="w-[83%] h-75 box-border flex gap-3">
        <div className="flex flex-col gap-2.5">
          <div className="w-85 h-35 bg-[#202020] rounded-2xl p-3 flex flex-col gap-5">
            <div className="">
              {" "}
              <p className="text-[25px] font-semibold ml-10">
                Final Tune Model
              </p>
              <p className="text-[12px]">No need to reset this user data</p>
            </div>
            <div
              className={`w-30 h-10 rounded-full flex items-center justify-center ${user?.status === true ? "bg-green-500 text-[#3CF220]" : "bg-red-500 text-[#841c1c]"}`}
            >
              {user?.status === true ? "Active" : "Inactive"}
            </div>
          </div>
          <div className="w-85 h-35 bg-[#202020] rounded-2xl p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-15 h-15 border border-white rounded-full">
                {" "}
                <img
                  src={user?.image}
                  alt={user?.name}
                  className="w-15 rounded-full"
                />
              </div>
              <ul className="text-[12px]">
                <li>
                  <b>
                    {user?.name} {user?.lastename}
                  </b>{" "}
                </li>
                <li>{user?.email}</li>
                <li>{user?.phone}</li>
              </ul>
            </div>
            <div className="w-60 h-10 bg-[#4F4F4F] text-[20px] font-semibold flex items-center justify-center rounded-full">
              {user?.role}
            </div>
          </div>
        </div>
        <div className="w-full h-73 bg-[#4F4F4F] rounded-2xl"></div>
      </div>
      <div className="w-[83%] h-100 bg-[#202020] rounded-2xl p-4 flex flex-col gap-4">
        {/* HEADER */}
        <div className="grid grid-cols-[60px_200px_1fr_150px_120px_150px] items-center px-4 text-[15px]">
          <div></div>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Owner
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Product
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Ownership
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Bill
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Status
          </p>
        </div>

        {/* BODY */}
       <div className="flex-1 border border-white rounded-2xl p-3 flex flex-col gap-2 overflow-y-auto scrollbar-hide">

  {
    loading ? (

      <h1 className="text-white text-center">
        Server is loading.....
      </h1>

    ) : (

      projects?.projects?.map((project, index) => (

        <div
          key={index}
          className="grid grid-cols-[60px_200px_1fr_150px_120px_150px] text-[20px] items-center bg-[#1d1919] px-4 py-3 rounded-lg gap-2"
        >

          {/* Avatar */}
          <div className="w-12 h-12 bg-amber-100 rounded-full"></div>

          {/* Name */}
          <p className="truncate text-white">
            {project?.customer_name}
          </p>

          {/* Product */}
          <p className="text-white">
            {project?.product}
          </p>

          {/* Ownership */}
          <span className="bg-white text-black px-1 py-1 rounded-full text-center">
            {project?.user_name}
          </span>

          {/* Bill */}
          <span className="bg-white text-black px-1 py-1 rounded-full text-center">
            {project?.price}
          </span>

          {/* Status */}
          <span
            className={`bg-white px-1 py-1 rounded-full text-center ${
              project?.position === "pending"
                ? "text-[#F11B1B]"
                : project?.position === "progress"
                ? "text-[#F2BA20]"
                : project?.position === "complete"
                ? "text-[#3CF220]"
                : ""
            }`}
          >
            {project?.position}
          </span>

        </div>

      ))

    )
  }

</div>
      </div>
      <div className="w-[83%] h-auto flex gap-3">
        <div className="w-200 h-auto bg-[#202020] rounded-tl-2xl rounded-tr-2xl flex flex-col gap-3">
          <div className="w-full border-b p-6 gap-2 flex flex-col">
            <p className="text-3xl font-bold">New Work</p>
            <p className="text-[12px]">
              Update new status of the work post and re post the work also
            </p>
          </div>
          <div className=" flex gap-3 text-[18px] px-2">
            <div className="flex flex-col w-120  gap-8 mt-10">
              <input
                type="text"
                name="customer_name"
                value={project.customer_name}
                onChange={datapassingproject}
                placeholder="Customer Name"
                className="w-full p-3 border rounded-2xl"
              />
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                value={project.user_name}
                onChange={datapassingproject}
                className="w-full p-3 border rounded-2xl"
              />
              <input
                type="text"
                placeholder="Customer Number"
                name="customer_phone"
                value={project.customer_phone}
                onChange={datapassingproject}
                className="w-full p-3 border rounded-2xl"
              />
              <input
                type="text"
                placeholder="Product"
                name="product"
                value={project.product}
                onChange={datapassingproject}
                className="w-full p-3 border rounded-2xl"
              />
            </div>
            <div className="flex flex-col w-120 mt-10 gap-8">
              <input
                type="text"
                placeholder="Customer Place"
                name="customer_place"
                value={project.customer_place}
                onChange={datapassingproject}
                className="w-full p-3 border rounded-2xl"
              />
              <div className="flex w-full justify-between gap-3">
                <input
                  type="text"
                  placeholder="Day's "
                  name="day"
                  value={project.day}
                  onChange={datapassingproject}
                  className="w-full p-3 border rounded-2xl"
                />
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={project.price}
                  onChange={datapassingproject}
                  className="w-full p-3 border rounded-2xl"
                />
              </div>
              <input
                type="text"
                placeholder="Sticky Note"
                name="sticky"
                value={project.sticky}
                onChange={datapassingproject}
                className="w-full p-3 border rounded-2xl h-33"
              />
            </div>
          </div>
          <button
            className="w-full h-10 bg-[#397ABF]"
            onClick={handlesendprojectserver}
          >
            Add project
          </button>
        </div>
        <div className="w-full bg-[#202020] h-130 rounded-2xl">
          {/* ....................................Amount & credit points....................... */}
          <div className=" w-full flex items-center h-20 font-extrabold border-b border-white justify-center">
            <p>Amount & credit points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
