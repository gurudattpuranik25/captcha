import { useState } from "react";
import "./App.css";
import registerImage from "./assets/register.jpg";
import Footer from "./Footer";

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

  const [theme, setTheme] = useState(false);

  const { name, email, password, confirmPassword, captchaInput } = formData;

  const generateCaptcha = () => {
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const first = alphabets[Math.trunc(Math.random() * alphabets.length)];
    const second = Math.trunc(Math.random() * 10);
    const fourth = alphabets[Math.trunc(Math.random() * alphabets.length)];
    const third = Math.trunc(Math.random() * 10);
    const fifth = alphabets[Math.trunc(Math.random() * alphabets.length)];
    const sixth = Math.trunc(Math.random() * 10);
    const combinedCaptcha =
      first.toString() +
      second.toString() +
      third.toString() +
      fourth.toString() +
      fifth.toString() +
      sixth.toString();
    setCaptcha(combinedCaptcha);
  };

  useState(() => {
    setMessage("");
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.toString().length < 6) {
      setMessage("Password should have a minimum of 6 characters");
    } else if (!(password.toString() === confirmPassword.toString())) {
      setMessage("Password didn't match!");
    } else if (!(captchaInput.toString() === captcha.toString())) {
      setMessage("Captcha didn't match");
    } else {
      setMessage("Registration successfull!!");
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
    generateCaptcha();
  };

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div className={theme ? "dark__body" : "body"}>
      <i
        className={`fa-solid fa-circle-half-stroke ${
          theme ? "dark__theme" : "light__theme"
        }`}
        onClick={handleThemeChange}
      ></i>
      <div className="app">
        <div className="logo">
          <h1 className={`${theme ? "dark__tagline" : "tagline"}`}>
            {" "}
            <i
              className={`fa-brands fa-dev ${theme ? "dark__logo" : ""}`}
            ></i>{" "}
            <span>D</span>
            evdock, the ultimate developer guide.
          </h1>
        </div>
        <div className="registerSection">
          <img src={registerImage} alt="" />
          <div className="registerForm">
            <h2 id={`${theme ? "dark__tag" : "tag"}`}>
              Design . Develop . Deploy
            </h2>
            <h3 id={`${theme ? "dark__registerTag" : "registertag"}`}>
              Register below <i className="fa-solid fa-arrow-down"></i>{" "}
            </h3>
            <form className="form" onSubmit={handleSubmit}>
              <input
                className={`${theme ? "dark__input" : "light__input"}`}
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <input
                className={`${theme ? "dark__input" : "light__input"}`}
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <input
                className={`${theme ? "dark__input" : "light__input"}`}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <input
                className={`${theme ? "dark__input" : "light__input"}`}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <input
                className={`${theme ? "dark__input" : "light__input"}`}
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
              <button id={`${theme ? "dark__btnSubmit" : "btnSubmit"}`}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <p className={`${theme ? "dark__message" : "light__message"}`}>
          {message}
        </p>
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
