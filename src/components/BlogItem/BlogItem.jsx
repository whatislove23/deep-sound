import { StyledBlogButton, StyledBlogItem } from './StyledBlogItem.styled'
import PropTypes from "prop-types";


function BlogItem({link, title, imgUrl}) {
	return (
		<StyledBlogItem>
			<img className='blog_img' src={imgUrl} alt={title} />
			<div className="blog_wrapper">
				<h2 className="blog_title">{title}</h2>
				<StyledBlogButton to={link}>
					Explore
				</StyledBlogButton>
			</div>
		</StyledBlogItem>
	)
}

BlogItem.propTypes = {
  id: PropTypes.number,
	link: PropTypes.string,
	title: PropTypes.string,
	imgUrl: PropTypes.string
};

export default BlogItem