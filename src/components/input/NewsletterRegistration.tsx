"use client";

import { useRef, useContext } from "react";
import { NotificationContext } from "@/store/NotificationContext";

import classes from "./NewsletterRegistration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const notifContext = useContext(NotificationContext);

  function registrationHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;

    notifContext.showNotification({
      title: "Stay tuned",
      message: "Submitting...",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response.json().then((data) => {
          return Promise.reject(
            new Error(data.message || "Something went wrong!")
          );
        });
      })
      .then((data) => {
        console.log(data);
        notifContext.showNotification({
          title: "Yay",
          message: "Your email submitted!",
          status: "success",
        });
      })
      .catch((e) => {
        notifContext.showNotification({
          title: "Ooops, error happened",
          message: e.message,
          status: "error",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
