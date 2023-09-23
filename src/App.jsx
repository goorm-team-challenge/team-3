import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import FormContext from './components/Context/formProvider';
import Modal2 from './components/Modal/modal2';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<main className={styles.main}>
				<EmptyView />
				<Modal2 />
			</main>
		</div>
	);
}

export default App;
