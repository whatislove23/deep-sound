import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Container from "../Container/Container";
import {
  StyledBreadcrumbs,
  StyledBreadcrumbsInner,
  StyledBreadcrumbsItem,
  StyledBreadcrumbsLink,
  StyledBreadcrumbsList,
} from "./StyledBreadcrumbs.styled";
import Cancel from '../Cancel/Cancel';

function Breadcrumbs({ title }) {
  return (
    <StyledBreadcrumbs>
      <Container>
        <StyledBreadcrumbsInner>
          <StyledBreadcrumbsList>
            <StyledBreadcrumbsItem>
              <StyledBreadcrumbsLink to={"/"}>Main page </StyledBreadcrumbsLink>
            </StyledBreadcrumbsItem>
            <StyledBreadcrumbsItem>{title}</StyledBreadcrumbsItem>
          </StyledBreadcrumbsList>
          <NavLink to={'/'}>
            <Cancel btnType={'dark'}/>
          </NavLink>
        </StyledBreadcrumbsInner>
      </Container>
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  title: PropTypes.string,
};