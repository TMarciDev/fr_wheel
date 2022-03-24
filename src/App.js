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
		<div className='main flex justify-center '>
			<TurnInput
				handleButtonClick={handleAngleChange}
				setToZero={setToZero}
				className='flex'
			/>
			<Wheel
				angle={angle}
				time={rotationTime}
				className='wheel w-96 absolute bottom-1/4'
			/>
		</div>
	);
}

export default App;
