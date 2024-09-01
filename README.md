
# Error Handling Middleware for User Registration

This project showcases an Express.js application focused on creating error-handling middleware for a user registration system. The middleware ensures that input data meets specified criteria and returns informative error messages when it doesn't.

## Features

- **Name Validation:**
  - The first letter of both the first name and last name must be capitalized.
  - If the names do not meet this requirement, an error message will be returned.

- **Password Validation:**
  - The password must contain at least one special character, one uppercase letter, and one numeric character.
  - The password must be at least 8 characters long.
  - If the password does not meet these criteria, an error message will be returned.

- **Email Validation:**
  - The email address must contain the "@" symbol.
  - If the email address is invalid, an error message will be returned.

- **Phone Number Validation:**
  - The phone number must be at least 10 digits long.
  - If the phone number is too short, an error message will be returned.


## Contributing

Feel free to fork this project, submit issues, and make pull requests. Any contributions to improve the system are welcome!
