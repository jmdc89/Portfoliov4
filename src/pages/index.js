import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Layout } from "../components";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  <Layout></Layout>;
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
