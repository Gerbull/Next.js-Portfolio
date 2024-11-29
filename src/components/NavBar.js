import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
	GithubIcon,
	GithubIconMobile,
	LinkedInIcon,
	LinkedInIconMobile,
	MoonIcon,
	MoonIconMobile,
	PinterestIcon,
	SunIcon,
	SunIconMobile,
	TwitterIcon,
	TwitterIconMobile,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`
      h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
				router.asPath === href ? 'w-full' : 'w-0'
			}
			dark:bg-light
      `}>
				&nbsp;
			</span>
		</Link>
	);
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
	const router = useRouter();

	const handleClick = () => {
		toggle();
		router.push(href);
	};

	return (
		<button
			href={href}
			className={`${className} relative group text-light dark:text-dark my-2`}
			onClick={handleClick}>
			{title}

			<span
				className={`
      h-[1px] inline-block bg-light  dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
				router.asPath === href ? 'w-full' : 'w-0'
			}
      `}>
				&nbsp;
			</span>
		</button>
	);
};

const Social = ({ href, children }) => {
	return (
		<motion.a
			href={href}
			target="_blank"
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.9 }}
			className="w-6 mx-3 sm:mx-1">
			{children}
		</motion.a>
	);
};

const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null); // Создаем реф для отслеживания области меню

	const handleClick = () => {
		event.stopPropagation(); // Останавливаем всплытие события
		// setIsOpen(!isOpen);
		setIsOpen((prev) => !prev); // Переключаем состояние меню
	};

	/// Обработчик кликов вне меню
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('click', handleOutsideClick);
		} else {
			document.removeEventListener('click', handleOutsideClick);
		}

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [isOpen]);

	return (
		<header className="max-w-[1440px] mx-auto px-8 lg:px-16 md:px-12 sm:px-8 py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
			<button
				onClick={handleClick}
				className="flex-col justify-center items-center hidden lg:flex">
				<span
					className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
						isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
					}`}></span>
				<span
					className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}></span>
				<span
					className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
						isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
					}`}></span>
			</button>

			<div className="w-full flex justify-between items-center lg:hidden">
				<nav>
					<CustomLink href="/" title="Home" className="mr-4" />
					<CustomLink href="/about" title="About me" className="mx-4" />
					<CustomLink href="/projects" title="My projects" className="ml-4" />
				</nav>

				<nav className="flex items-center justify-center flex-wrap">
					<Social href="https://www.linkedin.com/in/dmitrii-geraskin/">
						<LinkedInIcon mode={mode} />
					</Social>
					<Social href="https://github.com/Gerbull">
						<GithubIcon />
					</Social>
					<Social href="https://x.com/DGeraskin_com">
						<TwitterIcon mode={mode} />
					</Social>

					<button
						onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
						className={`flex items-center justify-center rounded-full p-1 border-2 border-solid border-dark dark:border-light`}>
						{mode === 'dark' ? (
							<SunIcon className={'fill-dark'} />
						) : (
							<MoonIcon className={'fill-dark'} />
						)}
					</button>
				</nav>
			</div>

			{isOpen ? (
				<motion.div
					ref={menuRef} // Привязываем реф к меню
					initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
					animate={{ scale: 1, opacity: 1 }}
					className="min-w-[70vw] flex-col  flex justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
					<nav className="flex items-center flex-col justify-center">
						<CustomMobileLink href="/" title="Home" toggle={handleClick} />
						<CustomMobileLink
							href="/about"
							title="About"
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/projects"
							title="Projects"
							className="mb-8"
							toggle={handleClick}
						/>
					</nav>

					<nav className="flex items-center justify-center flex-wrap">
						<Social href="https://www.linkedin.com/in/dmitrii-geraskin-26471926/">
							<LinkedInIconMobile mode={mode} />
						</Social>
						<Social href="https://github.com/Gerbull">
							<GithubIconMobile mode={mode} />
						</Social>
						<Social href="https://twitter.com/DGeraskin_ru">
							<TwitterIconMobile mode={mode} />
						</Social>

						<button
							onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
							className={`flex items-center justify-center rounded-full p-1 ml-2 sm:ml-1 border-2 border-solid border-light dark:border-dark`}>
							{mode === 'dark' ? (
								<SunIconMobile mode={mode} className={'fill-dark'} />
							) : (
								<MoonIconMobile mode={mode} className={'fill-dark'} />
							)}
						</button>
					</nav>
				</motion.div>
			) : null}

			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
