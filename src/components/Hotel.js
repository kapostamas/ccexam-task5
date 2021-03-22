import React, {useState} from 'react';
import Subscription from './Subscription';

function Hotel({name, stars, city}) {
	const [showDetails, setShowDetails] = useState(false);
	const [showSubscription, setShowSubscription] = useState(false);

	return <div className='hotel'>
		<p>{name}</p>
		{showDetails ? <>
			<button onClick={() => setShowDetails(false)}>Show less</button>
			<p>{city} ({stars})</p>
			<button onClick={() => setShowSubscription(true)}>Request more info about {name}</button>
			{showSubscription && <Subscription subject={name} onClose={() => {setShowDetails(false); setShowSubscription(false)}}/>}
		</> :
			<button onClick={() => setShowDetails(true)}>Show more</button>
		}
	</div>
}

export default Hotel;