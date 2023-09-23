import React, { useContext, useState } from 'react';

import { modalContext } from '@/App';

import {
	Button,
	CarouselIndicators,
	Modal,
	TextArea,
	Typography,
} from '@goorm-dev/gds-challenge';

const Modal4 = ({ onClose, headerName }) => {
	// const { form, setForm, modal, setModal } = useContext(FormContext);

	const { form, updateForm, modalIndex, updateModalIndex, resetForm } =
		useContext(modalContext);

	const [freeMessage, setFreeMessage] = useState(form.freeMessage);
	const handleFormSubmit = () => {
		localStorage.setItem('goormUsers', JSON.stringify(form));
		onClose();
	};

	const moveIndex = (index) => {
		updateForm('freeMessage', freeMessage);
		updateModalIndex(index);
	};

	return (
		<>
			<Modal.Header toggle={onClose}>
				<Typography
					weight={700}
					token="h3"
					style={{
						whiteSpace: 'pre-line',
						fontSize: '20px',
						lineHeight: '30px',
					}}
				>
					{headerName}
				</Typography>
				<Typography
					style={{
						fontSize: '12px',
						lineHeight: '18px',
					}}
					weight={400}
					token="subtitle-1"
				>
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
			<Modal.Footer>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between', // 하위 요소들 사이에 공간을 나눠주기
						width: '100%', // 필요한 경우 width를 100%로 설정
					}}
				>
					<CarouselIndicators
						length={4}
						onClickWithIndex={(index) => {
							return moveIndex(index);
						}}
						activeIndex={modalIndex}
					/>

					<div>
						<Button
							size="lg"
							onClick={() => {
								moveIndex(modalIndex - 1);
							}}
							color="link"
							style={{
								marginRight: '8px',
							}}
						>
							이전
						</Button>
						<Button
							size="lg"
							onClick={handleFormSubmit}
							color="primary"
							disabled={freeMessage?.trim().length === 0}
						>
							제출하기
						</Button>
					</div>
				</div>
			</Modal.Footer>
		</>
	);
};

export default Modal4;
