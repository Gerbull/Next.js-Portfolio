import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className=" w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
			<Layout className="py-4 flex items-center justify-between lg:flex-col lg:py-6 xl:py-6 md:py-6 sm:py-6">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className="flex items-center lg:py-2">
					Build with{' '}
					<span className=" text-primary dark:text-primaryDark text-2xl px-1">
						&#9825;
					</span>{' '}
					by&nbsp;{' '}
					<Link
						href="https://dgeraskin.com/"
						className="underline underline-offset-2">
						DGeraskin
					</Link>
				</div>
				{/* <Link href="/">Say Hello</Link> */}
			</Layout>
		</footer>
	);
};

export default Footer;
