Team Panda.

Link to our Kanban-board https://trello.com/b/7yOeYWuv/agile-board-trello

This group project was made for the end project for the courses Frontend & Agile methods.
This project was about creating an application to handle times and projects that is logged on Swagger API.
The Application was built in Visual Studio Code and Swagger API.

To be able to use/start this application you need to install these commands to the console:

- npm install react-bootstrap bootstrap
- npm install bootstrap
- npm install react-scripts
- npm install mdb-react-ui-kit
- npm install @fortawesome/fontawesome-free
- npm install react-router-dom --save
  After these are installed you need to type "npm start" in console to open up a new webpage on your web browser.

When you are starting the application you need to log in on a unique ID and password. If you are logged in as a CEO or Admin you are able to:

- Create new projects
- Check active projects
- Check inactive projects
- Check all projects
- Handle timereports.
- Add new employee
- Check all employees

And if you are logged in as a employee you are able to:

- Create new projects
- Check active projects
- Check inactive projects
- Check all projects
- Handle timereports.

---

App.js
This code is a React application that defines the bahavior of the web application. It includes the following features:

- It imports necessary CSS styles from Bootstrap and local style files.
- It import various components that are used to build the web application , such as NavBar, Home, SignIn, NewProject, ActiveProjects, InactiveProjects, ProjectLists, ReportTime, AddComment, TimeLog, AddEmployee, DisplayEmployees, Information and Footer.
- It defines a state variable called 'User' that is used to keep track of the user's information, also it defines a function called 'handleSignOut' that clears the 'user' state varibale and sets 'showSignIn' to true.
- It defines a conditional rendering structure that renders either the 'HomeComponent' and other components if the 'showSignIn' state variable is false, or the 'SignInCompoment' if it is true.
- It exports the 'App' component as the default export of this module.
  In summary, this code creates a web application that displays a sign-in page by default. Once the user logs in, they will be redirected to the home page and will be able to access various other components that are part of this app, such as project lists, reports, and employee information.

---

ActiveProjects.js
This is a React component called "ActiveProjects". It imports "useState" and "useEffect" hooks from React, and CSS files for styling.

- The component fetches data from an API using 'fetch' method and the useEffect hook to handle the API request. The fetched data is then stored in the 'SwaggerData' using 'useState' hook.
- While the data is being fetched, a loading screen is displayed. Once the data is fetched and loaded, the component renders a table that show only the active projects. The table is styled by using CSS.
- If there is an error while fetching the data, an error is displayed on the screen.

---

AddComment.js
This is a React component called 'AddComment'. The component has several different states used to manage data within the components, such as 'error', 'loaded', 'swaggerData', 'selectedProjectId', 'selectedProjectName', and 'comment'.
It imports "useState" and "useEffect" hooks from React, and CSS files for styling.

- The component also uses the useEffect hook to make a fetch call to an endpoint that returns project data. When the data is fetched, 'loaded' is set to true and the data is stored in the 'swaggerData' state.
- The component also includes a Dropdown component from React Bootstrap that renders a list of all available projects. When the user selects a project from the list, the 'selectedProjectId' and 'selectedProjectName' states are set to the ID and name of the selected project, respectively.
- If there is an error fetching data from the server, an error message will be displayed. If the data is still loading, a loading icon will be displayed, otherwise the component itself will be rendered.
- Last but not least, there is a textarea that the user can fill in with comments. When the user types a comment, the 'comment' state is updated with the new comment.

---

AddEmployee.js
This is a React components called 'AddEmployee' that allows the user to add a new employee to the system. The component imports React and useState from the React library, as well as 'Form' from the Bootstrap library. It also imports a CSS file for styling and a image for displaying an icon.

- The AddEmployee component contains a state object that keeps track of the form inputs for the employee object that is being added. It sets the default values for these inputs using the useState hook. The state object can be updated with the onChange method, which is triggered every time one of the form inputs is changed. When the user submits the form, a POST request is made to a server to create a new employee with the data entered in the form.
- The form is rendered using the Form component from React Bootstrap. It contains several input fields for the user to fill in, such as role, password, first name, last name, address, postal code, and city. Each input field is associated with a label, which is created using the htmlFor attribute. The value of each input field is set to the corresponding value in the state object, and the onChange method is used to update the state object when the user changes the input field.
- When the form is submitted, a fetch request is made to the server to create a new employee. If the request is successful, the user is notified with an alert message that the employee was created successfully, and the form is reset to its initial state. If there is an error creating the employee, the user is notified with an error message.

---

DisplayEmployees.js
This code defines a React component called 'DisplayEmployees' that displays a table of employee data fetched from an Swagger API endpoint.

The component initializes four state variables using the useState hook:

- 'error' is used to store any error messages returned from the API endpoint.
- 'loaded' indicates whether the data has finished loading or not.
- 'swaggerData' stores an array of employee objects fetched from the API endpoint.
- 'visiblePasswordId' is used to keep track of which employee's password should be visible in the table.

