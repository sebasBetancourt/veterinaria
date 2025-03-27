export const menuPrincipal = ()=>{
    // const cargarAnimales = async () => {
    //     let respuesta = await fetch('animales.json');
    //     let animales = await respuesta.json();  
    //     return animales
    // };
    // const save = async (data)=>{
    //     let DB = await cargarAnimales();
    //     DB.push(data);
    //     localStorage.setItem('data', JSON.stringify(DB));
    //     console.log(DB);
    //     }
    let mensaje, data = [], registro;
    do{
        mensaje = prompt("Ingresa una Opcion:\n1. Registrar una nueva mascota.\n2. Listar todas las mascotas registradas.\n3. Buscar una mascota por nombre.\n4. Actualizar el estado de salud de una mascota.\n5. Eliminar una mascota por nombre.\n6. Salir del programa.")

        switch (mensaje){
            case "1":
                let newAnimal, nombre = prompt("Nombre de la mascota: "), especie = prompt("Ingrese la especie de su mascota (Perro, Gato, etc.)"), edad = prompt("INgrese la edad de la mascota: "), peso = prompt("Ingrese el peso de la mascota: "), estado = prompt("Ingrese el estado de su mascota\n1. Sano\n2. Enfermo\n3. En tratamiento\n:) ");
                const estadoTotal = ()=>{
                    do{
                        switch (estado){
                            case "1":
                                return "Sano";
                            case "2":
                                return "Enfermo"
                            case "3":
                                return "En Tratamiento"
                            default:
                                alert("Ingresa una opcion valida!!")
                            }
                    }while(true)
                }

                newAnimal = {
                    nombre: nombre,
                    especie: especie,
                    edad: edad,
                    peso:peso,
                    estado: estadoTotal()
                }
                data.push(newAnimal)
                break;
            case "2":
                
            case "6":
                console.log("holA");
                break;
            }
        }while(mensaje !== "6")
}