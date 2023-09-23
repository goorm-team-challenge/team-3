import React, { useContext, useState } from 'react';
import cn from 'classnames';

import { Modal } from '@goorm-dev/gds-challenge';

import { FormContext } from '../../App';

import Modal1 from './components/Modal1';
import Modal4 from './components/Modal4';

const CustomModal = ({ isOpen, onClose }) => {
	const { modal } = useContext(FormContext);
	const curIndex = modal.index;

	const renderComponent = () => {
		switch (curIndex) {
			case 0:
				return (
					<Modal1
						headerName="구름톤 챌린지에 전하고 싶은 말을 적어주세요"
						onClose={onClose}
					/>
				);
			case 1:
				return (
					<Modal1
						headerName="구름톤 챌린지에 전하고 싶은 말을 적어주세요"
						onClose={onClose}
					/>
				);
			// 추가 케이스
			case 2:
				return (
					<Modal1
						headerName="구름톤 챌린지에 전하고 싶은 말을 적어주세요"
						onClose={onClose}
					/>
				);

			case 3:
				return (
					<Modal4
						headerName={
							'구름톤 챌린지에\n전하고 싶은 말을 적어주세요'
						}
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
