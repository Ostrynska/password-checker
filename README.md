# Password Strength Checker

This project is an Angular application to test the strength of a password in real-time. The application provides visual feedback on the strength of the entered password based on specific criteria.
![image](https://github.com/user-attachments/assets/a727ef94-1839-4835-b84c-d5faa149b74b)

## Features

- Password input field
- Real-time password strength evaluation
- Three visual indicators showing the strength of the password
- Strength criteria:
  - Only letters/digits/symbols: easy (first section red, others gray)
  - Combination of letters-symbols/letters-digits/digits-symbols: medium (first two sections yellow, last one gray)
  - Has letters, symbols, and numbers: strong (all sections green)
  - Field is empty: all sections gray
  - Password length less than 8 characters: all sections red

## Setup and Installation

### Prerequisites

- Node.js (>=12.x)
- Angular CLI (>=12.x)

### Installation

1. Clone the repository:
      ```bash
   git clone https://github.com/your-username/password-strength-checker.git
2. Navigate to the project directory:
     ```bash
     cd password-strength-checker
3. Install the dependencies:
    ```bash
    npm install

### Running the Application
To run the application locally, use the following command: ng serve.
The application will be available at http://localhost:4200.
