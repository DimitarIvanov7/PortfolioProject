import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import ContactSlide from "../components/ContactSlide";
import { useState, useRef, useEffect } from "react";
import useElementObserver from "../hooks/useElementObserver";
import PulsatingCursor from "../components/PulsatingCursor";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import matrixEffect from "../hooks/matrixEffectReact";
import { desktop, bigTablet, phone } from "../responsive";

const Canvas = styled.canvas`
	height: ${(props) => (props.height ? props.height : "89.5vh")};
	width: 100%;
	margin: 0;
	${bigTablet({
		display: "none",
	})}
`;

const HeroWrapper = styled.div`
	margin-top: 12rem;
	text-align: center;
	position: absolute;
	top: 0;
	width: 100%;
`;

const Headline = styled.h1`
	color: #66fcf1;
	font-size: 47px;
	margin: 0 1rem;
`;
const HeroPar = styled.p`
	color: #66fcf1;
	font-size: 25px;
	margin: 0.5rem 0;
`;

const MainButton = styled.button`
	background-color: transparent;
	border: 2px solid #66fcf1;
	color: #66fcf1;
	font-size: 25px;
	margin: 1rem;
	padding: 5px 10px;
	transition: all 0.2s ease-out;
	&:hover {
		color: #1f2833;
		background-color: #66fcf1;
		cursor: pointer;
	}
`;

const RestPage = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 100vh;
	padding: 3rem 0 0 0;
	left: 0;
	right: 0;
	margin: auto;
	${bigTablet({
		position: "relative",
		top: 0,
	})}
`;

const ProjectsContainer = styled.div`
	display: flex;
	width: 70%;
	flex-direction: column;
	align-items: center;
	${desktop({ width: "90%" })}
	${phone({
		width: "98%",
	})}
`;

const ProjectInfo = styled.h2`
	color: #66fcf1;
	font-size: 45px;
`;
const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 5rem 0;
	margin: 0 1rem;
	width: 100%;
`;

