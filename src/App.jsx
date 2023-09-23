import { createContext, useState } from 'react';
import { EmptyView, Header, ListView } from '@/components';


import styles from './App.module.scss';

function App() {

	const users = localStorage.getItem('goormUsers')
		? JSON.parse(localStorage.getItem('goormUsers'))
		: [];
	return (
		<div className={styles.App}>
			<Header />
			<main className={styles.main}>
				{users.length > 0 ? <ListView users={users} /> : <EmptyView />}
			</main>
		</div>
	);
}

export default App;
