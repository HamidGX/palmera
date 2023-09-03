import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Router from 'next/router'
import { BiSearch } from 'react-icons/bi'

const InputText = styled.input`
	padding: 0.5rem 1rem;
	border: 2px solid var(--gris3);
	border-radius: 4px;
	width: auto;
	width: 20rem;

	@media (max-width: 768px) {
		width: 15rem; /* Opcionalmente, puedes ajustar el ancho para pantallas pequeñas */
	}
`
const StyledBiSearch = styled(BiSearch)`
	height: 2.5rem;
	width: 2.5rem;
	background-size: 2.5rem;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	@media (max-width: 768px) {
		width: 2rem; /* Ajusta el tamaño para pantallas pequeñas */
		height: 2rem; /* Ajusta el tamaño para pantallas pequeñas */
	}
`

const Buscar = () => {
	const [busqueda, guardarBusqueda] = useState('')

	const buscarProducto = (e) => {
		e.preventDefault()

		if (busqueda.trim() === '') return

		//redireccionar a /buscar
		Router.push({
			pathname: '/buscar',
			query: { q: busqueda },
		})
	}

	return (
		<>
			<form
				css={css`
					position: relative;
				`}
				onSubmit={buscarProducto}
			>
				<InputText
					type='text'
					placeholder='Buscar...'
					onChange={(e) => guardarBusqueda(e.target.value)}
				/>
				<StyledBiSearch type='submit'></StyledBiSearch>
			</form>
		</>
	)
}

export default Buscar
