import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import * as actions from '../actions';
import {connect} from 'react-redux';

const DeleteBtn = props => {
	const handleClick = () => {
		props.cb();
		props.fetchData();
	};

	const closeModal = () => {
		props.close();
	};

	return (
		<div className="modal-outer">
			<div className="modal-inner">
				<Glyphicon glyph="remove" onClick={closeModal} className='close-modal-icon' />
				<button className='btn-dlt-modal' onClick={handleClick}>Delete Item</button>
			</div>
		</div>
	);
};


export default connect(null, actions)(DeleteBtn);