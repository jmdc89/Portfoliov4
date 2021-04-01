import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { navLinks } from "../config";
import { loaderDelay } from "../utils";
import { useScrollDirection } from "../hooks";
