import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/navbar";

const Admin = () => {
  const [datas, setDatas] = useState([]);
  async function getData() {
    const response = await fetch("http://localhost:3000/");
    const jsonData = await response.json();
    if (jsonData.status === true) {
      setDatas(jsonData.data);
    }
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getData();
  }, []);
  return (
    <>
      <table id="myTable">
        <tr className="header">
          <th style={{ width: "20%" }}>Name</th>
          <th style={{ width: "20%" }}>Email</th>
          <th style={{ width: "60%" }}>Message</th>
        </tr>
        {datas.length === 0 ? (
          <tr>
            <td>No data found</td>
          </tr>
        ) : (
          datas?.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.message}</td>
              </tr>
            );
          })
        )}
      </table>
    </>
  );
};

export default Admin;
