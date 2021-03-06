import React, { useReducer } from 'react';
import { Switch, Route } from "react-router-dom";
import { Context, initialState, reducer } from './store.jsx';
import FullVizView from './fullVizView.jsx';
import QuadrantView from './quadrantView.jsx';
import HistoryView from './historyView.jsx';

//declare paths for react router and give components access to store.
const App = () => {
	const [store, dispatch] = useReducer(reducer, initialState)
	return (
		<main>
			<Context.Provider value={{ store, dispatch }}>
				<Switch>
					<Route path="/fullviz" component={FullVizView} />
					<Route path="/fullhistory" component={HistoryView} />
					<Route path="*" component={QuadrantView} />
					<Route path="/" component={QuadrantView} exact />
				</Switch>
			</Context.Provider>
		</main>
	)
}

export default App;
