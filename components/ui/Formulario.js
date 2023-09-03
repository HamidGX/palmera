import React from 'react'
import styled from '@emotion/styled'

export const Formulario = styled.form`
	max-width: 600px;
	width: 95%;
	margin: 5rem auto;

	fieldset {
		margin: 2rem 0;
		border: 1px solid #e1e1e1;
		font-size: 1.8rem;
		padding: 1rem;
	}
`

export const Campo = styled.div`
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	label {
		flex: 0 0 150px;
		font-size: 1.8rem;
	}

	input,
	textarea {
		flex: 1;
		padding: 1rem;
	}

	textarea {
		height: 300px;
	}

	@media (max-width: 768px) {
		label {
			font-size: 1.4rem;
		}
	}
`

export const InputSubmit = styled.input`
	background-color: var(--verde);
	width: 100%;
	padding: 1.5rem;
	text-align: center;
	color: #fff;
	font-size: 1.8rem;
	text-transform: uppercase;
	border: none;
	font-family: 'PT Sans', sans-serif;
	font-weight: 700;
	border: 1px solid #d1d1d1;
	border-radius: 5px;
	transition: background-color 0.3s, color 0.3s, border 0.3s;

	&:hover {
		background-color: #13805f;
		cursor: pointer;
	}
`

export const Error = styled.p`
	background-color: red;
	padding: 1rem;
	font-family: 'PT Sans', sans-serif;
	font-weight: 700;
	font-size: 1.4rem;
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	margin: 2rem 0;
`
