import PropTypes from "prop-types";

import Container from '../Container/Container'
import { StyledPageTitle } from './StyledPageTitle.styled'

function PageTitle({title}) {
	return (
		<StyledPageTitle>
			<Container>
				<h1>
					{title}
				</h1>
			</Container>
		</StyledPageTitle>
	)
}

export default PageTitle

PageTitle.propTypes = {
  title: PropTypes.string,
};