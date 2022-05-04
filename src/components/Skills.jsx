import styled from "styled-components";
import SkillsSlider from "./SkillsSlider";
import { useRef } from "react";

const Container = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	/* margin-bottom: 10rem; */
`;

const Headline = styled.h2`
	color: #66fcf1;
	font-size: 45px;
	text-align: center;
	margin-bottom: 2rem;
`;

const Paragraph = styled.p`
	font-size: 25px;
	color: #66fcf1;
	text-align: center;
	margin-bottom: 2rem;
	width: 100%;
`;

function Skills() {
	const ContainerWidthRef = useRef();

	return (
		<Container ref={ContainerWidthRef}>
			<Headline>Skills</Headline>
			<Paragraph>
				I use Javascript, React, HTML5 and CSS3 to create modern, optimized
				websites. Additional skills: Styled Components, Tailwind,
				Testing-library/react / jest /cypress, Nodejs, MongoDB, Python,
				Typescript, Git
			</Paragraph>
			<SkillsSlider
				width={
					ContainerWidthRef.current && ContainerWidthRef.current.clientWidth
				}
			/>
		</Container>
	);
}

export default Skills;
