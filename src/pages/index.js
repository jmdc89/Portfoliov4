import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Layout } from "../components";

const IndexPage = () => {
  return <Layout></Layout>;
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
