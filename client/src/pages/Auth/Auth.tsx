import React, { useState, useEffect } from "react";
import styles from "./Auth.module.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/signup";
    const response = await fetch(`http://localhost:3000${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message || (isLogin ? "Logged in" : "Signed up"));
  };

  useEffect(() => {
    console.log(isLogin ? "Showing login form" : "Showing signup form");
  }, [isLogin]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{isLogin ? "Login" : "Sign Up"}</h1>
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
          {/* {!isLogin && ( */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.input}
            onChange={handleInputChange}
            required
          />
          {/*  )} */}
          <button type="submit" className={styles.button}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className={styles.toggle} onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
