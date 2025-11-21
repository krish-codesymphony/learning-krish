import { useState } from "react";
import InputField from "../components/InputField";

function LoginPage() {
  const [data, setData] = useState({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name.substring(5).toLowerCase();
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const submit = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    const res = await submit.json();
    if (submit.ok) console.log(res);
    else console.log(submit.body);
  }

  return (
    <div className="loginPage">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          inputType="text"
          label="Enter Username:"
          id="loginUsername"
          inputName="loginUsername"
          changeHandler={handleChange}
        />
        <br />
        <InputField
          inputType="password"
          label="Enter Password:"
          inputName="loginPassword"
          id="loginPassword"
          changeHandler={handleChange}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
