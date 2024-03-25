import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledBreadcrumbs = styled.div`
	padding: 24px 0 20px;
`

export const StyledBreadcrumbsInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	svg path {
		fill: var(--main-text);
	}
`

export const StyledBreadcrumbsList = styled.ul`
	display: flex;
	gap: 9px;
`

export const StyledBreadcrumbsItem = styled.li`
	color: var(--border);
	font-size: 14px;
	line-height: 1;
	font-weight: 400;
`

export const StyledBreadcrumbsLink = styled(NavLink)`
	display: inline-block;

	&::after {
		content: '>';
	}
`