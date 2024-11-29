import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
	return (
		<div
			id="hire-me"
			className="fixed left-4 bottom-4 md:top-4 md:right-4 md:left-auto md:bottom-auto flex items-center justify-center overflow-hidden z-30">
			{/* className="fixed md:absolute left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto flex items-center justify-center overflow-hidden sm:right-0" > */}
			<div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
				<CircularText
					className={'fill-dark animate-spin-slow dark:fill-light'}
				/>
				<Link
					href="https://t.me/Ger_bull"
					className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:border-2
					dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]">
					Hire me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
