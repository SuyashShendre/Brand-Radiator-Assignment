import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navbarSlice";

const Admin = () => {
  const [items, setItems] = useState("");
  const [activePage, setActivePage] = useState(1);

  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);

  const limit = 2;
  const totalPages = (totalU, limit) => {
    const pages = [];
    for (let x = 1; x <= Math.ceil(parseInt(totalU) / limit); x++) {
      pages.push(x);
    }
    return pages;
  };

  function handleData(e) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
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

      postData("http://localhost:3000/login", inputData).then((data) => {
        setInputData({ email: "", password: "" });
        localStorage.setItem("adminId", JSON.stringify(data.data.adminId));
        setItems(JSON.parse(localStorage.getItem("adminId")));
        getData();
      });
    }
  }

  const [datas, setDatas] = useState([]);
  const [total, setTotal] = useState(0);

  async function getData() {
    const response = await fetch(
      `http://localhost:3000/contact?page=${activePage}&size=${limit}`
    );
    const jsonData = await response.json();
    if (jsonData.status === true) {
      setDatas(jsonData.data);
      setTotal(jsonData.total);
      setItems(JSON.parse(localStorage.getItem("adminId")));
    }
  }

  function logout() {
    localStorage.removeItem("adminId");
    setItems("");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    if (JSON.parse(localStorage.getItem("adminId"))) {
      getData();
    }
  }, [activePage]);

  return (
    <>
      <div className="container">
        {items ? (
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/006/184/737/small/logout-sign-out-icon-in-line-style-vector.jpg"
            alt="logout"
            height="50px"
            style={{ float: "right", cursor: "pointer" }}
            onClick={logout}
          />
        ) : (
          ""
        )}

        {!items ? (
          <div>
            <br />
            <br />
            <div className="col-div-6">
              <div className="box-1">
                <h3 className="heading1">Admin Panel</h3>
                <p className="blog-heading">
                  Only Authorized admin can access data
                </p>
                <p className="text">
                  <h4>To register yourself</h4>
                  <h4>1. Start backed server</h4>
                  <h4>2. You can use api http://localhost:3000/register</h4>
                  <h4>
                    3. Enter data like email and password
                    <h4> [Ex."email":"abc@gmail.com","password": "123456"]</h4>
                  </h4>
                  <h4>4. Then try to login</h4>
                </p>
              </div>
            </div>
            <div className="col-div-6">
              <div className="lr-box">
                <form onSubmit={handleSubmit}>
                  <div className="input-box-contact">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      name="email"
                      value={inputData.email}
                      onChange={handleData}
                    />
                    <input
                      type="text"
                      placeholder="Enter Your password"
                      name="password"
                      value={inputData.password}
                      onChange={handleData}
                    />
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        ) : datas.length === 0 ? (
          <tr>
            <td>No data found</td>
          </tr>
        ) : (
          <>
            <div className="container">
              <table id="list-contact">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>

                {datas?.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.message}</td>
                    </tr>
                  );
                })}
              </table>
              <div className="pagination">
                {totalPages(total, limit).map((n) => (
                  <a href="#" key={n} onClick={() => setActivePage(n)}>
                    {n}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Admin;
