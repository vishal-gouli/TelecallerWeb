
This project features a user authentication system with role-based access control and a dashboard with CRUD operations for Truecaller data.

## Frontend

The frontend, built with React.js, includes the following pages:

-   **Signup Page (`signup.jsx`):** Allows new users to create an account.
-   **Login Page (`login.jsx`):** Enables existing users to log in to the application.
-   **Home Page:** Upon successful login, users are prompted to enter their role and a secret key.
-   **Role-Based Redirection:**
    -   If the correct secret key for a specific role is entered, the user is redirected to the corresponding page.
    -   For example, entering the secret key for "truecaller" redirects the user to the Truecaller page.
-   **Truecaller Page (`truecaller.jsx`):** This page provides Create, Read, Update, and Delete (CRUD) functionalities for Truecaller data.
-   **Dashboard Page (`dashboard.jsx`):** Displays relevant information and insights.

## Backend

The backend is structured with dedicated controllers and models. Files related to user authentication (signup and login) are prefixed with `user` (e.g., `userController.js`). Similarly, files handling Truecaller data CRUD operations are prefixed with `truecaller` (e.g., `truecallerController.js`).

## Running the Application

**Backend:**

1.  Navigate to the backend directory in your terminal.
2.  Run the command: `npm start`

**Frontend:**

1.  Navigate to the frontend directory in your terminal.
2.  Run the command: `npm run dev`

Ensure you have Node.js and npm (or yarn) installed on your system.
