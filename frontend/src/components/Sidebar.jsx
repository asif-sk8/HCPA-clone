function Sidebar({ setPage }) {
    return (
        <div
        style={{
        width: "200px",
        backgroundColor: "#222",
        color: "white",
        padding: "20px"
        }}
        >
        <h3>HCPA-Clone</h3>

        <p
            style={{ cursor: "pointer" }}
            onClick={() => setPage("dashboard")}
        >
        Dashboard
        </p>

        <p
            style={{ cursor: "pointer" }}
            onClick={() => setPage("setup")}
        >
            Business Setup
        </p>

        <p
            style={{ cursor: "pointer" }}
        >
            Settings
        </p>

        </div>
    );
}

export default Sidebar;