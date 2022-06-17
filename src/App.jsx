import React from 'react';
import Display from './Display';
import Form from './Form';
import { Context, GetStateAndDispatch } from './Context';

function App() {
	return (
		<Context.Provider value={GetStateAndDispatch()}>
			<Display></Display>
			<Form></Form>
		</Context.Provider>
	);
}

export default App;
