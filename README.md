# Palmera

Este es un proyecto "Palmera", una aplicación web que permite a los usuarios compartir sus experiencias en lugares que han visitado, como restaurantes, tiendas y más. Los usuarios pueden publicar reseñas y opiniones sobre estos lugares, proporcionando información útil para otros usuarios interesados en explorar nuevas opciones.

## Descripción

Este proyecto utiliza Next.js y Firebase, junto con otras dependencias, para crear una aplicación web.

## Requisitos

Para desarrollar y ejecutar esta aplicación, asegúrate de tener instalados los siguientes requisitos:

1. **Node.js**: La plataforma de ejecución de JavaScript en la que se basa React. Puedes descargar Node.js desde [nodejs.org](https://nodejs.org/).

2. **Yarn**: Un administrador de paquetes alternativo a npm que puede ser útil para gestionar las dependencias de tu proyecto. Puedes obtener Yarn en [yarnpkg.com](https://classic.yarnpkg.com/en/docs/install).

## Instrucciones de instalación

Para comenzar a trabajar en este proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.

## Instrucciones de uso

Este proyecto utiliza scripts npm para la gestión de tareas comunes. A continuación, se muestran los comandos disponibles:

- `yarn install`: Inicia la aplicación en modo de desarrollo.
- `yarn dev`: Inicia la aplicación en modo de desarrollo.
- `yarn build`: Compila la aplicación para producción.
- `yarn start`: Inicia la aplicación en modo de producción.

## Dependencias

Estas son las principales dependencias utilizadas en este proyecto:

- `@babel/core`: 7.17.0
- `@emotion/babel-preset-css-prop`: 11.2.0
- `@emotion/core`: 11.0.0
- `@emotion/react`: 11.7.1
- `@emotion/styled`: 11.6.0
- `babel-plugin-emotion`: 11.0.0
- `date-fns`: 2.9.0
- `firebase`: 8.10.1
- `firebase-admin`: 10.3.0
- `next`: 12.0.10
- `react`: 17.0.2
- `react-dom`: 17.0.2
- `react-firebase-file-uploader`: 2.4.3

## Variables de entorno

Asegúrate de configurar las siguientes variables de entorno en tu proyecto. Estas variables son esenciales para que Firebase funcione correctamente en tu aplicación.

- `NEXT_PUBLIC_FIREBASE_API_KEY`: La clave API de Firebase que se utiliza para autenticar la aplicación. Ejemplo: `your-api-key`

- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: El dominio de autenticación de Firebase. Ejemplo: `your-app.firebaseapp.com`

- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: El ID de proyecto de Firebase. Ejemplo: `your-project-id`

- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: El bucket de almacenamiento de Firebase. Ejemplo: `your-storage-bucket.appspot.com`

- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: El ID del remitente de mensajería de Firebase. Ejemplo: `1234567890`

- `NEXT_PUBLIC_FIREBASE_APP_ID`: El ID de la aplicación de Firebase. Ejemplo: `1:1234567890:web:abcdef123456`

## Configuración de variables de entorno

Para utilizar estas variables de entorno en tu aplicación, puedes acceder al código de JavaScript de la siguiente manera:

```javascript
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
```

## Licencia

Este proyecto se encuentra bajo la [Licencia MIT](LICENSE).

### Licencia MIT

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para tratar el Software sin restricciones, incluyendo sin limitación, los derechos de uso, copia, modificación, fusión, publicación, distribución, sublicencia y/o venta de copias del Software y para permitir a las personas a las que se les proporcione el Software.

## Recomendaciones

- Este proyecto fue desarrollado en 2020, razón por la cual se utilizan las siguientes tecnologías:

  - Style Components
  - Firebase 8
  - Next 12

- Por otro lado, es importante tener en cuenta que no se recomienda actualizar dependencias como Firebase o React ya que esto puede generar incompatibilidades en el proyecto.

- Se sugiere utilizar Yarn para gestionar las dependencias de manera más facil.

## Vista previa

<div align="center">
  <strong>Desktop:</strong>
  <br>
  <img align="center" src="https://i.imgur.com/YQm9jqV.jpg">
  <br>
  <img align="center" src="https://i.imgur.com/fvkIUy9.jpg">
</div>
