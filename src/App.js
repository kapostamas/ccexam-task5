import React, {useState, useEffect} from 'react';
import Hotel from './components/Hotel';
import LoadingMask from './components/LoadingMask';
import Subscription from './components/Subscription';
import './App.css';

const apiAddress = 'api/hotels';

function App() {
	const [hotels, setHotels] = useState(null);
	const [error, setError] = useState(false);
	useEffect(() => {
		fetch(apiAddress)
			.then(response => response.json)
			.then(setHotels)
			.catch(() => setError(true));
	}, []);

	const [inquirySubject, setInquirySubject] = useState(null);

	return (
		<div className='App'>
			<h1>Hotels</h1>
			<div className='hotels'>
				{error ?
					"Oops, something happened." :
				hotels ?
					hotels.map(hotel => <Hotel {...hotel} onInquire={() => setInquirySubject(hotel.name)}/>)
				:
					<LoadingMask/>
				}
			</div>
			{inquirySubject === null || <Subscription subject={inquirySubject} onClose={() => setInquirySubject(null)}/>}
		</div>
	)
}

export default App;
