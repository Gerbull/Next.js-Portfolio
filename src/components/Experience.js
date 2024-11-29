import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null);

	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}>
				<h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
					{position}&nbsp;
					<a
						href={companyLink}
						target="_blank"
						className="text-primary dark:text-primaryDark capitalize">
						@{company}
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
					{time} | {address}
				</span>
				<p className="font-medium w-full md:text-sm">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	});

	return (
		<div className="my-48 md:my-32">
			<h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
				Experience
			</h2>

			<div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 -top-2 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[29px] xs:left-[19px]"
				/>

				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						position="CEO"
						company="LLC SOGER"
						// companyLink=""
						time="Jan 2020 – Dec 2022"
						address="Moscow, Russia"
						work="Led a wholesale company in joint health supplements, driving growth through strategic development, financial oversight, and supply chain optimization. Increased turnover by 35% in two years via product expansion and marketing. Improved cost efficiency by 20% through streamlined logistics and optimized team structure."
					/>
					<Details
						position="Interior Designer"
						company="Self-Employed"
						// companyLink=""
						time="May 2015 – Dec 2019"
						address="Moscow, Russia"
						work="Designed and managed over 15 successful residential and commercial projects, receiving highly positive client feedback. Introduced an innovative interior visualization method using augmented and virtual reality, achieving full client satisfaction through a personalized approach."
					/>
					<Details
						position="Founder"
						company="GelaCenter.ru"
						// companyLink="http://www.google.com"
						time="Jan 2014 – Dec 2022"
						address="Moscow, Russia"
						work="Developed and launched a successful online store for joint health supplements, achieving high sales and top search rankings on Google and Yandex. Streamlined business processes through automation, allowing for minimal staffing needs and sustained growth."
					/>
					<Details
						position="CEO"
						company="LLC ORLING"
						// companyLink="http://www.google.com"
						time="Mar 2009 – Dec 2015"
						address="Moscow, Russia"
						work="Directed strategic growth for a wholesale supplement company, increasing turnover by 40% through new partnerships and expanded distribution. Optimized logistics to cut delivery times and warehouse costs by 15%, and boosted the client base by 25% through targeted sales incentives."
					/>
					<Details
						position="Planning Department Economist"
						company="Acoustics Institute AKIN"
						// companyLink="http://www.google.com"
						time="Jun 2004 – Feb 2009"
						address="Moscow, Russia"
						work="Managed financial planning and budgeting for the institute, optimizing research costs and enhancing project execution efficiency by 20%. Reduced administrative expenses by 10% through advanced analytical tools."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
