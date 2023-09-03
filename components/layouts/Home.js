import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Container = styled.div`
	display: grid;
	margin: 0 auto;
	max-width: 1120px;
	grid-template-columns: 180px 72px 1fr;
	grid-auto-rows: repeat(2, 1fr);
	justify-items: flex-end;
	align-items: center;
	grid-auto-flow: row;
	grid-column-gap: 40px;
	height: 100%;

	-webkit-align-items: center;
	-webkit-box-align: center;

	.logo {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 40px;
		width: 100%;

		@media (max-width: 720px) {
			grid-area: 1 / 1;
			grid-column: 1 / -1;
		}

		@media (max-width: 480px) {
			svg {
				max-width: 140px;
			}
		}
	}

	@media (max-width: 720px) {
		grid-template-columns: 1fr 227px;
		grid-column-gap: 0;
		grid-row-gap: 0;
		grid-auto-rows: 0;
		grid-template-rows: 1fr;
		transition: all 0.2s ease;

		${({ isMenuOpen }) =>
			isMenuOpen &&
			css`
				grid-row-gap: 40px;
				grid-auto-rows: 1fr;
			`}
	}

	@media (max-width: 1168px) {
		padding: 0 24px;
	}

	@media (max-width: 359px) {
		grid-template-columns: 1fr 180px;
	}
`

const Div = styled.div`
	padding-top: 32px;

	@media (max-width: 720px) {
		background: none;
		transition: all 0.2s linear;

		${({ isMenuOpen }) =>
			isMenuOpen &&
			css`
				background: ${(props) => props.theme.colors.shape};
				padding-bottom: 24px;
				position: sticky;
				top: 0;
				left: 0;
				right: 0;
				z-index: 1000;
			`}
	}

	@media (max-width: 480px) {
		padding-top: 24px;
	}
`

const ManifestLink = styled.div`
	color: ${(props) => props.theme.colors.support};
	font-size: 16px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	@media (max-width: 720px) {
		grid-area: 2 / 1;
		justify-self: flex-start;
		visibility: hidden;
		opacity: 0;
		transition: all 0.2s ease;

		${({ isMenuOpen }) =>
			isMenuOpen &&
			css`
				visibility: visible;
				opacity: 1;
			`}
	}
`

const ButtonJoin = styled.div`
	max-width: 118px;
	border: none;
	outline: none;
	color: #fff;
	background: ${(props) => props.theme.colors.primary};
	width: 100%;
	border-radius: 5px;
	padding: 12px 32px;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	text-transform: uppercase;
	text-decoration: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease;

	&[disabled],
	&[aria-disabled='true'] {
		cursor: auto;
		opacity: 0.5;
	}

	&:not([disabled]):not([aria-disabled='true']) {
		&:hover,
		&:focus {
			background-color: ${(props) => props.theme.colors.primaryhover};
		}

		&:active,
		&[data-active='true'] {
			background-color: ${(props) => props.theme.colors.primaryhover};
		}
	}

	@media (max-width: 720px) {
		grid-area: 2 / 2 / auto / auto;
		max-width: 100%;
		visibility: hidden;
		opacity: 0;
		transition: all 0.2s ease;

		${({ isMenuOpen }) =>
			isMenuOpen &&
			css`
				visibility: visible;
				opacity: 1;
			`}
	}
`

const MobileButton = styled.div`
	background: none;
	border: none;
	outline: none;
	width: 50px;
	height: 50px;
	display: none;
	justify-content: center;
	align-items: center;
	grid-area: 1 / 2;

	@media (max-width: 720px) {
		display: flex;
	}
`

const IconMobile = styled.div`
	width: 24px;
	height: 8px;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: ${(props) => props.theme.colors.primary};
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 16px;
		height: 2px;
		background: ${(props) => props.theme.colors.primary};

		${({ isMenuOpen }) =>
			isMenuOpen &&
			css`
				display: none;
			`}
	}
`

export { Container, Div, ManifestLink, ButtonJoin, MobileButton, IconMobile }
