function ClearCompleted(props) {
	return (
		<button onClick={() => props.ClearCompl()}>
			Clear Completed
		</button>
	);
}

export default ClearCompleted;