import React, {useState} from 'react'
import '../Css/addEmployee.css';

export function AddEmployee() {

  // Premission to save the values that the user fills in the form
  const [employee, setEmployee] = useState({
    employeeId: '',
    firstMidName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: ''
  });

  // Function that runs when one of the form fields changes
  const handleChange = (e) => {
    // Sets the state of the change input field with the new value provided by the user
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Function that runs when the user sends the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to a server with data from the form
    fetch('https://axb22z45ygh20230227215753.azurewebsites.net/create-employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
      .then((response) => {
        // Handle the response from the server
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Show a confirmation to the user that the employee was successfully created
        alert('Employee created successfully!');
        // Reset the form to its original values 
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
        // Display an error message to the user if the employee could not be created
        console.error('There was an error!', error);
        alert('Error creating employee!');
      });
  };

  return (
    <div className='addEmployee'>
      <h1 className='title'>Lägga till anställda i systemet</h1>
      <h3>Vänligen fyll i rutorna:</h3>

      {/* An HTML form component */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employeeId">Anställnings ID:</label>
          {/* An input field for Employment ID, set to a default value (0) */}
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            defaultValue="0"
            onChange={handleChange}
            readOnly
            required
          />
        </div>
        <div>
          <label htmlFor="firstMidName">Förnamn:</label>
          {/* An first name input field that updates the state when it changes */}
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
          <label htmlFor="lastName">Efternamn:</label>
          {/* An last name input field that updates the state when it changes */}
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
          <label htmlFor="address">Adress:</label>
          {/* An address input field that updates the state when it change */}
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
          <label htmlFor="city">Ort:</label>
          {/* An city input field that updates the state when it changes */}
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
          <label htmlFor="postalCode">Postnummer:</label>
          {/* An postal code input field that updates the state when it changes */}
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={employee.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="reset">Återställ formuläret</button>
        <button type="submit">Lägg till anställd</button>
        
      </form>
    </div>
  );
}





