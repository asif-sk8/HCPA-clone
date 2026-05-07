import { useEffect, useState } from "react";
import BusinessForm from "./components/BusinessForm";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  const [page, setPage] = useState("dashboard");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Select an option");
  const[businesses, setBusinesses] = useState(() => {
    const savedBusinesses = localStorage.getItem("businesses");

    return savedBusinesses
      ? JSON.parse(savedBusinesses)
      : [];
  });

  const handleSubmit = () => {
    const newBusiness = {
      name: businessName,
      type: businessType,
      tasks: [
        {name: "ABN Registration", completed: false},
        {name: "GST Registration", completed: false},
        {name: "Business Name Registration", completed: false}
      ]
    };

    setBusinesses([...businesses, newBusiness]);

    setBusinessName("");
    setBusinessType("Select an option");

    console.log("All businesses: ", [...businesses, newBusiness]);
  };

  const handleDelete = (indexToDelete) => {
    const updatedBusinesses = businesses.filter((_, index) => index !== indexToDelete);
    setBusinesses(updatedBusinesses);
  };

  const toggleTask = (businessIndex, taskIndex) => {
    const updatedBusinesses = [...businesses];

    updatedBusinesses[businessIndex].tasks[taskIndex].completed = !updatedBusinesses[businessIndex].tasks[taskIndex].completed;

    setBusinesses(updatedBusinesses);
  }

  useEffect(() => {
    localStorage.setItem("businesses", JSON.stringify(businesses));

  }, [businesses]);

  return (
    <div style={{display: "flex", height: "100vh"}}>

      {/* sidebar */}
      <Sidebar setPage={setPage} />

      {/* Main Content */}
      <div style={{flex: 1, padding: "20px"}}>
        {page === "dashboard" && (
          <Dashboard
            businesses={businesses}
            toggleTask={toggleTask}
            handleDelete={handleDelete}
          />
        )}
      
        {page === "setup" && (
          <BusinessForm
            businessName={businessName}
            setBusinessName={setBusinessName}
            businessType={businessType}
            setBusinessType={setBusinessType}
            handleSubmit={handleSubmit}
          />
        )}
      </div>

    </div>
  );
}

export default App;