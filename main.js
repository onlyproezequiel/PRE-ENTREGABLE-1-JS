const clientesGasoil = []

function agregarDatosCliente(dni,nombre,apellido){
    const cliente = {
        dni:dni,
        nombre:nombre,
        apellido:apellido
    }
    clientesGasoil.push(cliente)
}

function eliminarDatosCliente(){
    console.log("Datos del cliente eliminados!")
}

function modificarDatosCliente(){
    console.log("Datos del cliente modificados!")

}

function verDatosCliente(){
    console.log("Datos del cliente")
}

agregarDatosCliente(1,"Gonzalo","Ruffinati")
agregarDatosCliente(2,"Franco","Abate")