import Container from "../Container/Container";
import { StyledBlog } from "./StyledBlog.styled";
import BlogItem from '../BlogItem/BlogItem';

const blogs = [{
	id: 1,
	link: '/blog/1',
	title: 'Beats Pro 2 - Full Review',
	imgUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1709631795/blog-one.jpg'
},
{
	id: 2,
	link: '/blog/2',
	title: 'Stephen Kulik - What a good sound should be?',
	imgUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1709631795/blog-two.jpg'
},
{
	id: 3,
	link: '/blog/3',
	title: 'Your home studio - what is the minimum price?',
	imgUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1709631795/blog-three.jpg'
},
{
	id: 4,
	link: '/blog/4',
	title: 'Understanding Compression A Full User Guide',
	imgUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1709631795/blog-four.jpg'
}]

function Blog() {
	
	return (
		<StyledBlog>
			<Container>
				<div className="blog_inner">
					{blogs.map(blog => (
						<BlogItem key={blog.id} {...blog}/>
					))}
				</div>	
			</Container>
		</StyledBlog>
	
	)
}

export default Blog