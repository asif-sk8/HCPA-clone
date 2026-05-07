function BusinessForm({
  businessName,
  setBusinessName,
  businessType,
  setBusinessType,
  handleSubmit
}) {

  return (
    <div>

      <h1>Business Setup Form</h1>

      <label>Business Name</label>
      <br />

      <input
        type="text"
        value={businessName}
        onChange={(event) =>
          setBusinessName(event.target.value)
        }
      />

      <br />
      <br />

      <p>You entered: {businessName}</p>

      <br />

      <label>Business Type</label>

      <br />

      <select
        value={businessType}
        onChange={(event) =>
          setBusinessType(event.target.value)
        }
      >
        <option>(Select an option)</option>
        <option>Sole Trader</option>
        <option>Pty Ltd</option>
        <option>Partnership</option>
      </select>

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}

export default BusinessForm;