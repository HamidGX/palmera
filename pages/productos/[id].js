import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'
import { FirebaseContext } from '../../firebase'
import Layout from '../../components/layouts/Layout'
import Error404 from '../../components/layouts/404'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Campo, InputSubmit } from '../../components/ui/Formulario'
import { BotonRojo, Boton } from '../../components/ui/Boton'
import { MdPlace } from 'react-icons/md'

const ContenedorProducto = styled.div`
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 2fr 1fr;
		column-gap: 2rem;
	}
`
const CreadorProducto = styled.p`
	padding: 0.5rem 2rem;
	background-color: #da552f;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	display: inline-block;
	text-align: center;
`

const Producto = () => {
	// state del componente
	const [producto, guardarProducto] = useState({})
	const [error, guardarError] = useState(false)
	const [comentario, guardarComentario] = useState({})
	const [consultarDB, guardarConsultarDB] = useState(true)

	// Routing para obtener el id actual
	const router = useRouter()
	const {
		query: { id },
	} = router

	// context de firebase
	const { firebase, usuario } = useContext(FirebaseContext)

	useEffect(() => {
		if (id && consultarDB) {
			const obtenerProducto = async () => {
				const productoQuery = await firebase.db.collection('productos').doc(id)
				const producto = await productoQuery.get()
				if (producto.exists) {
					guardarProducto(producto.data())
					guardarConsultarDB(false)
				} else {
					guardarError(true)
					guardarConsultarDB(false)
				}
			}
			obtenerProducto()
		}
	}, [id])

	if (Object.keys(producto).length === 0 && !error) return 'Cargando...'

	const {
		comentarios,
		creado,
		descripcion,
		ubicacion,
		nombre,
		url,
		urlimagen,
		votos,
		creador,
		haVotado,
	} = producto

	// Administrar y validar los votos
	const votarProducto = async () => {
		if (!usuario) {
			return router.push('/login')
		}

		// Obtener el documento del producto
		const productoDoc = firebase.db.collection('productos').doc(id)
		const productoSnapshot = await productoDoc.get()

		if (!productoSnapshot.exists) {
			// El producto no existe, maneja el caso en consecuencia
			return
		}

		const productoData = productoSnapshot.data()

		// Verificar si el usuario actual ha votado
		if (productoData.haVotado.includes(usuario.uid)) {
			// El usuario ya ha votado, no permitir otro voto
			console.log('El usuario ya ha votado')
			return
		}

		// Obtener el número actual de votos
		const votosActuales = productoData.votos

		// Incrementar el número de votos
		const nuevoTotal = votosActuales + 1

		// Guardar el ID del usuario que ha votado
		const nuevoHaVotado = [...productoData.haVotado, usuario.uid]

		// Actualizar en la BD
		await productoDoc.update({
			votos: nuevoTotal,
			haVotado: nuevoHaVotado,
		})

		// Actualizar el estado local (si es necesario)
		guardarProducto({
			...productoData, // Puedes mantener los otros campos del producto sin cambios
			votos: nuevoTotal,
		})

		guardarConsultarDB(true) // Hay un nuevo voto, por lo tanto, consultar la BD
	}

	// Funciones para crear comentarios
	const comentarioChange = (e) => {
		guardarComentario({
			...comentario,
			[e.target.name]: e.target.value,
		})
	}

	// Identifica si el comentario es del creador del producto
	const esCreador = (id) => {
		if (creador.id == id) {
			return true
		}
	}

	const agregarComentario = (e) => {
		e.preventDefault()

		if (!usuario) {
			return router.push('/login')
		}

		// información extra al comentario
		comentario.usuarioId = usuario.uid
		comentario.usuarioNombre = usuario.displayName

		// Tomar copia de comentarios y agregarlos al arreglo
		const nuevosComentarios = [...comentarios, comentario]

		// Actualizar la BD
		firebase.db.collection('productos').doc(id).update({
			comentarios: nuevosComentarios,
		})

		// Actualizar el state
		guardarProducto({
			...producto,
			comentarios: nuevosComentarios,
		})

		guardarConsultarDB(true) // hay un COMENTARIO, por lo tanto consultar a la BD
	}

	// función que revisa que el creador del producto sea el mismo que esta autenticado
	const puedeBorrar = () => {
		if (!usuario) return false

		if (creador.id === usuario.uid) {
			return true
		}
	}

	// elimina un producto de la bd
	const eliminarProducto = async () => {
		if (!usuario) {
			return router.push('/login')
		}

		if (creador.id !== usuario.uid) {
			return router.push('/')
		}

		try {
			await firebase.db.collection('productos').doc(id).delete()
			router.push('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Layout>
			<>
				{error ? (
					<Error404 />
				) : (
					<div className='contenedor'>
						<h1
							css={css`
								text-align: center;
								margin: 3rem;
							`}
						>
							{nombre}{' '}
						</h1>

						<ContenedorProducto>
							<div
								css={css`
									background-color: white;
									border-radius: 0.5rem;
									box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
									padding: 10px;
								`}
							>
								<h2>Acerca de la publicación</h2>
								<p>
									Publicado hace:{' '}
									{formatDistanceToNow(new Date(creado), { locale: es })}{' '}
								</p>
								<p>Publicación creada por: {creador.nombre} </p>
								<img
									css={css`
										width: 100%;
										height: auto;
										object-fit: cover;

										/* Establece la transición para el efecto de zoom */
										transition: transform 0.3s ease;

										/* Agrega un cursor de lupa al pasar el mouse */
										cursor: pointer;

										/* Aplica el efecto de zoom al hacer clic */
										&:hover {
											transform: scale(1.1);
										}
									`}
									src={urlimagen}
								/>
								<h2>Descripción de {nombre}</h2>
								<p>{descripcion}</p>

								{usuario && (
									<>
										<h2>Agrega tu comentario</h2>
										<form onSubmit={agregarComentario}>
											<Campo>
												<input
													type='text'
													name='mensaje'
													onChange={comentarioChange}
												/>
											</Campo>
											<InputSubmit type='submit' value='Agregar Comentario' />
										</form>
									</>
								)}

								<h2
									css={css`
										margin: 2rem 0;
									`}
								>
									Comentarios
								</h2>

								{comentarios.length === 0 ? (
									'Aún no hay comentarios'
								) : (
									<ul>
										{comentarios.map((comentario, i) => (
											<li
												key={`${comentario.usuarioId}-${i}`}
												css={css`
													border: 1px solid #e1e1e1;
													padding: 2rem;
												`}
											>
												<p>{comentario.mensaje}</p>
												<p>
													Escrito por:
													<span
														css={css`
															font-weight: bold;
														`}
													>
														{''} {comentario.usuarioNombre}
													</span>
												</p>
												{esCreador(comentario.usuarioId) && (
													<CreadorProducto>Es Creador</CreadorProducto>
												)}
											</li>
										))}
									</ul>
								)}
							</div>

							<div>
								<aside
									css={css`
										flex: 1;
										width: 100%;
										height: auto;
										padding: 0.5rem;
										margin: 0 auto auto auto;
										background-color: white;
										border-radius: 0.5rem;
										box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
										text-align: center;
										font-weight: bold;

										> * {
											margin-bottom: 1rem;
										}

										> div {
											margin-top: 3rem;
										}

										p {
											text-align: center;
										}

										@media (max-width: 768px) {
											/* Estilos para pantallas más pequeñas */
											margin-top: 1rem;
											width: auto;
											padding: 10px;
										}
									`}
								>
									<Boton target='_blank' bgColor='true' href={url}>
										Visitar URL
									</Boton>

									<div>
										<p>{votos} Votos</p>
										{usuario && <Boton onClick={votarProducto}>Votar</Boton>}
									</div>
								</aside>

								<aside
									css={css`
										flex: 1;
										width: 100%;
										height: auto;
										padding: 0.5rem;
										margin: 10px auto auto auto;
										background-color: white;
										border-radius: 0.5rem;
										box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
										text-align: center;

										> div {
											margin-top: 1rem;
										}

										p {
											text-align: center;
										}

										@media (max-width: 768px) {
											/* Estilos para pantallas más pequeñas */
											margin-top: 1rem;
											width: auto;
											padding: 10px;
										}
									`}
								>
									<MdPlace style={{ fontSize: '60px', color: 'red' }} />

									<div>
										<p>{ubicacion}</p>
										{usuario && <Boton onClick={votarProducto}>Votar</Boton>}
									</div>
								</aside>
							</div>
						</ContenedorProducto>

						{puedeBorrar() && (
							<Boton onClick={eliminarProducto}>Eliminar Producto</Boton>
						)}
					</div>
				)}
			</>
		</Layout>
	)
}

export default Producto