function Home() {
	//sections refs

	const projectsRef = useRef();

	const skillsRef = useRef();

	const aboutRef = useRef();

	const contactRef = useRef();

	const canvas1Ref = useRef();

	const canvas2Ref = useRef();

	//canvas height calculation
	const projectsHeightRef = useRef();

	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = () => {
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize, false);
	}, []);

	useEffect(() => {
		matrixEffect([canvas1Ref, canvas2Ref], dimensions);
	}, []);

	//typing effect
	const headlineRef = useRef(null);

	const desc1Ref = useRef(null);

	const desc2Ref = useRef(null);

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.3,
	};

	const isVisibleHeadline = useElementObserver(
		{
			options,
		},
		headlineRef
	);

	const isVisibleDesc1 = useElementObserver(
		{
			options,
		},
		desc1Ref
	);

	const isVisibleDesc2 = useElementObserver(
		{
			options,
		},
		desc2Ref
	);

	//visibility state
	const [visibility, setVisibility] = useState({
		headline: false,
		desc1: false,
		desc2: false,
	});

	//change visibility
	useEffect(() => {
		if (isVisibleHeadline) {
			setVisibility({ ...visibility, headline: true });
		}

		if (isVisibleDesc1) {
			setVisibility({ ...visibility, desc1: true });
		}

		if (isVisibleDesc2) {
			console.log("visible");
			setVisibility({ ...visibility, desc2: true });
		}
	}, [isVisibleDesc1, isVisibleHeadline, isVisibleDesc1]);

	//typing effect change
	const [typingText, setTypingText] = useState({
		headline: [],
		desc1: [],
		desc2: [],
	});

	const headlineText = "Hi, my name is Dimitar, I'm a web developer";
	const desc1Text = "Vesta-s real estate agency website";
	const desc2Text = "Compare Jobs in States App";

	useEffect(() => {
		if (visibility.headline && !headlineRef.current.childNodes[0].length)
			typeWriteHeadline([headlineText], "headline");
	}, [visibility.headline]);

	useEffect(() => {
		if (
			visibility.desc1 &&
			typingText.desc1.length === 0 &&
			typingText.headline.length === headlineText.length
		) {
			typeWriteHeadline([desc1Text], "desc1", 80);
		}
	}, [visibility.desc1, typingText.headline]);

	useEffect(() => {
		if (visibility.desc2);

		if (
			visibility.desc2 &&
			typingText.desc2.length === 0 &&
			typingText.desc1.length === desc1Text.length
		)
			typeWriteHeadline([desc2Text], "desc2", 80);
	}, [visibility.desc2, typingText.desc1]);

	function typeWriteHeadline(messageArray, position, speed = 100) {
		let textPosition = 0;

		let intr = setInterval(function typewriter() {
			setTypingText({
				...typingText,
				[position]: messageArray[0].substring(0, textPosition),
			});

			if (textPosition++ > messageArray[0].length) {
				clearInterval(intr);
			} else {
				textPosition++;
			}
		}, speed);
	}

	//scrolling effect

	const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	const scrollProjects = () => {
		window.scrollTo({
			top: projectsRef.current.offsetTop + window.innerHeight,
			behavior: "smooth",
		});
	};

	const scrollSkills = () => {
		window.scrollTo({
			top: skillsRef.current.offsetTop + window.innerHeight,
			behavior: "smooth",
		});
	};

	const scrollContact = () => {
		window.scrollTo({
			top: contactRef.current.offsetTop + window.innerHeight,
			behavior: "smooth",
		});
	};

	const scrollAbout = () => {
		window.scrollTo({
			top: aboutRef.current.offsetTop + window.innerHeight,
			behavior: "smooth",
		});
	};

	// project infos
	const infoProject1 =
		"A website for a real estate company where brokers can post the properties they sell. Users can then view those properties and sort them by price, size etc as well as search by location.";

	const infoProject2 =
		"A React app I created that compares the search vs competition for jobs in different US states. It uses Google Search API, Google Trends API and Census API. Users can add jobs they are interested it, see and sort the results as well as delete jobs.";

	const infoProject3 =
		"I created this Amazon clone with react, redux and node (and mongoDB to store data). There are 8 categories from the original site with 5 products each. I also used stripe to handle test payments.";

	const infoProject4 =
		"An app that uses The Movie DB API to help users search, rate, comment and add movies to favourites. I used bycrypt and jwt to create users and authenticate them as well as JOI to validate user data when creating account. User data is stored in MongoDB.";

	return (
		<div className="main-cont">
			<Navbar
				scrollProjects={scrollProjects}
				scrollAbout={scrollAbout}
				scrollContact={scrollContact}
				scrollSkills={scrollSkills}
				type={false}
			/>
			<Canvas ref={canvas1Ref} id="canvas" />
			<HeroWrapper>
				<Headline ref={headlineRef}>
					{typingText.headline}
					<PulsatingCursor />
				</Headline>
				<HeroPar>Javascript / React front-end</HeroPar>
				<MainButton onClick={() => scrollProjects()}>Projects</MainButton>
				<MainButton onClick={() => scrollContact()}>Contact</MainButton>
			</HeroWrapper>
			<ContactSlide scrollContact={scrollContact} />
			<Canvas
				ref={canvas2Ref}
				height={
					projectsHeightRef.current && projectsHeightRef.current.clientHeight
				}
				id="canvas"
			/>
			<RestPage ref={projectsHeightRef}>
				<ProjectsContainer id="projectsContainer" ref={projectsRef}>
					<ProjectInfo>Projects</ProjectInfo>
					<Projects
						descRef={desc1Ref}
						title={typingText.desc1}
						technology={[
							"Technology:",
							"HTML",
							"CSS/SASS",
							"Javascript",
							"Node.js/Express",
							"MongoDB",
						]}
						info={infoProject1}
						img={"/images/vesta-s.png"}
						redirectSite={"https://vesta-s.dmvprojects.net/"}
						redirectGithub={"https://github.com/DimitarIvanov7/vesta-s"}
					/>
					<Projects
						descRef={desc2Ref}
						title={typingText.desc2}
						technology={[
							"Technology:",
							"React",
							"React Router",
							"React Tables",
							"Node.js/Express",
							"MongoDB",
						]}
						info={infoProject2}
						img={"/images/compare-states.png"}
						redirectSite={"https://compare-states.dmvprojects.net/"}
						redirectGithub={
							"https://github.com/DimitarIvanov7/compare_states_app"
						}
					/>

					<Projects
						title={"Amazon Clone with React and Redux"}
						technology={[
							"Technology:",
							"React",
							"Redux",
							"React Router",
							"Node.js/Express",
							"MongoDB",
						]}
						info={infoProject3}
						img={"/images/amazon-clone.png"}
						redirectSite={"https://azclone.dmvprojects.net/"}
						redirectGithub={"https://github.com/DimitarIvanov7/amazon_clone"}
					/>

					<Projects
						title={"My Movie Collection with React and Redux"}
						technology={[
							"Technology:",
							"Typescript",
							"React",
							"Redux",
							"React Router",
							"Node.js/Express",
							"Tailwind CSS",
							"MongoDB",
						]}
						info={infoProject4}
						img={"/images/my-movie.png"}
						redirectSite={"https://my-movie.dmvprojects.net/"}
						redirectGithub={
							"https://github.com/DimitarIvanov7/movie_collection_node_react"
						}
					/>

					<Projects
						title={"Games with React and Redux"}
						technology={["Technology:", "React", "Redux", "Tailwind CSS"]}
						info={infoProject4}
						img={"/images/snake.png"}
						redirectSite={"/#/games"}
						redirectGithub={
							"https://github.com/DimitarIvanov7/snake_game_react_redux"
						}
					/>
				</ProjectsContainer>
				<SkillsContainer ref={skillsRef} id="skills-container">
					<Skills />
				</SkillsContainer>
				<About aboutRef={aboutRef} />
				<Contact contactRef={contactRef} />
			</RestPage>

			<Footer
				scrollTop={scrollTop}
				scrollAbout={aboutRef.current && scrollAbout}
			/>
		</div>
	);
}

export default Home;
