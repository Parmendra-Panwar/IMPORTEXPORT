import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setUser, clearUser } from "../../redux/userSlice";
import styles from "./Auth.module.css";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const response = await fetch("http://localhost:3000/session", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          if (data.user) {
            dispatch(setUser(data.user));
          }
        }
      } catch (error) {
        console.error("Failed to fetch user session:", error);
      }
    };

    checkUserSession();
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/signup";
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : { ...formData };

    try {
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      const data = await response.json();
      if (data.user) {
        console.log("User received from backend:", data.user);
        dispatch(setUser(data.user));
        alert(data.message || (isLogin ? "Logged in" : "Signed up"));
        // window.location.href = "/mee";
      } else {
        alert("Authentication failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("An error occurred: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  // useEffect(() => {
  //   console.log(isLogin ? "Showing login form" : "Showing signup form");
  // }, [isLogin]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{isLogin ? "Login" : "Sign Up"}</h1>
        <h2>Hey Users</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input}
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          )}
          <button type="submit" className={styles.button}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className={styles.toggle} onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </div>
        {user && (
          <div className={styles.welcome}>
            Welcome, {user.username || user.email}!
            <button
              onClick={() => dispatch(clearUser())}
              className={styles.logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
