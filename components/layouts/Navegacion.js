import React, { useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { FirebaseContext } from '../../firebase'

const Nav = styled.nav`
	a {
		font-size: 1.8rem;
		color: var(--gris2);
		font-family: 'PT Sans', sans-serif;
		text-decoration: none;
		transition: color 0.3s;

		&:hover {
			color: var(--color-primario);
		}

		&.active {
			color: var(--color-primario);
			font-weight: bold;
		}

		&:not(:last-of-type) {
			margin-right: 2rem;
		}
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: row;
		align-items: center;

		a {
			flex-grow: 1; /* Hacer que los elementos 'a' ocupen todo el espacio disponible */
			font-size: 1.8rem;
			margin: 0.5rem 0;
		}
	}
`

const Navegacion = () => {
	const { usuario } = useContext(FirebaseContext)
	const router = useRouter()

	return (
		<Nav>
			<Link href='/'>
				<a className={router.pathname === '/' ? 'active' : ''}>Inicio</a>
			</Link>
			<Link href='/populares'>
				<a className={router.pathname === '/populares' ? 'active' : ''}>
					Populares
				</a>
			</Link>
			{usuario && (
				<Link href='/nuevo-producto'>
					<a className={router.pathname === '/nuevo-producto' ? 'active' : ''}>
						Crear
					</a>
				</Link>
			)}
		</Nav>
	)
}

export default Navegacion
