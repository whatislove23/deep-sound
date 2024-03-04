import styled from "styled-components";
import Button from '../Button/Button';

export const StyledBlogItem = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;

	.blog_img {
		width: 100%;
		transition: transform ease-in-out .5s;
	}

	.blog_wrapper {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 192px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		background: rgba(12, 11, 11, .7);
		padding: 40px 40px 24px;
		color: var(--secondary-text);
	}

	.blog_title {
		text-align: center;
		height: 67px;
		display: flex;
		align-items: center;
		font-size: 28px;
		line-height: 1.2;
		font-weight: 400;
	}

	&:hover .blog_img {
		transform: scale(1.5);
	}
`

export const StyledBlogButton = styled(Button)`
	width: 273px;
	height: 32px;
`