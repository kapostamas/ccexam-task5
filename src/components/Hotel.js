import React, {useState} from 'react';

function Hotel({name, stars, city, onInquire}) {
	const [showDetails, setShowDetails] = useState(false);
	return <div>
		<h2>{name}</h2>
		{showDetails ? <>
			<p>{'★'.repeat(stars) || 'No stars'}</p>
			<p>{city}</p>
			<button onClick={onInquire}>Request more info</button>
			<button onClick={() => setShowDetails(false)}>Show less</button>
		</> :
			<button onClick={() => setShowDetails(true)}>Show more</button>
		}
	</div>
}

export default Hotel;