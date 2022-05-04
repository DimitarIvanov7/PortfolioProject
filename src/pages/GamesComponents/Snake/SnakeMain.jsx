import Background from "./components/Background";
import useEventListener from "../../../hooks/games/useEventListener.js";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state/index";
import Media from "react-media";

function SnakeMain() {
	const snakeDir = useSelector((state) => state.snakeDirection);
	const snakePos = useSelector((state) => state.snakePosition);

	const dispatch = useDispatch();
	const { moveDown, moveLeft, moveRight, moveUp, stop, turn, foodCoords } =
		bindActionCreators(actionCreators, dispatch);

	const StartMoving = () => {
		moveLeft();
		createFoodCoords();
	};

	const handleBtnPress = (e) => {
		console.log(e.key);
		switch (e.key) {
			case "w":
			case "ArrowUp":
				snakeDir !== "down" && moveUp();
				turn(snakePos);
				break;
			case "s":
			case "ArrowDown":
				snakeDir !== "up" && moveDown();
				turn(snakePos);
				break;
			case "a":
			case "ArrowLeft":
				snakeDir !== "right" && moveLeft();
				turn(snakePos);
				break;
			case "d":
			case "ArrowRight":
				snakeDir !== "left" && moveRight();
				turn(snakePos);
				break;

			case " ":
				stop();
				break;

			case "Enter":
				StartMoving();
				break;

			default:
				break;
		}
	};

	const createFoodCoords = () => {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		foodCoords({ x: getRandomInt(100), y: getRandomInt(100) });
	};

	useEventListener("keydown", handleBtnPress);

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
						{matches.large && <Background />}
					</>
				)}
			</Media>
		</>
	);
}

export default SnakeMain;
