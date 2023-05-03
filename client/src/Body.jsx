import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/navbar";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div style={{ paddingLeft: "16px" }}>
        <p>Home Page</p>
      </div>
    </>
  );
};

export default Body;
