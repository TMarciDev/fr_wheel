import { useState } from 'react';
import './App.css';
import TurnInput from './components/TurnInput';
import Wheel from './components/Wheel';

function App() {
	const [angle, setAngle] = useState(0);
	const [rotationTime, setRotationTime] = useState(0.1);

	const handleAngleChange = (d) => {
		setAngle(d);
		setRotationTime((d / 365) * 4);
	};

	const setToZero = () => {
		window.location.reload(false);
	};

	return (
		<div className='flex justify-center xl:scale-150'>
			<TurnInput
				handleButtonClick={handleAngleChange}
				setToZero={setToZero}
				className='flex scale-50'
			/>
			<Wheel
				angle={angle}
				time={rotationTime}
				className='scale-75 w-96 absolute top-0'
			/>
		</div>
	);
}

export default App;
