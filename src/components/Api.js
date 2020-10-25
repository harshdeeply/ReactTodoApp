import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Api = () => {
  const [data, setData] = useState({
    response: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/image/random");
      setData({ response: result.data, loading: false });
    };
    fetchData();
  }, []);
  return data.loading ? (
    <div style={apiStyle}>
      <h3>Reload the page for another fresh & cute doggo image!</h3>
      <Loader />
    </div>
  ) : (
    <div style={apiStyle}>
      <h3>Reload the page for another fresh & cute doggo image!</h3>
      <img
        style={imageStyle}
        src={data.response.message}
        alt={data.response.status}
      ></img>
      {/* <Loader /> */}
    </div>
  );
};

const apiStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const imageStyle = {
  maxWidth: 600,
};

export default Api;
