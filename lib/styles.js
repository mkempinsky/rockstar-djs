export const BREAKPOINT = '1170px';

// GLOBAL STYLES
export const globalStyles = `
	/* latin */
	@font-face {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local('Lato Regular'), local('Lato-Regular'), url(/static/fonts/lato.woff2) format('woff2'), url(/static/fonts/playfair.woff) format('woff');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	/* latin */
	@font-face {
		font-family: 'Playfair Display';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), local('PlayfairDisplay-Bold'), url(/static/fonts/playfair.woff2) format('woff2'), url(/static/fonts/playfair.woff) format('woff'),
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	html, body {
		height: 100%;
		font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
		color: #1C2838;
		font-size: 16px;
	}
	html {
		-webkit-font-smoothing: antialiased;
	}

	h1{
		font-family: Montserrat, sans-serif;
		color: var(--orange);
		font-size: 48px;
		line-height: 52px;
		text-align: left;
		letter-spacing: normal;
	}
	@media screen and (min-width: ${BREAKPOINT}){
		h1{
			font-size: 64px;
			line-height: 76px;
		}
	}
	h2 {
		font-size: 32px;
		font-family: var(--font-primary);
	}
	@media screen and (min-width: ${BREAKPOINT}){
		h2 {
			font-size: 38px;
		}
	}
	h3 {
		font-family: Montserrat, sans-serif;
		font-size: 32px;
		line-height: 40px;
		color: #000;
	}
	@media screen and (min-width: ${BREAKPOINT}){
		h3 {
			font-size: 40px;
			line-height: 53px;
		}
	}
	h4 {
		text-transform: uppercase;
		font-family: var(--font-primary);
		font-size: 22px;
		letter-spacing: 1.2px;
		margin-bottom: 30px;

	}

	p {
		font-family: var(--font-secondary);
		font-weight: normal;
		color: #000;
		font-size: 16px;
		line-height: 32px;
		margin-bottom: 30px;
	}
	@media screen and (min-width: ${BREAKPOINT}){
		p {
			margin-bottom: 30px;
			line-height: 30px;
		}
	}
	ul {
		margin: 0;
		padding: 0;
		font-size: 16px;
		line-height: 32px;

	}




	:root {

		--font-primary: Montserrat, sans-serif;
		--font-secondary: Open Sans, sans-serif;

		--gray-100: #F8F9FA;
		--gray-200: #EFEFEF;
		--gray-300: #b2b2b2;
		--gray-400: #8c8c8c;

		--orange: #f7941e;

		--primary: #073984;

		--interactive: #ccad52;
		--interactive-100: #19b5bc;

	}


	/* Make clicks pass-through */
	#nprogress {
		pointer-events: none;
	}

	#nprogress .bar {
		background: #337fbd;

		position: fixed;
		z-index: 1031;
		top: 0;
		left: 0;

		width: 100%;
		height: 2px;
	}

	/* Fancy blur effect */
	#nprogress .peg {
		display: block;
		position: absolute;
		right: 0px;
		width: 100px;
		height: 100%;
		box-shadow: 0 0 10px #337fbd, 0 0 5px #337fbd;
		opacity: 1;

		-webkit-transform: rotate(3deg) translate(0px, -4px);
		-ms-transform: rotate(3deg) translate(0px, -4px);
		transform: rotate(3deg) translate(0px, -4px);
	}

	/* Remove these to get rid of the spinner */
	#nprogress .spinner {
		display: block;
		position: fixed;
		z-index: 1031;
		top: 15px;
		right: 15px;
	}

	#nprogress .spinner-icon {
		width: 18px;
		height: 18px;
		box-sizing: border-box;

		border: solid 2px transparent;
		border-top-color: #29d;
		border-left-color: #29d;
		border-radius: 50%;

		-webkit-animation: nprogress-spinner 400ms linear infinite;
		animation: nprogress-spinner 400ms linear infinite;
	}

	.nprogress-custom-parent {
		overflow: hidden;
		position: relative;
	}

	.nprogress-custom-parent #nprogress .spinner,
	.nprogress-custom-parent #nprogress .bar {
		position: absolute;
	}

	`;
