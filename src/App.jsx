import React from 'react';
import Display from './Display';
import Form from './Form';
import { Provider } from './Context';

function App() {
	return (
		<Provider>
			<Display></Display>
			<Form></Form>
		</Provider>
	);
}

export default App;