- The useEffect hook is used to fetch the employee data from the API endpoint when the component mounts. If the fetch is successful, the 'loaded' state variable is set to true and the 'swaggerData' state variable is set to the array of employee objects returned by the API. If there is an error, the 'loaded' state variable is still set to true, but the 'error' state variable is set to the error message.
- The component also defines a function called togglePasswordVisibility, which takes an employee ID as an argument and toggles the 'visiblePasswordId' state variable to show or hide that employee's password in the table.
- Finally, the component returns a table of employee data using the 'swaggerData' state variable. If there is an error, an error message is displayed instead. If the data is still loading, a loading icon is displayed instead.

---

Footer.js
This code defines a functional React component called Footer that returns a footer element containing a paragraph with the text "© 2023 Panda Management". The CSS for this footer is imported from a file named footer.css. Additionally, this component is exported as a default export. Which appears on every page except from the sign in page, where the footer is placed in the log in formular.

---

Home.js
This is a React component called 'Home' that renders a home page with several cards, each containing an image, title, description and a button to navigate to a related page. The component imports images and styles from other files, as well as the React Bootstrap and React Router DOM libraries.

- The 'useState' hook is used to declare the 'signedInUser' state variable and initilize it with the 'sendUser' prop value passed the component.
- The 'showStuffFunctions' function returns the JSX markup for the cards and buttons. Each card contains an image on the left and a title and description on the right, with a button at the bottom. The 'Link' component from React Router DOM is used to wrap the button and specify the target URL.
- The 'HomeComponent' function is exported as a called export and receives a sendUser prop, which is passed to the 'useState' hook to set the initial state value for the 'signedInUser' variable.

---

InactiveProjects.js
This vode is a React component called 'InactiveProjects'. It imports React, useState, useEffect and some CSS files for styling.

- Inside the component, it declares three states using the useState hook: 'error', 'loaded', and 'SwaggerData'. 'error' and 'loaded' are initialized as 'null' and 'false', respectively. 'SwaggerData' is initialized as an empty array.
- Then, it uses the 'useEffect' hook to fetch data from an external API endpoint using the 'fetch' function. If the request is successful, it sets the 'loaded' state to 'true' and stores the result in the 'SwaggerData' state. If there is an error, it sets the 'loaded' state to 'true' and stores the error message in the 'error' state.
- Next, the component conditionally renders different content depending on the state of 'error' and 'loaded'. If there is an error, it displays an error message. If the data is still loading, it displays a loading spinner. If the data has loaded successfully, it filters the 'SwaggerData' state to find all projects with a status of "Inactive". It then maps over those projects and renders a table with their project ID, name, and description.

Finally, the component returns the rendered content.

---

Information.js
This code defines a functional component called 'Information'. When rendered, it display information about a company called 'Panda Management' that offers time management services to monitor employee work and project status.

- The component contains several HTML elements such as headers, paragraph, images and it uses CSS classes to style these elements.
- The image is displayed along with the company's information, including email address, phone number and the physical address.

The purpose of this component is to provide information about 'Panda Management' and how to contact them if interested in their services or with any questions.

---

NavBar.js
This is a functional React component called 'NavbarComponent' that creates a navigation bar. It imports several dependencies including React, 'useEffect', 'NavLink' from React Router, and some components from 'react-bootstrap'. The component takes a single prop handleSignOut which is a function that is called when the user clicks on the "Logga ut" link.

- The component uses the 'useEffect' hook to add and remove an event listener for the 'scroll' event. Inside the 'useEffect' hook, it finds the navbar element and its offset from the top of the page, then defines a function called 'toggleNavbarClass' that adds or removes a CSS class from the navbar based on the user's scroll position. When the user scrolls, the 'toggleNavbarClass' function is called and the navbar's CSS class is updated accordingly.
- The component returns a 'Navbar' component from 'react-bootstrap' that contains a 'Navbar.Brand', an image of a panda, and a link to the homepage. It also has a dropdown menu icon and a collapsible 'Navbar.Collapse' component that contains links to different pages and a "Logga ut" link that triggers the 'handleSignOut' function when clicked.

---

NewProject.js
This is a React component called 'NewProject' that creates a new project in a project management system. The component uses React Bootstrap to create a modal window where the user can input data about the new project. Once the user submits the data, the component makes an API call to create the new project and add it to a project list.

- The component uses the 'useEffect' hook to make API requests to the application's backend. One effect fetches the list of all projects in the database, and another effect fetches the list of all project lists. The 'useEffect' hook is also used to update the 'projectId' variable whenever the 'swaggerData' state variable changes.
- The component uses several state variables to manage the data input and API calls. It also uses several 'useEffect' hooks to update the state variables when necessary. The component has a function called 'checkInput' that validates the input the data and prevents null-values to be sent to the API.
- The component has a prop called 'sendUser' that contains the ID of the user who is creating the new project. The component uses this ID to add the new project to the correct project list.

Overall, this is a well-organized and efficient React component that effectively manages the creation of new projects in a project management system.

---

ProjectList.js
This is a React functional component called 'ProjectList' that displays a list of projects fetched from an API.

