import React, {useState, useEffect} from 'react';
import Hotel from './components/Hotel';
import LoadingMask from './components/LoadingMask';
import './App.css';

function App() {
	const [hotels, setHotels] = useState(null);
	const [error, setError] = useState(false);
	useEffect(() => {
		fetch('api/hotels')
			.then(response => response.json())
			.then(setHotels)
			.catch(() => setError(true));
	}, []);

	return <div className='App'>
			{error ?
				"Oops, something happened." :
			hotels ?
				hotels.map(hotel => <Hotel {...hotel}/>)
			:
				<LoadingMask/>
			}
	</div>
}

export default App;
