import React, { useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'
import { Boton, BotonRojo } from '../ui/Boton'
import { FirebaseContext } from '../../firebase'
import Image from 'next/image'

const ContenedorHeader = styled.div`
	max-width: 1200px;
	width: 95%;
	margin: 0 auto;
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 768px) {
		min-width: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`

const Logo = styled.a`
	margin-right: 1rem;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 1200px) {
		min-width: 80px;
	}
`
const Header = () => {
	const { usuario, firebase } = useContext(FirebaseContext)

	return (
		<>
			<header
				css={css`
					border-bottom: 2px solid var(--gris3);
					padding: 1rem 0;
					background-color: #fff;
				`}
			>
				<ContenedorHeader>
					<div
						css={css`
							display: flex;
							align-items: center;
							justify-content: space-between;
							flex-direction: row;
						`}
					>
						<Link href='/' passHref>
							<Logo>
								<Image
									src='/static/img/palmera2.svg'
									alt='Landscape picture'
									width={60}
									height={60}
								/>
							</Logo>
						</Link>
						<Buscar />
					</div>
					<div>
						<Navegacion />
					</div>

					<div
						css={css`
							display: flex;
							align-items: center;
						`}
					>
						{usuario ? (
							<>
								<p
									css={css`
										margin-right: 2rem;
									`}
								>
									Hola: {usuario.displayName}
								</p>
								<BotonRojo
									bgColor='true'
									onClick={() => firebase.cerrarSesion()}
									type='button'
								>
									Cerrar sesión
								</BotonRojo>
							</>
						) : (
							<>
								<Link href='/login' passHref>
									<Boton bgColor='true'>Login</Boton>
								</Link>

								<Link href='/crear-cuenta' passHref>
									<BotonRojo>Crear cuenta</BotonRojo>
								</Link>
							</>
						)}
					</div>
				</ContenedorHeader>
			</header>
		</>
	)
}

export default Header
