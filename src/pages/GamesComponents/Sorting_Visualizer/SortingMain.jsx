import Home from "./components/Home";
import React from "react";
import Media from "react-media";

function SortingMain() {
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
							<div
								style={{
									width: "100%",
									height: "100vh",
									backgroundColor: "rgba(166, 171, 206, 0.9)",
								}}
							>
								<h1 style={{ paddingTop: "3rem", textAlign: "center" }}>
									Games only available on big screens for now!
								</h1>
							</div>
						)}
						{matches.large && <Home />}
					</>
				)}
			</Media>
		</>
	);
}

export default SortingMain;
