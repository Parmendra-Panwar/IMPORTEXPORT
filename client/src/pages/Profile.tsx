import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import styles from "./Profile.module.css";
import { setUser, clearUser } from "../redux/userSlice";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);
  console.log("gncfc");
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

  if (!user) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Profile</h1>
        <h2 className={styles.title}>No User Logged In</h2>
        <p className={styles.message}>Please log in to see your profile.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {user.username}!</h1>
      <div className={styles.info}>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Orders:</strong>{" "}
          {user.orders.length > 0
            ? user.orders.map((order, index) => (
                <span key={index}>
                  {order.item} (x{order.quantity})
                </span>
              ))
            : "No orders yet"}
        </p>
        <button onClick={() => dispatch(clearUser())} className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
