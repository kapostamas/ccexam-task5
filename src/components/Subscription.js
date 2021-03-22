import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';

function send(email, hotel) {
	return fetch('api/hotels/subscribe', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({email, hotel})
	})
		.then(response => response.json())
		.then(data => data.success);
}

function Subscription({subject, onClose}) {
	const [email, setEmail] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(null);

	useEffect(() => {
		if (email.includes('@') && email.includes('.'))
			setIsValid(true);
		else
			setIsValid(false);
	}, [email]);

	const subscribe = async () => {
		setIsLoading(true);
		send(email, subject).then(result => {
			setSuccess(result);
			window.setTimeout(onClose, 5000);
		});
	}
	return success === null ?
		<>
			<h1>Request more info about {subject}</h1>
			{!isLoading ?
				<div>
					<input type='text' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
					<button onClick={subscribe} disabled={!isValid}>Subscribe</button>
				</div>
			:
				<LoadingMask/>
			}
		</> :
		success ?
			<p>Subscribed</p>
		:
			<p>Already subscribed</p>
}

export default Subscription;