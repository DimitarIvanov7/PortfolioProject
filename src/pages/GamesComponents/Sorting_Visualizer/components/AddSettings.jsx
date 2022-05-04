const AddSettings = ({
	inputSpeedValue,
	algoValue,
	newBlocks,
	startSorting,
	inProgress,
}) => {
	return (
		<div style={{ marginTop: "2.5rem" }}>
			<p style={{ fontSize: "2.25rem", textAlign: "center", color: "#66fcf1" }}>
				Select sorting algorithm
			</p>
			<div
				style={{
					margin: "0 auto",
					marginTop: "2.5rem",
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
					gap: "2.5rem",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label
						style={{
							textAlign: "center",
							marginBottom: "0.25rem",
							color: "#66fcf1",
						}}
						htmlFor="size"
					>
						Size
					</label>
					<input
						style={{ border: "1px solid black" }}
						onChange={(e) => newBlocks(e)}
						type="range"
						min="10"
						max="100"
						id="size"
					/>
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label
						style={{
							textAlign: "center",
							marginBottom: ".25rem",
							color: "#66fcf1",
						}}
						htmlFor="speed"
					>
						Speed
					</label>
					<input
						style={{ border: "1px solid black" }}
						type="range"
						ref={inputSpeedValue}
						min="460"
						max="520"
						id="speed"
					/>
				</div>
				<select
					style={{ border: "1px solid black", cursor: "pointer" }}
					name="algo"
					id=""
					ref={algoValue}
				>
					<option value="bubbleSort" selected>
						Bubble Sort
					</option>
					<option value="insertionSort">Insertion Sort</option>
					<option value="selectionSort">Selection Sort</option>
				</select>
				<button
					onClick={() => {
						startSorting();
					}}
					disabled={inProgress}
					style={{
						color: "white",
						backgroundColor: "rgb(71 85 105)",
						padding: ".25rem .75rem",
						borderRadius: "0.125rem",
						fontSize: "1.5rem",
					}}
					className="hover:bg-slate-900 transition ease delay-150"
				>
					Start
				</button>
			</div>
		</div>
	);
};

export default AddSettings;
