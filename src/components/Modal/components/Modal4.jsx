import React, { useContext, useState } from 'react';

import {
	Button,
	CarouselIndicators,
	Modal,
	TextArea,
	Typography,
} from '@goorm-dev/gds-challenge';

import { FormContext } from '../../../App';

const Modal4 = ({ onClose, headerName }) => {
	const { form, setForm, modal, setModal } = useContext(FormContext);

	const [freeMessage, setFreeMessage] = useState(form.freeMessage);
	const handleFormSubmit = () => {
		console.log(form);
		localStorage.setItem('goormUsers', JSON.stringify(form));
		onClose();
	};

	const moveIndex = (index) => {
		setForm({
			...form,
			freeMessage,
		});
		setModal({
			index,
		});
	};

	return (
		<>
			<Modal.Header toggle={onClose}>
				<Typography weight={700} token="h4">
					{headerName}
				</Typography>
				<Typography weight={400} token="subtitle-1">
					더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
				</Typography>
			</Modal.Header>

			<Modal.Body>
				<TextArea
					block
					rows={3}
					placeholder="ex. 다음 번 챌린지에서는 더 어려운 문제가 출제되면
					좋겠어요. 오프라인 과제가 다양했으면 좋겠어요."
					value={freeMessage}
					onChange={(e) => {
						setFreeMessage(e.target.value);
					}}
				/>
			</Modal.Body>
			<Modal.Footer
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<CarouselIndicators
					length={4}
					onClickWithIndex={(index) => {
						return moveIndex(index);
					}}
					activeIndex={modal.index}
				/>

				<div>
					<Button
						onClick={() => {
							moveIndex(modal.index - 1);
						}}
						color="link"
					>
						이전
					</Button>
					<Button onClick={handleFormSubmit} color="primary">
						제출하기
					</Button>
				</div>
			</Modal.Footer>
		</>
	);
};

export default Modal4;
