import React from 'react';

const Layout = ({ children, className = '' }) => {
	return (
		<div
			className={`max-w-[1440px] mx-auto h-full inline-block z-0 bg-light dark:bg-dark px-8 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
			{children}
		</div>
	);
};

export default Layout;
