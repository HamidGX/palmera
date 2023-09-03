export default function validarCrearProducto(valores) {
    let errores = {};
   
    //Validar nombre
    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }

    //Validar ubicacióm
    if(!valores.ubicacion) {
        errores.ubicacion = "La ubicación es obligatorio"
    }

    //Validar url
    if(!valores.url) {
        errores.url = "La url es obligatorio"
    }else if ( !/^(ftp|http|https):\/\/[^ "]+$/i.test(valores.url) ) {
        errores.url = "La url no valida"
    }

    if(!valores.descripcion) {
        errores.descripcion = "Agrega la descripción"
    }

    return errores;
}



