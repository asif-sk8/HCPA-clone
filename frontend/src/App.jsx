function App() {
  return (
    <div style={{display: "flex", height: "100vh"}}>

      {/* sidebar */}
      <div style={{width: "200px", backgroundColor: "#222", color: "white", padding: "20px"}}>
        <h3>HCPA-Clone</h3>
        <p>Dashboard</p>
        <p>Businesses</p>
        <p>Settings</p>
      </div>

      {/* Main Content */}
      <div style={{flex: 1, padding: "20px"}}>
        <h1>Welcome to HCPA-Clone</h1>
        <p>This is your dashboard.</p>
      </div>
    </div>
  );
}

export default App;