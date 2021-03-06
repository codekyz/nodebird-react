import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
