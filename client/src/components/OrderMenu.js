import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class OrderMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: 'none',
			order: 'Date Created'
		};
		this.isVisible = this.isVisible.bind(this);
		this.changeOrder = this.changeOrder.bind(this);
	}

	isVisible() {
		const { visibility } = this.state;
		visibility === 'none' ? this.setState({ visibility: 'block' }) : this.setState({ visibility: 'none' });
	}

	changeOrder(order) {
		this.props.orderChanger(order);
		const { visibility } = this.state;
		visibility === 'none' ? this.setState({ visibility: 'block' }) : this.setState({ visibility: 'none' });

		switch (order) {
			case 'company':
				this.setState({ order: 'Company' });
				break;

			case 'position':
				this.setState({ order: 'Position' });
				break;

			case 'dateApplied':
				this.setState({ order: 'Date Applied' });
				break;

			case 'dateCreated':
				this.setState({ order: 'Date Created' });
				break;
			default:
				return order;
		}
	}

	render() {
		const { visibility, order } = this.state;

		return (
			<div className="dropdown">
				<div className="dropdown__heading" onClick={this.isVisible}>
					Sort By {order}
					<Glyphicon glyph="chevron-down" />
				</div>
				<div className="dropdown-list" style={{ display: visibility }}>
					<div className="dropdown-list__item" onClick={() => this.changeOrder('company')} ref={this.state.order}>
						Company
					</div>
					<div className="dropdown-list__item" onClick={() => this.changeOrder('position')} ref={this.state.order}>
						Position
					</div>
					<div
						className="dropdown-list__item"
						onClick={() => this.changeOrder('dateApplied')}
						ref={this.state.order}
					>
						Date Applied
					</div>
					<div
						className="dropdown-list__item"
						onClick={() => this.changeOrder('dateCreated')}
						ref={this.state.order}
					>
						Date Created
					</div>
				</div>
			</div>
		);
	}
}

export default OrderMenu;
