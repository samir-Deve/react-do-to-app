function All(props) {
	return (
		<button 
		className="all is-on"
		onClick={(e) => props.FiltAll(e)}
		>
			All
		</button>
	);
}

export default All;