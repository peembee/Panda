import React, {useState} from 'react'

export function AddEmployee() {
  const [employee, setEmployee] = useState({
    employeeId: '',
    firstMidName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://axb22z45ygh20230227215753.azurewebsites.net/create-employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Employee created successfully!');
        setEmployee({
          employeeId: '',
          firstMidName: '',
          lastName: '',
          address: '',
          city: '',
          postalCode: ''
        });
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Error creating employee!');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={employee.employeeId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstMidName">First Name:</label>
          <input
            type="text"
            id="firstMidName"
            name="firstMidName"
            value={employee.firstMidName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={employee.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={employee.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={employee.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
}





