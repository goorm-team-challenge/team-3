import { EmptyView, Header, ListView } from '@/components';
import { createContext, useState } from 'react';

import styles from './App.module.scss';

export const FormContext = createContext();

function App() {
	const users = localStorage.getItem("goormUsers")
		? JSON.parse(localStorage.getItem("goormUsers"))
		: [];

	const [form, setForm] = useState({
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

		expect1: '기대1',
		expect2: '기대2',
		expect3: '기대3',
		expect4: '기대4',

		// 4번

		freeMessage: '파이팅~~',
	});
	return (
		<FormContext.Provider value={{ form, setForm }}>
			<div className={styles.App}>
				<Header />
				<main className={styles.main}>
					{users.length > 0
						? <ListView users={users} />
						: <EmptyView />}
				</main>
			</div>
		</FormContext.Provider>
	);
}

export default App;
