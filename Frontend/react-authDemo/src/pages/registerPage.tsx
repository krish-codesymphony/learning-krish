import { useState } from "react";
import InputField from "../components/InputField";

function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [empDetails, setEmpDetails] = useState({
    department: "",
    salary: 0,
  });

  function handleUserChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  }
  function handlePerDetailsChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalDetails((values) => ({ ...values, [name]: value }));
  }
  function handleEmpDetailsChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setEmpDetails((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const submit = await fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify({
        user: user,
        personalDetails: personalDetails,
        employmentDetails: empDetails,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    return await submit.json();
  }

  return (
    <div className="registerPage">
      <h1>Register User</h1>
      <form onSubmit={handleSubmit} method="post">
        <InputField
          inputType="text"
          label="Username: "
          inputName="username"
          id="username"
          changeHandler={handleUserChange}
        />
        <br />
        <InputField
          inputType="password"
          label="Password: "
          inputName="password"
          id="password"
          changeHandler={handleUserChange}
        />
        <br />
        <p>
          [Roles: 'Regional Manager', 'HR Representative', 'Assistant to the
          Regional Manager', 'Accountant', 'Office Administrator', 'Salesmen',
          'Customer Service', 'Visitor']
        </p>
        <InputField
          inputType="text"
          label="Select Roles: "
          inputName="role"
          id="role"
          changeHandler={handleUserChange}
        />
        <br />
        <hr />
        <InputField
          inputType="text"
          label="First Name: "
          inputName="firstName"
          id="firstName"
          changeHandler={handlePerDetailsChange}
        />
        <br />
        <InputField
          inputType="text"
          label="Last Name: "
          inputName="lastName"
          id="lastName"
          changeHandler={handlePerDetailsChange}
        />
        <br />
        <InputField
          inputType="email"
          label="E-Mail: "
          inputName="email"
          id="email"
          changeHandler={handlePerDetailsChange}
        />
        <br />
        <InputField
          inputType="tel"
          label="Phone Number: "
          inputName="phone"
          id="phone"
          changeHandler={handlePerDetailsChange}
        />
        <br />
        <InputField
          inputType="text"
          label="Gender [Male/Female]: "
          inputName="gender"
          id="gender"
          changeHandler={handlePerDetailsChange}
        />
        <br />
        <hr />
        <p>
          [Department: 'Management', 'Sales', 'Reception', 'Accounting',
          'Customer Service', 'Human Resources']
        </p>
        <InputField
          inputType="text"
          label="Select Department: "
          inputName="department"
          id="department"
          changeHandler={handleEmpDetailsChange}
        />
        <br />
        <InputField
          inputType="number"
          label="Salary: "
          inputName="salary"
          id="salary"
          changeHandler={handleEmpDetailsChange}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default RegisterPage;
