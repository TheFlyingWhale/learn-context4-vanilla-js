import { useContext } from 'react';
import { Context } from './Context';

const Display = () => {
	const { state } = useContext(Context);
	return (
		<>
			<p>Name: {state.user.name}</p>
			<p>Age: {state.user.age}</p>
		</>
	);
};

export default Display;
