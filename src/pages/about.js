import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/dgeraskin-pic-3.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, motionValue, value]);

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<Head>
				<title>DGeraskin | About Page</title>
				<meta
					name="description"
					content="Dmitrii Geraskin. Web designer and UI/UX developer. About me, my skills and my education."
				/>
			</Head>
			<TransitionEffect />
			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<AnimatedText
						text="Ideas matter most!"
						className="mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
					/>
					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
						<div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
								About me
							</h2>
							<p className="font-medium mb-3">
								Hi, I&apos;m Dmitrii, a web developer and UI/UX designer with a
								passion for creating beautiful, functional, and user-centered
								digital experiences. I&apos;m always excited to explore new and
								innovative ways to bring my clients&apos; visions to life.
							</p>
							<p className="font-medium mb-3">
								For me, design is more than just making things look great –
								it&apos;s about solving real problems and crafting intuitive,
								enjoyable experiences for users.
							</p>
							<p className="font-medium mb-3">
								I work with a wide range of technologies to bring these projects
								to life, including HTML, CSS, JavaScript, and frameworks like
								React or Next.js for building interactive user interfaces. I
								also use tools like Figma and Adobe Illustrator for designing
								wireframes and prototypes that ensure a seamless user
								experience. On the backend, I have experience with Node.js,
								which allows me to create dynamic, scalable solutions. I&apos;m
								always eager to learn and adopt new technologies that can
								improve my workflow and the quality of my projects.
							</p>
							<p className="font-medium">
								Whether it&apos;s a website, mobile app, or any digital product,
								I bring my commitment to design excellence and user-centered
								thinking to every project I work on. I can&apos;t wait for the
								chance to bring my skills and passion to your next project!
							</p>
						</div>
						<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePic}
								alt="Dmitrii Gerskin"
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumbers value={12} />+
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-right  xl:text-center md:text-lg sm:text-base xs:text-sm">
									Courses Completed on Udemy
								</h2>
							</div>
							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumbers value={430} />+
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-right  xl:text-center md:text-lg sm:text-base xs:text-sm">
									Hours of Educational Videos
								</h2>
							</div>
							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumbers value={15} />+
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-right xl:text-center md:text-lg sm:text-base xs:text-sm">
									Projects Successfully Completed
								</h2>
							</div>
						</div>
					</div>
					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default about;
