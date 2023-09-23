import { createContext, useEffect, useState } from 'react';

const useModalContext = () => {
	const [form, setFormState] = useState({
		// 1번
		name: '이름',
		phone: '01012345678',
		email: 'test@email.com',
		permissions: {
			privacyApproval: false,
			marketingApproval: false,
			marketingMediaApproval: {
				email: false,
				sms: false,
			},

			// 2번

			swMajored: true,
			groomUsed: true,
			groomService: {
				edu: false,
				level: false,
				devth: false,
				ide: false,
				exp: false,
			},
			groomWhy: '',

			// 3번

			expect: -1 /* 0번 ~ 3번 중 택 1 선택 */,

			// 4번

			freeMessage: '파이팅~~',
		},
	});

	const [modalIndex, setModalIndex] = useState(0);

	const updateForm = (key, value) => {
		setFormState((prev) => {
			return {
				...prev,
				[key]: value,
			};
		});
	};

	const updateModalIndex = (value) => {
		setModalIndex(value);
	};

	const api = {
		form,
		updateForm,
		modalIndex,
		updateModalIndex,
	};

	return api;
};

export default useModalContext;
