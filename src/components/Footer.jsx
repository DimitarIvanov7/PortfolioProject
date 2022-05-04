import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	background-color: #0b0c10;
	height: 4rem;
	z-index: 5;
	padding-top: 2rem;
`;

const LinksUl = styled.ul`
	display: flex;
	justify-content: center;
	gap: 2rem;
	padding: 0;
	padding-top: 1rem;
`;

const Links = styled.div`
	color: #66fcf1;
	cursor: ${(props) => props.link === "link" && "pointer"};
	z-index: 10;
`;

const Footer = ({ scrollTop, scrollAbout, type = false }) => {
	return (
		<Container>
			<LinksUl>
				<Links>Copyright &copy; 2021</Links>

				{!type ? (
					<>
						<Links link="link" onClick={() => scrollTop()}>
							Home
						</Links>
						<Links link="link" onClick={() => scrollAbout()}>
							About
						</Links>
					</>
				) : (
					<>
						<Link style={{ textDecoration: "none", color: "#66fcf1" }} to="/">
							Home
						</Link>
					</>
				)}
			</LinksUl>
		</Container>
	);
};

export default Footer;
