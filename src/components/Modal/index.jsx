import React, { useState } from 'react';
import cn from 'classnames';

import { Modal } from '@goorm-dev/gds-challenge';

import Modal1 from './components/Modal1';

const CustomModal = ({ isOpen, onClose }) => {
	const curIndex = 3; // context로 가져오도록 수정필요

	const renderComponent = () => {
		switch (curIndex) {
			case 1:
				return (
					<Modal1
						headerName="구름톤 챌린지에 전하고 싶은 말을 적어주세요"
						onClose={onClose}
					/>
				);
			case 2:
				return (
					<Modal1
						headerName="구름톤 챌린지에 전하고 싶은 말을 적어주세요"
						onClose={onClose}
					/>
				);
			// 추가 케이스
			case 3:
				return (
					<Modal1
						headerName="구름톤 챌린지에 전하고 싶은 말을 적어주세요"
						onClose={onClose}
					/>
				);

			case 4:
				return (
					<Modal1
						headerName="구름톤 챌린지에 전하고 싶은 말을 적어주세요"
						onClose={onClose}
					/>
				);
			default:
				return '에러';
		}
	};

	return <Modal isOpen={isOpen}>{renderComponent()}</Modal>;
};

export default CustomModal;
