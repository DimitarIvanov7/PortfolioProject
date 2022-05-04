import React from "react";
import styled from "styled-components";
import PulsatingCursor from "./PulsatingCursor";
import { phone } from "../responsive";

const Container = styled.div`
	border: 1px solid #66fcf1;
	width: 90%;
	margin: 2rem 0;
	background-color: #1f283340;
	aspect-ratio: 16/9;
`;

const Wrapper = styled.div`
	aspect-ratio: inherit;
`;

const Headline = styled.h2`
	color: #66fcf1;
	margin: 1.5rem 0;
	font-size: 35px;
	width: 100%;
	text-align: center;
`;

const UpPart = styled.div`
	position: relative;
`;

const DownPart = styled.div`
	color: #66fcf1;
	margin: 1rem 2.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Description = styled.p`
	font-size: 25px;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
	background-color: transparent;
	border: 2px solid #66fcf1;
	color: #66fcf1;
	font-size: 32px;
	margin: 2rem 0;
	margin-right: 2rem;
	padding: 5px 10px;
	transition: all 0.2s ease-out;
	&:hover {
		color: #1f2833;
		background-color: #66fcf1;
		cursor: pointer;
	}
	${phone({
		fontSize: "25px",
		margin: "1rem 0",
		marginRight: "2rem",
	})}
`;

const TechnologyUl = styled.ul`
	aspect-ratio: 1/1;
	background-color: #1f2833;
	width: fit-content;
	padding: 0.5rem 2rem;
	position: absolute;
	height: fit-content;
	top: 0;
	left: 0;
	bottom: 0;
	border: 5px solid #66fcf1;
	transform: translateZ(20px) scaleY(0);
	transform-origin: top;
	transition: 0.5s;
`;

const TechnologyLi = styled.li`
	font-weight: bold;
	font-size: ${(props) => (props.title === "true" ? "25px" : "20px")};
	list-style-type: ${(props) => props.title === "true" && "none"};
	color: #66fcf1;
`;

const Image = styled.div`
	max-width: 90%;
	aspect-ratio: 18/9;
	margin: 0 auto;
	background: url(${(props) => props.img});
	background-size: cover;
	transition: all 1s ease-out;
	box-shadow: inset 0 0 0 1000px #66fcf232;
	transform-style: preserve-3d;
	cursor: pointer;
	border: 10px solid #66fcf1;
	border-style: groove;

	&:hover {
		box-shadow: none;
	}

	&:hover ${TechnologyUl} {
		transform: translateZ(30px) scaleY(1);
	}
`;

function Projects({
	title,
	info,
	img,
	technology,
	descRef,
	redirectSite,
	redirectGithub,
}) {
	const redirect = (location) => {
		window.open(location);
	};

	return (
		<Container>
			<Headline>
				{title}
				<PulsatingCursor />
			</Headline>
			<Wrapper>
				<UpPart>
					<Image
						onClick={() => redirect(redirectSite)}
						ref={descRef}
						className="image-tilt"
						img={img}
					>
						<TechnologyUl>
							{technology.map((tech, index) => {
								if (index === 0) {
									return (
										<TechnologyLi key={index} title="true">
											{tech}
										</TechnologyLi>
									);
								} else {
									return <TechnologyLi>{tech}</TechnologyLi>;
								}
							})}
						</TechnologyUl>
					</Image>
				</UpPart>
				<DownPart>
					<Description>{info}</Description>
					<ButtonContainer>
						<Button onClick={() => redirect(redirectSite)}>Visit</Button>
						<Button onClick={() => redirect(redirectGithub)}>GitHub</Button>
					</ButtonContainer>
				</DownPart>
			</Wrapper>
		</Container>
	);
}

export default Projects;
