import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import FirstRoute from "./FirstRoute";
import SecondRoute from "./SecondRoute"; // Create this file later

function App() {
  const [userData, setUserData] = useState({ firstName: "", mobileNumber: "" });

  return (
    <Routes>
      <Route path="/" element={<FirstRoute setUserData={setUserData} />} />
      <Route path="/map" element={<SecondRoute userData={userData} />} />
    </Routes>
  );
}

export default App;
