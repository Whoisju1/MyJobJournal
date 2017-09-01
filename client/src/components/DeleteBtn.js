import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const DeleteBtn = props => {
	const handleClick = () => {
		props.cb();
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

export default DeleteBtn;