import { useState } from "react";
import "./App.css";
import registerImage from "./assets/register.jpg";

function App() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });

  const [captcha, setCaptcha] = useState("");

  const { name, email, password, confirmPassword } = formData;

  useState(() => {
    const randomNumber = Math.trunc(Math.random() * 100000);
    setCaptcha(randomNumber);
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="registerSection">
        <img src={registerImage} alt="" />
        <div className="registerForm">
          <div className="logo">
            <i className="fa-brands fa-dev"></i>
            <h1>Devdock</h1>
          </div>
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
              <input
                type="text"
                id="captcha"
                value={captcha}
                placeholder="captcha"
                readOnly
              />
              <i className="fa-solid fa-arrows-rotate" onClick={refresh}></i>
            </div>
            <button id="btnSubmit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
