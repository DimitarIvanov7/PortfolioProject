import React from "react";

const Blocks = ({ block }) => {
	const heightBl = `${block.height.toString()}px`;
	return (
		<div
			style={{ height: heightBl, background: block.color, width: "1rem" }}
		></div>
	);
};

export default Blocks;
