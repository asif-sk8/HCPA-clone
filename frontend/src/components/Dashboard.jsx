function Dashboard({ businesses, toggleTask, handleDelete }) {

    return (
        <div>
        <h1>Welcome to HCPA-Clone</h1>
        <p>This is your dashboard.</p>

        {businesses.length === 0 && (
            <p>No businesses added yet.</p>
        )}

        {businesses.map((biz, index) => (

            <div key={index} style={{ marginBottom: "20px" }}>

            <p>
                <strong>{biz.name}</strong> - {biz.type}
            </p>

            {biz.tasks.map((task, taskIndex) => (

                <div key={taskIndex}>

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(index, taskIndex)}
                />

                <span
                    style={{
                    textDecoration: task.completed
                        ? "line-through"
                        : "none",

                    color: task.completed
                        ? "gray"
                        : "black"
                    }}
                >
                    {task.name}
                </span>

            </div>

            ))}

            <button onClick={() => handleDelete(index)}>
                Delete
            </button>

        </div>

        ))}

    </div>
    );
}

export default Dashboard;