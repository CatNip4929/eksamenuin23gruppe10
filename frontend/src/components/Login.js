import { useState } from "react";
import { fetchUser } from "../lib/sanity/loginServices";
import { Navigate } from "react-router-dom";

export default function Login({ setUser, exists, setExists }) {
  //lagre data for det som er skrevet inn i input field
  const [loginData, setLoginData] = useState();
  const [formVisible, setFormVisible] = useState(true);
  //håndterer submitt for getLoginData
  const handleSubmit = (e) => {
    e.preventDefault();
    //Tar inhold i input fields og sjekker opp mot dataen fra fetchUser spørringen
    getLoginData();
  
  };

  var goToDash = false

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setLoginData((prev) => ({ ...prev, [inputName]: inputValue }));
  };
  const getLoginData = async () => {
    const data = await fetchUser(loginData.email);
    if (data == null) {
      //no user
      // console.log("no user")
      setExists(false);
      return;
    }
    //set session data
    // console.log("found user"+data.user_mail)
    setExists(true);
    setUser(data);
    setFormVisible(false);
    goToDash = true
  };

  const handleCancel = () => {
    setLoginData({});
    setFormVisible(false);
  };

  return (
    <>
      {formVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login">
              <label>E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="name@catmail.com"
                name="email"
                required
                onChange={handleChange}
              ></input>
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                disabled
              ></input>
              <div>
              <button type="submit">Login</button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
            {exists === false ? (
              <p>
                Brukeren finnes ikke 
              </p>
            ) : null} 
            {goToDash === true ? (
              <Navigate to="/dashboard"/>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
