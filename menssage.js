export const menuPrincipal = () => {
    let mensaje, data = [], registro;

    const registroConRetraso = (newAnimal, callback) => {
        setTimeout(() => {
            data.push(newAnimal);
            callback(newAnimal);
        }, 2000); 
    };

    const busquedaConRetraso = (search, callback) => {
        setTimeout(() => {
            let registro = data.find(animal => animal.nombre === search);
            callback(registro);
        }, 1500);
    };

    const actualizacionConRetraso = (searchName, newEstado, callback) => {
        setTimeout(() => {
            let registro = data.find(animal => animal.nombre === searchName);
            if (registro) {
                registro.estado = newEstado;
                callback(registro);
            } else {
                callback(null);
            }
        }, 2500);
    };

    const estadoTotal = (opcion) => {
        switch (opcion) {
            case "1":
                return "Sano";
            case "2":
                return "Enfermo";
            case "3":
                return "En Tratamiento";
            default:
                alert("Ingresa una opción válida!!");
                return null;
        }
    };

    const mostrarMascotas = () => {
        if (data.length === 0) {
            alert("No hay mascotas registradas.");
        } else {
            let lista = "Mascotas Registradas:\n";
            data.forEach((animal, i) => {
                lista += `${i + 1}. Nombre: ${animal.nombre}, Especie: ${animal.especie}, Edad: ${animal.edad}, Peso: ${animal.peso}, Estado: ${animal.estado}\n`;
            });
            alert(lista);
        }
    };

    do {
        mensaje = prompt("Ingresa una Opcion:\n1. Registrar una nueva mascota.\n2. Listar todas las mascotas registradas.\n3. Buscar una mascota por nombre.\n4. Actualizar el estado de salud de una mascota.\n5. Eliminar una mascota por nombre.\n6. Salir del programa.");

        switch (mensaje) {
            case "1":
                let newAnimal, nombre = prompt("Nombre de la mascota: "), especie = prompt("Ingrese la especie de su mascota (Perro, Gato, etc.)"), edad = prompt("Ingrese la edad de la mascota: "), peso = prompt("Ingrese el peso de la mascota: "), estado = prompt("Ingrese el estado de su mascota\n1. Sano\n2. Enfermo\n3. En tratamiento\n:) ");
                newAnimal = {
                    nombre: nombre,
                    especie: especie,
                    edad: edad,
                    peso: peso,
                    estado: estadoTotal(estado)
                };

                if (newAnimal.estado) {
                    alert("Registrando...");
                    registroConRetraso(newAnimal, (animal) => {
                        alert(`Se ha registrado la mascota con éxito! \nNombre: ${animal.nombre}, Estado: ${animal.estado}`);
                        mostrarMascotas(); // Mostrar la lista de mascotas después de registrar
                    });
                } else {
                    alert("No se ha registrado la mascota.");
                }
                break;

            case "2":
                mostrarMascotas(); // Muestra las mascotas registradas
                break;

            case "3":
                let search = prompt("Ingrese el nombre de la mascota a buscar: ");
                busquedaConRetraso(search, (registro) => {
                    if (registro) {
                        alert(`Nombre: ${registro.nombre}, Especie: ${registro.especie}, Edad: ${registro.edad}, Peso: ${registro.peso}, Estado: ${registro.estado}`);
                    } else {
                        alert("No se encontró la mascota.");
                    }
                });
                break;

            case "4":
                let searchName = prompt("Ingrese el nombre de la mascota a actualizar: ");
                let newEstado = prompt("Ingrese el nuevo estado de la mascota\n1. Sano\n2. Enfermo\n3. En tratamiento\n:) ");
                let estadoActualizado = estadoTotal(newEstado);

                if (estadoActualizado) {
                    actualizacionConRetraso(searchName, estadoActualizado, (registro) => {
                        if (registro) {
                            alert(`El estado de la mascota ${registro.nombre} ha sido actualizado a ${registro.estado}.`);
                        } else {
                            alert("No se encontró la mascota.");
                        }
                    });
                }
                break;

            case "5":
                let deleteName = prompt("Ingrese el nombre de la mascota a eliminar: ");
                let contador = data.findIndex(animal => animal.nombre === deleteName);
                if (contador !== -1) {
                    data.splice(contador, 1);
                    alert("Mascota eliminada.");
                } else {
                    alert("No se encontró la mascota.");
                }
                break;

            case "6":
                console.log("Saliste...");
                break;

            default:
                alert("Ingresa una opción válida!!");
        }
    } while (mensaje !== "6");
};
