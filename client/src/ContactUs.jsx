import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/navbar";

const ContactUs = () => {
  const data = { name: "", email: "", message: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  function handleData(e) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    // console.log(inputData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.message) {
      alert("All fields are required");
    } else {
      async function postData(url = "", data = {}) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return response.json();
      }

      postData("http://localhost:3000/", inputData).then((data) => {
        setInputData({ name: "", email: "", message: "" });
        setFlag(true);
      });
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div>{flag ? <h2>Form Submitted Successfully</h2> : ""}</div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={inputData.name}
            onChange={handleData}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email.."
            value={inputData.email}
            onChange={handleData}
          />

          <label htmlFor="message">Message</label>
          {/* <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style={{ height: "200px" }}
            onChange={handleData}
          >
            {inputData.message}
          </textarea> */}

          <input
            type="textarea"
            id="message"
            name="message"
            placeholder="Your Message.."
            value={inputData.message}
            onChange={handleData}
            rows="5"
            cols="5"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
