import { createContext, useState } from 'react';

import { EmptyView, Header, ListView } from '@/components';

import styles from './App.module.scss';

export const FormContext = createContext();

function App() {
	const users = localStorage.getItem('goormUsers')
		? JSON.parse(localStorage.getItem('goormUsers'))
		: [];

	const initFormState = {
		// 디버깅용 초기값을 임의로 넣었기때문에 나중에는 다 빈값으로 초기화해야합니다.
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

		expect: -1,

		// 4번

		freeMessage: '파이팅~~',
	};

	const [form, setForm] = useState(initFormState);
	const [modal, setModal] = useState({
		index: 0,
	});

	const resetStore = () => {
		setForm(initFormState);
	};

	return (
		<FormContext.Provider
			value={{ form, setForm, modal, setModal, resetStore }}
		>
			<div className={styles.App}>
				<Header />
				<main className={styles.main}>
					{users.length > 0 ? (
						<ListView users={users} />
					) : (
						<EmptyView />
					)}
				</main>
			</div>
		</FormContext.Provider>
	);
}

export default App;
