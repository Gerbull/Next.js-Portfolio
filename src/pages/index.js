import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/dgeraskin-pic-1.png';
// import profilePic from '../../public/images/profile/dg-logo-pink.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

export default function Home() {
	useEffect(() => {
		const hireMe = document.querySelector('#hire-me');
		const footer = document.querySelector('footer');

		const updatePosition = () => {
			if (footer) {
				const footerRect = footer.getBoundingClientRect();
				const hireMeRect = hireMe.getBoundingClientRect();

				if (window.innerWidth > 767) {
					if (footerRect.top < window.innerHeight) {
						hireMe.style.position = 'absolute';
						hireMe.style.left = '30px';
						hireMe.style.bottom = `${
							window.innerHeight - footerRect.top + 30
						}px`; // 16px - отступ от футера
					} else {
						hireMe.style.position = 'fixed';
						hireMe.style.left = '45px';
						hireMe.style.bottom = '30px'; // Исходный отступ от нижнего края экрана
					}
				}
			}
		};

		window.addEventListener('scroll', updatePosition);
		window.addEventListener('resize', updatePosition);
		updatePosition(); // Вызовите функцию один раз, чтобы установить начальное положение

		return () => {
			window.removeEventListener('scroll', updatePosition);
			window.removeEventListener('resize', updatePosition);
		};
	}, []);

	return (
		<>
			<Head>
				<title>DGeraskin | Web developer</title>
				<meta
					name="description"
					content="Dmitrii Geraskin. Web designer and UI/UX developer. Main page. Resume and contacts."
				/>
			</Head>
			<TransitionEffect />
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout className="pt-0 md:pt-16 sm:pt-8">
					<div className="flex lg:flex-col items-center justify-between w-full">
						<div className="flex justify-center w-1/2 md:w-full">
							<Image
								src={profilePic}
								alt="Dmitrii Geraskin"
								className="w-5/8 h-auto lg:inline-block lg:w-full md:inline-block md:w-full"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								quality={100}
							/>
						</div>
						<div className="w-1/2 lg:w-full flex flex-col items-center self-center lg:text-center">
							<AnimatedText
								// text="Turning Vision Into Reality With Code And Design."
								text="Turning ideas into great web applications."
								className="!text-5xl !text-left xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl"
							/>
							<p className="text-base font-medium md:text-sm sm:text-xs mt-4 mb-3">
								Hi! My name is Dmitriy, and I am a junior web developer. I
								started my career in economics and business management, where I
								led teams, optimized processes, and elevated companies to new
								heights. Now, I&apos;ve decided to change direction and focus on
								professional growth in web development. I&apos;ve always enjoyed
								exploring technologies and creating something practical and
								meaningful with my own hands.
							</p>
							<p className="text-base font-medium md:text-sm sm:text-xs mb-4">
								If you want to know more about what I do, feel free to check out
								my resume or drop me a message — I&apos;m always open to new
								opportunities! You can also take a look at my latest projects to
								see what I&apos;m working on.
							</p>
							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link
									href="/CV-Dmitrii-Geraskin.pdf"
									target={'_blank'}
									className="flex items-center bg-dark text-light p-2.5 pl-6 pr-5 rounded-xl text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
									dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
									download={true}>
									Resume <LinkArrow className={'w-6 ml-2'} />
								</Link>
								<Link
									href="https://t.me/Ger_bull"
									target={'_blank'}
									className="ml-6 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base">
									Contact
								</Link>
							</div>
						</div>
					</div>
				</Layout>

				<div className="fixed md:absolute left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto">
					<HireMe />
				</div>
			</main>
		</>
	);
}
