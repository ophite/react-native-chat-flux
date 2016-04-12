import {createSelector} from 'reselect';


export default requestSelector = (stateName, state, props) => {
	return (requestId) => {

		const customSelector = (state) => state[stateName];
		let selector = createSelector(
			customSelector,
			(custom) => ({
				requests: custom.requests
			})
		)(state, props);

		if (selector.requests) {
			let requestInfo = selector.requests[ requestId ];
			if (requestInfo) {
				return {
					...requestInfo
				}
			}
		}

		return {};
	};

};
