import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Games from "./pages/Games";
import PongMain from "./pages/GamesComponents/Pong/PongMain";
import SudokuMain from "./pages/GamesComponents/Sudoku/SudokuMain";
import SortingMain from "./pages/GamesComponents/Sorting_Visualizer/SortingMain";
import SnakeMain from "./pages/GamesComponents/Snake/SnakeMain";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Games />} />
				<Route path="/games/pong" element={<PongMain />} />
				<Route path="/games/sudoku" element={<SudokuMain />} />
				<Route path="/games/sorting" element={<SortingMain />} />
				<Route path="/games/snake" element={<SnakeMain />} />
			</Routes>
		</>
	);
};

export default App;