- First of all, we import the necessary React hooks and CSS files.
- We define a functional component called 'ProjectsList'.
- Inside the component, we declare three state variables using the 'useState' hook. 'error will hold any error that occurs while fetching data, 'loaded' will be used to check if the data has finished loading, and 'SwaggerData' will hold the list of projects fetched from the API.
- Next, we use 'useEffect' hook to fetch the list of projects when the component mounts. The 'fetch' function is used to send a 'GET' request to the API endpoint, Swagger API. Once the response is received, we parse the JSON data using the 'json' method and update the 'loaded' and 'SwaggerData' states using the 'setLoaded' and 'setSwaggerData' functions, respectively. If an error occurs while fetching the data, we set the 'error' state using the 'setError' function.
- We then use conditional rendering to display different content based on the state of the component. If 'error' is not null, we display an error message. If 'loaded' is false, we display a loading animation. Otherwise, we display the list of projects using the 'map' method to loop over each project and display its details in a table row.

Overall, this code demonstrates the use of React hooks to fetch and display data from an API in a functional component.

---

ReportTime.js
This is another React functional component called 'ReportTime' that renders a form for users to report time on a project.
It imports two other functional components, 'TimeLog' and 'AddComment', which are used to render a time picker and a dropdown menu for selecting a project and adding comments. It also imports the 'Button' component from the React-Bootstrap library for the submission of the form.

- The component takes in a prop called 'sendUser', which contains a unique identifier for the current user. This identifier is used to add the user's ID to the 'projectList' object that is posted to the API.
- The component defines a function called 'PostToSwagger' which is triggered when the user clicks the 'Skicka in' button. This function send a 'PUT' request to the Swagger API with the 'projectList' object containing the selected project, start and end times, comments and the user's ID.
- The 'ReportTimeä component returns a <div> that contains the 'TimeLog' and 'AddComment' components, along with the 'Button' component for submitting the form. The 'render' and 'renderComment' variables returned from 'TimeLog' and 'AddComment' are used to render their respective components.

Overall, the 'ReportTime' component is used to allow user's to report time spent on a project with the ability to add comments about the project.

---

SignIn.js
This is React component called 'SignIn' that contains a login form. It retrieves employee data from an API and compares user-entered data with the retrieved data. If the entered data matches the retrieved data, it sets the user object to the retrieved data and calls the 'setUser' function.
The component imports various components from react-bootstrap and mdb-react-ui-kit for styling and form inputs. It also imports an image and two CSS files for additional styling.

The component defines the following state variables:

- ID : stores the user-entered ID
- Password : stores the user-entered password
- sendUser : stores the user data that will be sent to the App component if the user's ID and password match the retrieved data.
  -swaggerData: stores the retrieved employee data from the API
  -error: stores any errors that occur when retrieving data from the API
  -loaded: stores a boolean value indicating whether the data has been retrieved from the API or not.

The component defines two functions that handle user input, inputFromUniqueId() and inputFromPassword(). These functions store the user-entered data in the ID and password state variables.

The component defines a 'handleSignIn()' function that compares the user-entered ID and password with the retrieved data. If the ID and password match, it sets the 'sendUser' state variable to the retrieved data and calls the 'setUser' function with the data. If the ID and password do not match, it logs an error message to the console.

The component renders a NavBar and a login form that includes two input fields with the user's ID and password, and a button to submit the form. When the button is clicked, it calls the 'handleSignIn()' function.

---

TimeLog.js
This is a React component called 'TimeLog' that is being used to create a time tracking functionality. It includes a timer that starts when the user clicks the 'Starta arbete' button, a 'Rast' button to pause the timer and an 'Avsluta Arbete' button to stop the timer. The time is displayed on the page in hours, minutes and seconds format.

The code defines a function called 'TimeLog' that returns an object containing the time when the clock started and the time when it stopped as well as a component to render. The function uses React hooks to manage state and effects.

The 'useState' hook is used to manage state variables for the time, start and end times, and whether the start, break and end buttons are active. The 'useRef' hook is used to manage the timer interval ID so that it can be cleared when necessary. The 'useEffect' hook is used to clear the timer interval when the component is unmounted.

The 'handleClick' function is called when the "Starta arbete" button is clicked, which sets the start time and sets the 'hasStarted' flag to true. The 'timeInterval' function is called to start the timer interval when the 'Starta arbete' button is clicked.

The 'handleDateStart' function is called when the 'Starta Arbete' button is clicked, which sets the start time and updates the state variables for the start, break, and end buttons. The 'handleDateEnd' function is called when the 'Avsluta arbete' button is clicked, which sets the end time, clears the timer and updates the state variables for the start, break and end buttons.

The 'handleLunchBreak' function is called when the 'Rast' button is clicked, which clears the timer interval and updates the state variables for the start and break buttons.

The 'getSeconds', 'getMinutes', and 'getHours' functions are used to calculate the time in hours, minutes, and seconds format.

Overall, the component provides a timer that can be started, paused, and reset. It also tracks the start and end times of the timer.

---

