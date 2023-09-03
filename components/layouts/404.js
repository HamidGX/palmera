import React from 'react'
import { css } from '@emotion/react'

const styles = {
	container: css`
		margin-top: 5rem;
		text-align: center;
	`,
}

const Error404 = () => {
	return <h1 css={styles.container}>Página no disponible</h1>
}

export default Error404
