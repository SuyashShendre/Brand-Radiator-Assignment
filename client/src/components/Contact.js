import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navbarSlice";

const Contact = () => {
  const data = { name: "", email: "", message: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  function handleData(e) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
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

      postData("http://localhost:3000/contact", inputData).then((data) => {
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
      <div className="container">
        <br />
        <br />
        <div className="col-div-6">
          <div className="box-1">
            <h3 className="heading1">Contact Us</h3>
            <p className="blog-heading">
              Submit your data and we will connect you soon
            </p>
          </div>
        </div>
        <div className="col-div-6">
          <div className="lr-box">
            {flag ? (
              <h2 style={{ borderRadius: "5%", color: "green" }}>
                Form Submitted Successfully
              </h2>
            ) : (
              ""
            )}
            <form onSubmit={handleSubmit}>
              <div className="input-box-contact">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={inputData.name}
                  onChange={handleData}
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  value={inputData.email}
                  onChange={handleData}
                />
                <input
                  type="textarea"
                  placeholder="Enter Your Message"
                  name="message"
                  value={inputData.message}
                  onChange={handleData}
                />
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </>
  );
};

export default Contact;
