import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [page, setPage] = useState("dashboard");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Select an option");
  const[businesses, setBusinesses] = useState([]);

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

  return (
    <div style={{display: "flex", height: "100vh"}}>

      {/* sidebar */}
      <Sidebar setPage={setPage} />

      {/* Main Content */}
      <div style={{flex: 1, padding: "20px"}}>
        {page === "dashboard" && (
          <div>
            <h1>Welcome to HCPA-Clone</h1>
            <p>This is your dashboard.</p>

            {businesses.length === 0 && (
              <p>No businesses added yet.</p>
            )}

            {businesses.map((biz, index) => (
              <div key = {index} style={{marginBottom: "20px"}}>
                <p><strong>{biz.name}</strong> - {biz.type}</p>

                {biz.tasks.map((task, taskIndex) => (
                  <div key={taskIndex}>
                    <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index, taskIndex)}></input>
                    {task.name}
                  </div>
                ))}

                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      
        {page === "setup" && (
          <div>
            <h1>Business Setup form</h1>
            <label>Business Name</label>
            <br />
            <input type="text" value={businessName} onChange={(event) => setBusinessName(event.target.value)} />
            <br />
            <br />
            <p>You entered: {businessName}</p>
            <br />
            <label>Business Type</label>
            <br />

            <select value={businessType} onChange={(event) => setBusinessType(event.target.value)}>
              <option>(Select an option)</option>
              <option>Sole Trader</option>
              <option>Pty Ltd</option>
              <option>Partnernship</option>
            </select>

            <br></br>
            <br></br>

            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;