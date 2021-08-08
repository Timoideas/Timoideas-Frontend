import Head from 'next/head';
export default function Head_Stream() {
	return (
		<Head>
			<link rel='icon' href='icons/favicons/fav_main.ico' />
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta name='mobile-web-app-capable' content='yes'></meta>
			<title>Stream | Next</title>
			<meta
				name='description'
				content='Stream page.'
			/>
			<meta property='og:image' content='images/og/og_main.png'></meta>
		</Head>
	);
}
