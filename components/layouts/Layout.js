/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Header from './Header'
import { Global, css } from '@emotion/react'
import Head from 'next/head'
const Layout = (props) => {
	return (
		<>
			<Global
				styles={css`
					:root {
						--gris: #3d3d3d;
						--gris2: #6f6f6f;
						--gris3: #e1e1e1;
						--naranja: #da552f;
						--verde: #17a589;
					}

					html {
						font-size: 62.5%;
						box-sizing: border-box;
						background-color: #f5f5f5;
					}
					*,
					*:before,
					*after {
						box-sizing: inherit;
					}

					body {
						font-size: 1.6rem; /* 16px */
						line-height: 1.5;
						font-family: 'PT Sans', sans-serif;
					}

					h1,
					h2,
					h3 {
						margin: 0 0 rem 0;
						line-height: 1.5M;
					}

					h1,
					h2 {
						font-family: 'Roboto Slab', serif;
						font-weight: 700;
					}

					h3 {
						font-family: 'PT Sans', sans-serif;
					}

					ul {
						list-style: none;
						margin: 0;
						padding: 0;
					}
					a {
						text-decoration: none;
					}

					img {
						max-width: 100%;
					}
				`}
			/>
			<Head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='Palmera Acapulco' />
				<meta name='robots' content='index,follow' />

				<title>Palmera</title>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'
					integrity='sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=='
					crossOrigin='anonymous'
					referrerpolicy='no-referrer'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap'
					rel='stylesheet'
				/>
				<link href='/static/css/app.css' rel='stylesheet' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
			</Head>
			<Header />
			<main>{props.children}</main>
		</>
	)
}

export default Layout
