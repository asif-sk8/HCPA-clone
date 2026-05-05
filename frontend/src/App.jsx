import { useState } from "react";


function App() {
  const [page, setPage] = useState("dashboard");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Select an option");
  const[businesses, setBusinesses] = useState([]);

  const handleSubmit = () => {
    const newBusiness = {
      name: businessName,
      type: businessType
    };

    setBusinesses([...businesses, newBusiness]);

    setBusinessName("");
    setBusinessType("Select an option");

    console.log("All businesses: ", [...businesses, newBusiness]);
  };

  return (
    <div style={{display: "flex", height: "100vh"}}>

      {/* sidebar */}
      <div style={{width: "200px", backgroundColor: "#222", color: "white", padding: "20px"}}>
        <h3>HCPA-Clone</h3>
        <p style={{cursor: "pointer"}} onClick={() => setPage("dashboard")}>
          Dashboard
        </p>
        <p style={{cursor: "pointer"}} onClick={() => setPage("setup")}>
          Business Setup
        </p>
        <p>Settings</p>
      </div>

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
              <div key = {index}>
                <p><strong>{biz.name}</strong> - {biz.type}</p>
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