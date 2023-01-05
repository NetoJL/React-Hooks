import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {
	const {state, setState} = useContext(DataContext);

	function changeNumber(delta) {
		setState({
			...state,
			number: state.number + delta,
		});
	}

	return (
		<div className="UseContext">
			<PageTitle
				title="Hook UseContext"
				subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
			/>

			<div className="center">
				<span className="text">{state.text}</span>
				<span className="text">{state.number}</span>
				<div>
					<button className="btn" onClick={() => changeNumber(+1)}>
						Add number
					</button>
					<button className="btn" onClick={() => changeNumber(-1)}>
						Remove number
					</button>
				</div>
			</div>
		</div>
	);
};

export default UseContext;
