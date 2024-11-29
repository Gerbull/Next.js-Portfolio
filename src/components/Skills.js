import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
			viewport={{ once: true }}>
			{name}
		</motion.div>
	);
};

const Skills = () => {
	return (
		<>
			<h2 className="font-bold text-8xl mt-48 mb-12 w-full text-center md:text-6xl md:mt-32 md:mb-6 xs:text-4xl xs:mb-2">
				Skills
			</h2>
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
					whileHover={{ scale: 1.05 }}>
					Web
				</motion.div>

				<Skill name="CSS" x="-5vw" y="-12vw" />
				<Skill name="HTML" x="-25vw" y="2vw" />
				<Skill name="JavaScript" x="20vw" y="6vw" />
				<Skill name="React" x="0vw" y="12vw" />
				<Skill name="Next.js" x="-20vw" y="-15vw" />
				<Skill name="Web Design" x="27vw" y="-5vw" />
				<Skill name="Figma" x="0vw" y="-20vw" />
				<Skill name="MongoDB" x="-20vw" y="18vw" />
				<Skill name="Supabase" x="15vw" y="-12vw" />
				<Skill name="Tailwind CSS" x="18vw" y="18vw" />
				<Skill name="Node.js" x="2vw" y="25vw" />
			</div>
		</>
	);
};

export default Skills;