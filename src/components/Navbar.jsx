import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	background-color: #0b0c10;
	height: 5vh;
	border-bottom: 1px solid #66fcf1;
`;

const Wrapper = styled.div`
	margin: 0 1rem;
`;

const MenuItems = styled.ul`
	list-style-type: none;
	display: flex;
	width: 100%;
	justify-content: space-around;
	padding: 1rem 0;
`;

const Item = styled.li`
	cursor: pointer;
	color: #66fcf1;
`;

const Navbar = ({
	scrollProjects,
	scrollAbout,
	scrollContact,
	scrollSkills,
	type,
}) => {
	return (
		<Container>
			<Wrapper>
				{!type ? (
					<MenuItems>
						<Item onClick={() => scrollProjects()}>01. Projects</Item>
						<Item onClick={() => scrollSkills()}>02. Skills</Item>
						<Item onClick={() => scrollAbout()}>03. About</Item>
						<Item onClick={() => scrollContact()}>04. Contact</Item>
					</MenuItems>
				) : (
					<MenuItems>
						<Link style={{ textDecoration: "none" }} to="/">
							<Item>01. Homepage</Item>
						</Link>
					</MenuItems>
				)}
			</Wrapper>
		</Container>
	);
};

export default Navbar;
