function Completed(props) {
	return (
		<button
		className="filt-completed"
		onClick={(e) => props.FiltComple(e)}
		>
			Completed
		</button>
	);
}

export default Completed;