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
		setAngle(0);
		setRotationTime(0.1);
	};

	return (
		<>
			<TurnInput handleButtonClick={handleAngleChange} setToZero={setToZero} />
			<Wheel angle={angle} time={rotationTime} className='relative border-2 ' />
		</>
	);
}

export default App;
