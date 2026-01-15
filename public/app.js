async function pedirDatos() {
    const div = document.getElementById('resultado');
    div.innerText = "Cargando...";

    try {
        // Llamamos al backend que está en el MISMO servidor
        const respuesta = await fetch('/api/info');
        const datos = await respuesta.json();
        
        div.innerText = `Respuesta del Back: ${datos.mensaje} (ID: ${datos.id})`;
    } catch (error) {
        div.innerText = "Error al conectar con el backend";
        console.error(error);
    }
}