import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';

import project1 from '../../public/images/projects/project_1_runsmart.jpg';
import project2 from '../../public/images/projects/project_2_guess_number.jpg';
import project3 from '../../public/images/projects/project_3_pig_game.jpg';
import project4 from '../../public/images/projects/project_4_uber.jpg';
import project5 from '../../public/images/projects/project_5_potfolio.jpg';
import project6 from '../../public/images/projects/project_6_mapty.jpg';
import project7 from '../../public/images/projects/project_7_forkify.jpg';
import project8 from '../../public/images/projects/project_8_UsePopcorn.jpg';
import project9 from '../../public/images/projects/project_9_Fast_React_Pizza.jpg';
import project10 from '../../public/images/projects/project_10_Wild_Oasis_Dashboard.jpg';
import project11 from '../../public/images/projects/project_11_Wild_Oasis_Website.jpg';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
	return (
		<article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
			<Link
				href={link}
				target="_blank"
				className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
				<FramerImage
					src={img}
					alt={title}
					className="w-full h-auto"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</Link>

			<div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
				<span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
					{type}
				</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2">
					<h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-base">
						{title}
					</h2>
				</Link>
				<p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
					{summary}
				</p>
				<div className="mt-2 flex items-center">
					<Link href={github} target="_blank" className="w-10">
						<GithubIcon />
					</Link>
					<Link
						href={link}
						target="_blank"
						className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base">
						Demo Page
					</Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({ title, type, img, link, github }) => {
	return (
		<article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-9 relative shadow-2xl xs:p-4">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
			<Link
				href={link}
				target="_blank"
				className="w-full cursor-pointer overflow-hidden rounded-lg">
				<FramerImage
					src={img}
					alt={title}
					className="w-full h-auto"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				/>
			</Link>

			<div className="w-full flex flex-col items-start justify-between mt-4">
				<span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
					{type}
				</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2">
					<h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
						{title}
					</h2>
				</Link>
				<div className="w-full mt-2 flex items-center justify-between">
					<Link
						href={link}
						target="_blank"
						className="text-lg font-semibold underline md:text-base">
						Demo-page
					</Link>
					<Link href={github} target="_blank" className="w-8 md:w-6">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const projects = () => {
	return (
		<>
			<Head>
				<title>DGeraskin | Projects Page</title>
				<meta
					name="description"
					content="Dmitrii Geraskin. Web designer and UI/UX developer. About my last projects."
				/>
			</Head>
			<TransitionEffect />
			<main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<AnimatedText
						text="Creativity rules!"
						className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
					/>
					<div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
						<div className="col-span-12">
							<FeaturedProject
								type="The Wild Oasis"
								title="Minihotel Website"
								summary="Interactive web application for a boutique hotel. It allows users to book rooms, manage their bookings, and check real-time room availability. The application is integrated with a Supabase database to ensure accurate and up-to-date booking information."
								img={project11}
								link="https://the-wild-oasis-website-ger.vercel.app/"
								github="https://github.com/Gerbull/the-wild-oasis-website/"
							/>
						</div>
						<div className="col-span-12">
							<FeaturedProject
								type="The Wild Oasis"
								title="Dashboard"
								summary="Comprehensive React-based hotel management application that streamlines the management of cabins, bookings, and guest information, offering a seamless and efficient solution, deployed on Vercel."
								img={project10}
								link="https://the-wild-oasis-ger.vercel.app/"
								github="https://github.com/Gerbull/the-wild-oasis"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								type="UsePopcorn"
								title="React app for searching, rating, and managing a watched list of movies via the OMDB API"
								img={project8}
								link="https://use-popcorn-ger.vercel.app/"
								github="https://github.com/Gerbull/usepopcorn"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Fast React Pizza"
								title="React app for ordering pizzas, managing orders, and tracking delivery"
								img={project9}
								link="https://fast-react-pizza-ger.vercel.app/"
								github="https://github.com/Gerbull/fast-react-pizza"
							/>
						</div>
						<div className="col-span-12">
							<FeaturedProject
								type="Portfolio"
								title="Personal portfolio site"
								summary="Own portfolio site, created using modern trends in design and web development. Fully adapted for use on mobile devices."
								img={project5}
								link="https://projects.dgeraskin.com/OldPortfolio/"
								github="https://github.com/Gerbull/gerbull.github.io/tree/1be29d737071127d1aa5f0245e29d3502ad3b072/myProjects/OldPortfolio"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Forkify"
								title="JavaScript app to find and collect recipes"
								img={project7}
								link="https://gerforkify.netlify.app/"
								github="https://github.com/Gerbull/gerbull.github.io/tree/343f7fb16a6403e17a78efe0ba06724553f5994b/myProjects/Forkify"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Mapty"
								title="Full JS app to track workouts on map"
								img={project6}
								link="https://projects.dgeraskin.com/Mapty/"
								github="https://github.com/Gerbull/gerbull.github.io/tree/2f9cda30880602a61cb840023da45d1cd9cb32cf/myProjects/Mapty"
							/>
						</div>
						<div className="col-span-12">
							<FeaturedProject
								type="RunSmart"
								title="Custom one page online shop with basic features"
								summary="One-page site - online shop lending with a small catalogue of products. Implemented the possibility of basic sorting of goods, sending orders, feedback form, customer feedback section, embedded map from yandex map. Performed a deep adoption of the site for mobile devices."
								img={project1}
								link="https://projects.dgeraskin.com/RunSmart/"
								github="https://github.com/Gerbull/gerbull.github.io/tree/e6453867e156e2d43f92576c0325d4d2d1e5146b/myProjects/RunSmart"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Guess My Number"
								title="Simple game to practice JavaScript"
								img={project2}
								link="https://projects.dgeraskin.com/GuessMyNumber/"
								github="https://github.com/Gerbull/gerbull.github.io/tree/e6453867e156e2d43f92576c0325d4d2d1e5146b/myProjects/GuessMyNumber"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Pig Game"
								title="Two players simple game on JavaScript"
								img={project3}
								link="https://projects.dgeraskin.com/PigGame/"
								github="https://github.com/Gerbull/gerbull.github.io/tree/e6453867e156e2d43f92576c0325d4d2d1e5146b/myProjects/PigGame"
							/>
						</div>

						<div className="col-span-12 ">
							<FeaturedProject
								type="Uber Partner"
								title="Landing for the Uber Partner company"
								summary="The site was created to sharpen skills in basic HTML and CSS, framing and adaptation for mobile devices."
								img={project4}
								link="https://projects.dgeraskin.com/Uber/"
								github="https://github.com/Gerbull/gerbull.github.io/tree/9e31b6b81d7ecdb94c35fc3a0cf0c8d951d50a07/myProjects/Uber"
							/>
						</div>
						{/* <div className="col-span-6 sm:col-span-12">
							<Project
								type="Project"
								title="Crypto Screener Application"
								img={project1}
								link="/"
								github="/"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Project"
								title="Crypto Screener Application"
								img={project1}
								link="/"
								github="/"
							/>
						</div> */}
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
