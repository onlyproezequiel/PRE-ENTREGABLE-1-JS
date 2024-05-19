const ClientesGasoil = []

function agregarDatosCliente(dni,nombre,apellido){
    const cliente = {
        dni:dni,
        nombre:nombre,
        apellido:apellido
    }
    ClientesGasoil.push(cliente)
}

function eliminarDatosCliente(dni) {
    const index = ClientesGasoil.findIndex(cliente => cliente.dni === dni);
    if (index !== -1) {
        ClientesGasoil.splice(index, 1);
        alert(`Cliente con DNI ${dni} eliminado`);
    } else {
        alert(`Cliente con DNI ${dni} no encontrado`);
    }
}


function modificarDatosCliente(dni, nuevosDatos) {
    const cliente = ClientesGasoil.find(cliente => cliente.dni === dni);
    if (cliente) {
        cliente.nombre = nuevosDatos.nombre || cliente.nombre;
        cliente.apellido = nuevosDatos.apellido || cliente.apellido;
        alert(`Cliente con DNI ${dni} modificado`);
    } else {
        alert(`Cliente con DNI ${dni} no encontrado`);
    }
}

function verDatosClientes(){
    for (const cliente of ClientesGasoil) {
        alert("DNI: " + cliente.dni + " Nombre: " + cliente.nombre + " Apellido: " + cliente.apellido)
    }
}

function verDatosCliente(dni){
    for (const cliente of ClientesGasoil) {
        if(cliente.dni == dni){
            alert("DNI: " + cliente.dni + " Nombre: " + cliente.nombre + " Apellido: " + cliente.apellido)
        }
    }
}

function main(){
    let continuar = confirm("Quiere realizar una accion")
    while(continuar){
        const accion = prompt("ingresar accion (crear,verTodos,ver,modificar,eliminar)")
        if(accion == "crear"){
            const dniIngresado = prompt("Ingrese DNI del nuevo usuario")
            const nombreIngresado = prompt("Ingrese nombre del nuevo usuario")
            const apellidoIngresado = prompt("Ingrese apellido del nuevo usuario")
            agregarDatosCliente(dniIngresado ,nombreIngresado ,apellidoIngresado)
            verDatosCliente(dniIngresado)
        }else if(accion =="verTodos"){
            verDatosClientes()
        }else if(accion == "ver"){
            const dniIngresado = prompt("Ingrese DNI del cliente")
            verDatosCliente(dniIngresado)
        }else if(accion == "eliminar"){
            const dniIngresado = prompt("Ingrese DNI del cliente")
            eliminarDatosCliente(dniIngresado)
        }else if(accion == "modificar"){
            const dniIngresado = prompt("Ingrese DNI del cliente")
            modificarDatosCliente(dniIngresado, nuevosDatos)
        }else{
            alert("accion no valida")
        }
        continuar = confirm("Quiere realizar otra accion")
    }

}

main()