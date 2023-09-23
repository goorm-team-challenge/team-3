import React, { useState } from 'react';

import { Button, Modal } from '@goorm-dev/gds-challenge';

const Modal1 = ({ onClose, headerName }) => {
	return (
		<>
			<Modal.Header toggle={onClose}>{headerName}</Modal.Header>
			<Modal.Body>컨텐츠를 넣어주세요.</Modal.Body>
			<Modal.Footer>
				<Button>다음</Button>
			</Modal.Footer>
		</>
	);
};

export default Modal1;
