import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff"></meta>
				<meta property="og:title" content="DGeraskin | Web developer" />
				<meta
					property="og:description"
					content="Dmitrii Geraskin. Web designer and UI/UX developer."
				/>
				<meta
					property="og:image"
					content="../../public/images/banner-for-social-media.jpg"
				/>
				<meta property="og:url" content="https://dgeraskin.com" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<main
				className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
				<NavBar />
				<AnimatePresence mode="wait">
					<Component key={router.asPath} {...pageProps} />
				</AnimatePresence>
				<Footer />
			</main>
		</>
	);
}
