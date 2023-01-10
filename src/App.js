import { useState } from "react";
import "./App.css";
import registerImage from "./assets/register.jpg";

function App() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <div className="registerSection">
        <img src={registerImage} alt="" />
        <div className="registerForm">
          <h1>Devdock</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
            <div className="captcha">
              <input type="text" id="captcha" placeholder="captcha" />
              <i className="fa-solid fa-arrows-rotate"></i>
            </div>
            <button id="btnSubmit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
