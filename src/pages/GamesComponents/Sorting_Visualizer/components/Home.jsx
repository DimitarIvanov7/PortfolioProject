import { useState, useRef, useEffect } from "react";
import React from "react";
import Blocks from "./Blocks";
import AddSettings from "./AddSettings";
import { setTimeout } from "timers-promises";

function Home() {
	const [blocks, setBlocks] = useState([
		{
			height: 116,
			key: 0,
			color: "#66fcf1",
		},
		{
			height: 22,
			key: 1,
			color: "#66fcf1",
		},
		{
			height: 45,
			key: 2,
			color: "#66fcf1",
		},
		{
			height: 92,
			key: 3,
			color: "#66fcf1",
		},
		{
			height: 18,
			key: 4,
			color: "#66fcf1",
		},
		{
			height: 112,
			key: 5,
			color: "#66fcf1",
		},
		{
			height: 54,
			key: 6,
			color: "#66fcf1",
		},
		{
			height: 6,
			key: 7,
			color: "#66fcf1",
		},
		{
			height: 190,
			key: 8,
			color: "#66fcf1",
		},
		{
			height: 48,
			key: 9,
			color: "#66fcf1",
		},
		{
			height: 164,
			key: 10,
			color: "#66fcf1",
		},
		{
			height: 107,
			key: 11,
			color: "#66fcf1",
		},
		{
			height: 62,
			key: 12,
			color: "#66fcf1",
		},
		{
			height: 93,
			key: 13,
			color: "#66fcf1",
		},
		{
			height: 100,
			key: 14,
			color: "#66fcf1",
		},
		{
			height: 179,
			key: 15,
			color: "#66fcf1",
		},
		{
			height: 138,
			key: 16,
			color: "#66fcf1",
		},
		{
			height: 84,
			key: 17,
			color: "#66fcf1",
		},
		{
			height: 33,
			key: 18,
			color: "#66fcf1",
		},
		{
			height: 166,
			key: 19,
			color: "#66fcf1",
		},
		{
			height: 31,
			key: 20,
			color: "#66fcf1",
		},
		{
			height: 186,
			key: 21,
			color: "#66fcf1",
		},
		{
			height: 104,
			key: 22,
			color: "#66fcf1",
		},
		{
			height: 74,
			key: 23,
			color: "#66fcf1",
		},
		{
			height: 135,
			key: 24,
			color: "#66fcf1",
		},
		{
			height: 157,
			key: 25,
			color: "#66fcf1",
		},
		{
			height: 17,
			key: 26,
			color: "#66fcf1",
		},
		{
			height: 183,
			key: 27,
			color: "#66fcf1",
		},
		{
			height: 63,
			key: 28,
			color: "#66fcf1",
		},
		{
			height: 133,
			key: 29,
			color: "#66fcf1",
		},
		{
			height: 145,
			key: 30,
			color: "#66fcf1",
		},
		{
			height: 51,
			key: 31,
			color: "#66fcf1",
		},
		{
			height: 193,
			key: 32,
			color: "#66fcf1",
		},
		{
			height: 78,
			key: 33,
			color: "#66fcf1",
		},
		{
			height: 167,
			key: 34,
			color: "#66fcf1",
		},
		{
			height: 160,
			key: 35,
			color: "#66fcf1",
		},
		{
			height: 181,
			key: 36,
			color: "#66fcf1",
		},
		{
			height: 129,
			key: 37,
			color: "#66fcf1",
		},
		{
			height: 165,
			key: 38,
			color: "#66fcf1",
		},
		{
			height: 65,
			key: 39,
			color: "#66fcf1",
		},
		{
			height: 108,
			key: 40,
			color: "#66fcf1",
		},
		{
			height: 116,
			key: 41,
			color: "#66fcf1",
		},
		{
			height: 186,
			key: 42,
			color: "#66fcf1",
		},
		{
			height: 124,
			key: 43,
			color: "#66fcf1",
		},
		{
			height: 116,
			key: 44,
			color: "#66fcf1",
		},
		{
			height: 82,
			key: 45,
			color: "#66fcf1",
		},
		{
			height: 50,
			key: 46,
			color: "#66fcf1",
		},
		{
			height: 100,
			key: 47,
			color: "#66fcf1",
		},
		{
			height: 184,
			key: 48,
			color: "#66fcf1",
		},
		{
			height: 12,
			key: 49,
			color: "#66fcf1",
		},
	]);
	const [inProgress, setInProgress] = useState(false);

	const inputSpeedValue = useRef(null);
	const algoValue = useRef(null);

	const newBlocks = async (e) => {
		const currentInput = e.target.value;

		const blockNumber = currentInput && parseInt(currentInput);
		const maxHeight = 200;
		const BlocksHeight = [];
		for (let i = 0; i < blockNumber; i++) {
			BlocksHeight.push({
				height: Math.floor(Math.random() * maxHeight),
				key: i,
				color: "#66fcf1",
			});
		}
		setBlocks(BlocksHeight);
	};

	const startSorting = () => {
		callSorting(
			algoValue.current && algoValue.current.value,
			inputSpeedValue.current && inputSpeedValue.current.value
		);
	};

	const bubbleSort = async (speed) => {
		setInProgress(true);

		const sortedBlocks = [...blocks];
		//Outer pass
		for (let i = 0; i < sortedBlocks.length; i++) {
			//Inner pass
			for (let j = 0; j < sortedBlocks.length - i - 1; j++) {
				//Value comparison using ascending order

				if (sortedBlocks[j + 1].height < sortedBlocks[j].height) {
					//Swapping
					sortedBlocks[j].color = "purple";

					[sortedBlocks[j + 1], sortedBlocks[j]] = [
						sortedBlocks[j],
						sortedBlocks[j + 1],
					];

					setBlocks(sortedBlocks);
					await setTimeout(speed);
				}
			}
		}
		setInProgress(false);
	};

	const insertionSort = async (speed) => {
		setInProgress(true);
		const sortedBlocks = [...blocks];

		//Start from the second element.
		for (let i = 1; i < sortedBlocks.length; i++) {
			//Go through the elements behind it.
			for (let j = i - 1; j > -1; j--) {
				//value comparison using ascending order.
				if (sortedBlocks[j + 1].height < sortedBlocks[j].height) {
					sortedBlocks[j].color = "purple";

					//swap
					[sortedBlocks[j + 1], sortedBlocks[j]] = [
						sortedBlocks[j],
						sortedBlocks[j + 1],
					];

					setBlocks(sortedBlocks);
					await setTimeout(speed);
				}
			}
		}
		setInProgress(false);
	};

	const selectionSort = async (speed) => {
		setInProgress(true);
		let min;
		const sortedBlocks = [...blocks];

		//start passes.
		for (let i = 0; i < sortedBlocks.length; i++) {
			//index of the smallest element to be the ith element.
			min = i;

			//Check through the rest of the sortedBlocksay for a lesser element
			for (let j = i + 1; j < sortedBlocks.length; j++) {
				if (sortedBlocks[j].height < sortedBlocks[min].height) {
					min = j;
				}
			}

			//compare the indexes
			if (min !== i) {
				//swap

				sortedBlocks[i].color = "purple";
				[sortedBlocks[i], sortedBlocks[min]] = [
					sortedBlocks[min],
					sortedBlocks[i],
				];

				setBlocks(sortedBlocks);
				await setTimeout(speed);
			}
		}

		setInProgress(false);
	};

	const callSorting = (func, speed) => {
		console.log(func);

		for (let i = 0; i < 2; i++) {
			switch (func) {
				case "bubbleSort":
					speed && bubbleSort(520 - parseInt(speed));
					break;
				case "insertionSort":
					speed && insertionSort(520 - parseInt(speed));
					break;
				case "selectionSort":
					speed && selectionSort(520 - parseInt(speed));
					break;
				default:
					return;
			}
		}
	};

	const renderBlocks = () => {
		return blocks.map((block) => {
			return <Blocks key={block.key} block={block} />;
		});
	};

	return (
		<section
			style={{
				margin: "0 auto",
				background: "#1f2833",
				height: "100vh",
			}}
		>
			<div>
				<h1
					style={{
						fontSize: "3rem",
						textAlign: "center",
						fontWeight: "bold",
						color: "#66fcf1",
						padding: "2rem 0",
					}}
				>
					Sorting visualizer
				</h1>
				<section
					style={{
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "center",
						gap: ".25rem",
						marginTop: "1.25rem",
						minHeight: "200px",
						width: "80%",
						margin: "0 auto",
					}}
				>
					{renderBlocks()}
				</section>
				<section>
					<AddSettings
						inputSpeedValue={inputSpeedValue}
						algoValue={algoValue}
						newBlocks={newBlocks}
						startSorting={startSorting}
						inProgress={inProgress}
					/>
				</section>
			</div>
		</section>
	);
}

export default Home;
