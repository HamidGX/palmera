import styled from '@emotion/styled'

const Boton = styled.a`
	display: inline-block;
	font-weight: 700;
	text-transform: uppercase;
	border: 1px solid #d1d1d1;
	border-radius: 5px;
	padding: 0.8rem 2rem;
	margin: 0.5rem;
	text-align: center;
	background-color: ${(props) => (props.bgColor ? '#17A589' : 'white')};
	color: ${(props) => (props.bgColor ? 'white' : '#000')};
	transition: background-color 0.3s, color 0.3s, border 0.3s;

	&:hover {
		background-color: ${(props) => (props.bgColor ? '#13805F' : '#EEE')};
		color: ${(props) => (props.bgColor ? 'white' : '#333')};
		border: 1px solid ${(props) => (props.bgColor ? '#13805F' : '#d1d1d1')};
		cursor: pointer;
	}
`

const BotonRojo = styled.a`
	display: inline-block;
	font-weight: 700;
	text-transform: uppercase;
	border: 1px solid #d1d1d1;
	border-radius: 5px;
	padding: 0.8rem 2rem;
	margin: 0.5rem;
	text-align: center;
	background-color: ${(props) =>
		props.bgColor
			? '#A5172A'
			: 'white'}; /* Cambiar a rojo si bgColor es verdadero */
	color: ${(props) =>
		props.bgColor
			? 'white'
			: '#000'}; /* Cambiar a blanco si bgColor es verdadero */
	transition: background-color 0.3s, color 0.3s, border 0.3s;

	&:hover {
		background-color: ${(props) =>
			props.bgColor
				? 'darkred'
				: '#EEE'}; /* Cambiar a un tono más oscuro de rojo al pasar el mouse si bgColor es verdadero */
		color: ${(props) => (props.bgColor ? 'white' : '#333')};
		border: 1px solid ${(props) => (props.bgColor ? 'darkred' : '#d1d1d1')};
		cursor: pointer;
	}
`

const BotonSecundario = styled.a`
	display: block;
	font-weight: 700;
	text-transform: uppercase;
	border: 1px solid #d1d1d1;
	padding: 0.8rem 2rem;
	margin: 2rem 0.5rem;
	text-align: center;
	background-color: white;
	color: black;

	&:last-of-type {
		margin-right: 0;
	}

	&:hover {
		cursor: pointer;
	}
`

export { Boton, BotonRojo, BotonSecundario }
