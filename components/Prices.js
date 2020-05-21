class Prices extends React.Component {
	state = {
		currency: 'USD'
	}

	render() {
		// let list = '';

		// if (this.state.currency === 'USD') {
		// 	list =
		// }
		// else if (this.state.currency === 'GBP') {

		// }
		// else if (this.state.currency === 'GBP') {

		// }

		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						Bitcoin rate for {this.props.bpi.USD.description} : <span className="badge badge-primary">{this.props.bpi.USD.code}</span> <strong>{this.props.bpi.USD.rate}</strong>
					</li>
				</ul>
			</div>
		);
	}
}

export default Prices;