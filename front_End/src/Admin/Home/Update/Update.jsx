import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

function Update({ status, active, setActive }) {
  const [formData, setFormData] = useState({
    customer_name: "",
    user_name: "",
    customer_phone: "",
    position: "",
    product: "",
    customer_place: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      setFormData(status);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setActive(false);
  };

const handleUpdate = async () => {

  const token = localStorage.getItem("token");

  setLoading(true);

  try {

    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/v1/project/update/${status._id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(response.data.message);

    setActive(false);

  } catch (error) {

    console.log(error);

    alert(error.response?.data?.message || "Update failed");

  } finally {

    setLoading(false);

  }
};

console.log(formData)

  return (
    <div className="w-160 h-130 rounded-2xl bg-white/30 backdrop-blur-sm p-3 border absolute bottom-20 right-20">
      <div className="w-full flex justify-end">
        <MdCancel
          className="text-2xl text-red-400 hover:text-red-600 cursor-pointer"
          onClick={handleClose}
        />
      </div>

      <p className="text-center text-2xl">Update Booking</p>

      <p className="text-center text-[12px] text-[#222222]">
        Edit the details below
      </p>

      <div className="text-[12px]">
        <p>Booking ID: {status?._id}</p>
      </div>

      <div className="w-full h-auto flex gap-10 mt-5 text-black">
        {/* LEFT */}
        <div className="w-full h-auto flex flex-col gap-12 mt-5">
          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            className="border-b border-gray-300 px-1 focus:outline-none"
            value={formData.customer_name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="user_name"
            placeholder="Owner Ship"
            className="border-b border-gray-300 px-1 focus:outline-none"
            value={formData.user_name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="customer_phone"
            placeholder="Customer Number"
            className="border-b border-gray-300 px-1 focus:outline-none"
            value={formData.customer_phone}
            onChange={handleChange}
          />

          <select
            name="position"
            className="border-b border-gray-300 px-1 focus:outline-none"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">Select Position</option>
            <option value="complete">Complete</option>
            <option value="pending">Pending</option>
            <option value="progress">Progress</option>
          </select>
        </div>

        {/* RIGHT */}
        <div className="w-full h-auto flex flex-col gap-12 mt-5">
          <input
            type="text"
            name="product"
            placeholder="Product"
            className="border-b border-gray-300 px-1 focus:outline-none"
            value={formData.product}
            onChange={handleChange}
          />

          <input
            type="text"
            name="customer_place"
            placeholder="Customer Place"
            className="border-b border-gray-300 px-1 focus:outline-none"
            value={formData.customer_place}
            onChange={handleChange}
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            className="border-b border-gray-300 px-1 focus:outline-none"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        className="bg-blue-500 text-white mt-12 px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleUpdate}
      >
        {loading===true ? "Updating..." : "Update"}
      </button>
    </div>
  );
}

export default Update;
