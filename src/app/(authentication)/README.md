# Authentication Flow for User Registration and Login

This document outlines the authentication process for new and returning users, including the route names and steps involved in the user registration and login process.

## Authentication Flow

1. **User Provides Identifier**
   - **Route**: `/provide-identifier`
   - **Purpose**: This is the initial step where the user inputs either their **email** or **username** to start the authentication process.
   - **Next Steps**:
     - If the user exists, they are redirected to the `/provide-password` page to enter their password.
     - If the user does not exist, they are redirected to the `/select-user-type` page to specify their user type.

2. **User Provides Password**
   - **Route**: `/provide-password`
   - **Purpose**: For existing users, this page prompts them to input their password for verification and authentication.
   - **Next Steps**: Upon entering the correct password, the user is logged in and redirected to the main application.

3. **User Selects Type (Organization or Student)**
   - **Route**: `/select-user-type`
   - **Purpose**: For new users who don’t already have an account, this page allows them to specify their user type: **Organization** or **Student**. This choice may affect the data collected and their access permissions.
   - **Next Steps**: After choosing a type, the user is directed to the `/user-create` page to complete the registration process.

4. **User Account Creation**
   - **Route**: `/user-create`
   - **Purpose**: On this page, the new user provides additional information to set up their account. Required details include:
     - **Username**
     - **Email**
     - **Name**
     - **Password**
   - **Next Steps**: After successful account creation, the user is automatically logged in and redirected to the main application.

5. **Login Page**
   - **Route**: `/login`
   - **Purpose**: This page serves as the main entry point for users who already have an account. It allows existing users to re-authenticate and gain access to their account.

## Summary of Routes

Below is a quick reference to the routes and their functions in the authentication flow.

| Route                  | Purpose                                                                                  |
|------------------------|------------------------------------------------------------------------------------------|
| `/provide-identifier`  | User provides their email or username to start the login or registration process.        |
| `/provide-password`    | Existing user provides their password for authentication.                                |
| `/select-user-type`    | New user specifies whether they are an organization or a student.                        |
| `/user-create`         | New user provides additional details (username, email, name, password) to create an account. |
| `/login`               | Standard login page for returning users to access their account.                         |

## Additional Notes

- **Conditional Routing**: Based on the user’s identifier status (existing vs. new), they are conditionally routed to either the password input page or the user type selection page.
- **Automatic Login After Registration**: Upon successful account creation on the `/user-create` page, the new user is automatically logged in and redirected to the main app.

This structured approach ensures a smooth and user-friendly authentication process with clear, descriptive route names for each step.
