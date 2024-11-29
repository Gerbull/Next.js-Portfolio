import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
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
					{type}
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
					{time} | {place}
				</span>
				<p className="font-medium w-full md:text-sm">{info}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	});

	// Ускорение и увеличение финального размера полоски
	const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1.6]);

	return (
		<div className="my-48 md:my-32">
			<h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
				Education
			</h2>

			<div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
				<motion.div
					style={{ scaleY }}
					className="absolute left-9 -top-2 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[29px] xs:left-[19px]"
				/>

				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						type="Web Development Courses"
						time="Jan 2022 – Nov 2024"
						place="Udemy"
						info="Completed a comprehensive range of web development courses on Udemy, covering key technologies and tools such as HTML, CSS, JavaScript, React, Next.js, Node.js, and MongoDB, with advanced studies in Figma for UI/UX design and SQL fundamentals. This education included in-depth training in responsive design, animations, backend development, and practical applications in augmented reality, totaling over 400 hours of coursework."
					/>
					<Details
						type="Interior Design. Diploma with honors."
						time="Sep 2013 – Jun 2014"
						place="International School of Design"
						info="he program provided advanced training in space planning, interior aesthetics, and functional design tailored for residential environments. Developed strong skills in conceptual design, color theory, and material selection, with hands-on projects that emphasized client-focused solutions and creative problem-solving in interior spaces."
					/>
					<Details
						type="Master of Science in Economics"
						time="Sep 1999 – Jun 2004"
						place="Plekhanov Russian University of Economics"
						info="The program covered in-depth financial analysis, corporate finance, and strategic management, equipping me with strong analytical and decision-making skills essential for financial planning and management. Key areas of study included budgeting, investment analysis, and risk management, with a focus on optimizing financial performance in various business settings. This education provided a solid foundation in both theoretical knowledge and practical applications in the field of finance."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
