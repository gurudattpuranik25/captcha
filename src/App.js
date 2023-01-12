import { useState } from "react";
import "./App.css";
import registerImage from "./assets/register.jpg";

function App() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState("");

  const [message, setMessage] = useState("");

  const { name, email, password, confirmPassword, captchaInput } = formData;

  useState(() => {
    setMessage("");
    setCaptcha(Math.trunc(Math.random() * 1000000));
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(captchaInput.toString() === captcha.toString())) {
      setMessage("Captcha didn't match 😐");
    } else if (!(password.toString() === confirmPassword.toString())) {
      setMessage("Password didn't match! 😐");
    } else {
      setMessage("Registration successfull!! 🤩");
    }
    setformData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      captchaInput: "",
    });
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="logo">
        <h1 id="tagline">
          {" "}
          <i className="fa-brands fa-dev"></i> <span>D</span>evdock, the
          ultimate developer guide.
        </h1>
      </div>
      <div className="registerSection">
        <img src={registerImage} alt="" />
        <div className="registerForm">
          {/* <div className="logo">
            <i className="fa-brands fa-dev"></i>
            <h1>Devdock</h1>
          </div> */}
          <h2 id="tag">Design . Develop . Deploy</h2>
          <h3>
            Register below <i className="fa-solid fa-arrow-down"></i>{" "}
          </h3>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="text"
              placeholder="Enter the Captcha"
              name="captchaInput"
              value={captchaInput}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="captcha">
              <input
                type="text"
                id="captcha"
                value={captcha}
                placeholder="captcha"
                autoComplete="off"
                readOnly
              />
              <i className="fa-solid fa-arrows-rotate" onClick={refresh}></i>
            </div>
            <button id="btnSubmit">Sign Up</button>
          </form>
        </div>
      </div>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
