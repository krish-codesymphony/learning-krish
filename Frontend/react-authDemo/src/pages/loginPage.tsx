import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

function LoginPage() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const submit = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    const res = await submit.json();
    if (submit.ok) {
      localStorage.setItem("token", res.access_token);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/dashboard");
    } else console.log(submit.body);
  }

  return (
    <div className="loginPage">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          inputType="text"
          label="Enter Username:"
          id="username"
          inputName="username"
          changeHandler={handleChange}
        />
        <br />
        <InputField
          inputType="password"
          label="Enter Password:"
          inputName="password"
          id="password"
          changeHandler={handleChange}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
