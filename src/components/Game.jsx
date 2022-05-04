import React from "react";
import styled from "styled-components";
import { phone } from "../responsive";
import PulsatingCursor from "./PulsatingCursor";

const Container = styled.div`
	border: 1px solid #66fcf1;
	margin: 2rem 0;
	background-color: #1f283340;
	aspect-ratio: 16/9;
	width: 43%;
	min-width: 30rem;
`;

const Wrapper = styled.div`
	aspect-ratio: inherit;
`;

const Headline = styled.h2`
	color: #66fcf1;
	margin: 1.5rem 0.5rem;
	font-size: 35px;

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

const Image = styled.div`
	max-width: 90%;
	aspect-ratio: 18/9;
	margin: 0 auto;
	background: url(${(props) => props.img});
	background-size: cover;
	transition: all 1s ease-out;
	transform-style: preserve-3d;
	cursor: pointer;
	border: 10px solid #66fcf1;
	border-style: groove;
`;

function Game({ title, info, redirectPage, redirectGithub, img }) {
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
						onClick={() => redirect(redirectPage)}
						className="image-tilt"
						img={img}
					></Image>
				</UpPart>
				<DownPart>
					<Description>{info}</Description>
					<ButtonContainer>
						<Button onClick={() => redirect(redirectPage)}>Play</Button>
						<Button onClick={() => redirect(redirectGithub)}>GitHub</Button>
					</ButtonContainer>
				</DownPart>
			</Wrapper>
		</Container>
	);
}

export default Game;
