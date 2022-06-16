import './App.css';

import Header from './components/Header';
import Images from './components/Images';
import Videos from './components/Videos';

function App() {
	return (
		<div className="content-container">
			<Header />

			<Images />
			<hr />
			<Videos />
		</div>
	);
}

export default App;
