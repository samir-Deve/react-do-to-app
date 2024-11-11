function ItemsLeft(props) {
	return (
		<div className="items-left">
			{props.showTotal()} Items left
		</div>
	);
}

export default ItemsLeft;