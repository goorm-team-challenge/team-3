import { createContext, useState } from 'react';

import { EmptyView, Header, ListView } from '@/components';
import useModalContext from '@/components/Context/formProvider';

import styles from './App.module.scss';

export const modalContext = createContext();

function App() {
	const { form, updateForm, modalIndex, updateModalIndex, resetForm } =
		useModalContext();

	const users = localStorage.getItem('goormUsers')
		? JSON.parse(localStorage.getItem('goormUsers'))
		: [];

	return (
		<modalContext.Provider
			value={{
				form,
				updateForm,
				modalIndex,
				updateModalIndex,
				resetForm,
			}}
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
		</modalContext.Provider>
	);
}

export default App;
