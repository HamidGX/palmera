import Layout from '../components/layouts/Layout'
import styled from '@emotion/styled'
import DetallesProducto from '../components/layouts/DetallesProducto'
import useProductos from '../hooks/useProductos'

const Heading = styled.h1`
	color: blue;
`

const Populares = () => {
	const { productos } = useProductos('votos')

	return (
		<div>
			<Layout>
				<div className='listado-productos'>
					<div className='contenedor '>
						<ul className='bg-white'>
							{productos.map((producto) => (
								<DetallesProducto key={producto.id} producto={producto} />
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</div>
	)
}

export default Populares
