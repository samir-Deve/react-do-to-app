function Active(props) {
	return (
		<button
		className="filt-active"
		onClick={(e) => props.FiltActive(e)}
		>
			Active
		</button>
	);
}

export default Active;