import { useState } from "react";
import { fetchUser } from "../lib/sanity/loginServices";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser, exists, setExists }) {
  const [loginData, setLoginData] = useState();
  const [formVisible, setFormVisible] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchUser(loginData.email);
    if (data == null) {
      setExists(false);
      return;
    }
    setExists(true);
    setUser(data);
    setFormVisible(false);
    navigate("/");
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setLoginData((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const handleCancel = () => {
    setLoginData({});
    setFormVisible(false);
  };

  return (
    <>
      {formVisible ? (
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
            {exists === false && <p>Brukeren finnes ikke</p>}
          </div>
        </div>
      ) : (
        <div className="user-info">
          <p>Logget inn som: {exists && exists.user_name}</p>
        </div>
      )}
    </>
  );
}
