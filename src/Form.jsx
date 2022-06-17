import { useContext } from 'react';
import { Context, actions } from './Context';

const { setName, setAge } = actions;

const Form = () => {
	const { dispatch } = useContext(Context);

	const submitName = (e) => {
		e.preventDefault();
		const input = e.target[0].value;
		dispatch(setName(input));
	};

	const submitAge = (e) => {
		e.preventDefault();
		const input = parseInt(e.target[0].value);
		dispatch(setAge(input));
	};

	return (
		<>
			<form onSubmit={submitName}>
				<label>
					Name:
					<input type="text" />
				</label>
				<button type="submit">submit</button>
			</form>

			<form onSubmit={submitAge}>
				<label>
					Age:
					<input type="number" />
				</label>
				<button type="submit">submit</button>
			</form>
		</>
	);
};

export default Form;
