import React, { useState } from 'react';

const TurnInput = (props) => {
	const [value, setValue] = useState(0);
	return (
		<div>
			<input
				type='number'
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
				className='shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
			/>
			<br></br>
			<button
				onClick={() => props.setToZero()}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
			>
				SET BACK
			</button>
			<button
				onClick={() => props.handleButtonClick(value)}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
			>
				SPIN
			</button>
		</div>
	);
};

export default TurnInput;
