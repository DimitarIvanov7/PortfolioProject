import styled from "styled-components";
import Food from "./Food";
import Snake from "./Snake";

import { useRef } from "react";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #0b0c10;
`;

const Wrapper = styled.div`
	width: calc(44% - 4px);
	aspect-ratio: 1/1;
	border: 2px solid black;
	position: relative;
	background-color: white;
	margin: 1rem auto;
	background-color: #1f2833;
	border: 2px solid #66fcf1;
`;

const Background = () => {
	const foodRef = useRef();

	return (
		<Container>
			<p
				style={{
					fontSize: "2.5rem",
					color: "#66fcf1",
					textAlign: "center",
				}}
			>
				Snake with React and Redux
			</p>
			<Wrapper>
				<Snake food={foodRef && foodRef.current} />
				<Food food={foodRef} />
			</Wrapper>
		</Container>
	);
};

export default Background;
