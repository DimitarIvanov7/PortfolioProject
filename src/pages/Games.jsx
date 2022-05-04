import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Game from "../components/Game";
import Navbar from "../components/Navbar";
import Media from "react-media";

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	width: 100%;
	text-align: center;
	margin: 5rem 0;
`;

const Headline = styled.h1`
	color: #66fcf1;
	font-size: 47px;
	margin: 0 1rem;
`;

const GamesContainer = styled.div`
	width: 80%;
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	justify-content: space-around;
	margin: 1rem auto;
`;

const Info = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(166, 171, 206, 0.9);
`;

const Games = () => {
	return (
		<>
			<Media
				queries={{
					small: "(max-width: 870px)",
					large: "(min-width: 870px)",
				}}
			>
				{(matches) => (
					<>
						{matches.small && (
							<Info>
								<h1 style={{ paddingTop: "3rem", textAlign: "center" }}>
									Games only available on big screens for now!
								</h1>
							</Info>
						)}
						{matches.large && (
							<Container>
								<Navbar type={true} />
								<Wrapper>
									<Headline>Games with React</Headline>
									<GamesContainer>
										<Game
											title="Snake with React and Redux"
											info="Single player react snake game"
											redirectPage="/#/games/snake"
											img="images/snake.png"
											redirectGithub="https://github.com/DimitarIvanov7/snake_game_react_redux"
										/>

										<Game
											title="Pong with React"
											info="2 player game with adjustable difficulty"
											redirectPage="/#/games/pong"
											img="images/pong_react.png"
											redirectGithub="https://github.com/DimitarIvanov7/pong_react"
										/>

										<Game
											title="Sudoku with React"
											info="The program validates the sudoku and shows you your mistakes"
											img="images/sudoku.png"
											redirectPage="/#/games/sudoku"
											redirectGithub="https://github.com/DimitarIvanov7/sudoku_react"
										/>

										<Game
											title="Sorting algorithms visualizer"
											info="See how 3 different algorithms work"
											img="images/sorting.png"
											redirectPage="/#/games/sorting"
											redirectGithub="https://github.com/DimitarIvanov7/sorting_visualizer"
										/>
									</GamesContainer>
								</Wrapper>
							</Container>
						)}
					</>
				)}
			</Media>

			<Footer type={true} />
		</>
	);
};

export default Games;
