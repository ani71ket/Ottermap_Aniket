import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstRoute = ({ setUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ firstName, mobileNumber });
    navigate("/map");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Enter Your Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg w-96">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-5 rounded text-xl h-14"
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="border p-5 rounded text-xl h-14"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-8 py-4 rounded text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FirstRoute;
