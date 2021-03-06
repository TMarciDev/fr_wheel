import React, { useState } from 'react';
import './wiggle.css';

const Wheel = (props) => {
	console.log(props.time);
	return (
		<div className={props.className}>
			<img
				src='https://i.ibb.co/8jJ2pKV/Wheel-Background.png'
				alt=''
				className='h-96'
			/>
			<img
				src='https://i.ibb.co/tMS1nxP/Inner-Wheel.png'
				alt=''
				className={'absolute transition ease-out'}
				style={{
					transform: `rotate(${props.angle}deg)`,
					transitionDuration: `${props.time}s`,
					top: '61px',
					left: '70px',
					height: '230px',
				}}
			/>
			<img
				src='https://i.ibb.co/cwKMJND/Wheel-Pointer.png'
				alt=''
				className={'wiggle absolute'}
				style={{
					top: '30px',
					left: '157px',
					height: '45px',
					animationIterationCount: `${
						Math.floor(props.time) !== 0 ? Math.floor(props.time * 6.66) : 1
					}`,
				}}
			/>
		</div>
	);
};

export default Wheel;
