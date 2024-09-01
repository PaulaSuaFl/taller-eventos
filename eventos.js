document.getElementById("saludar").addEventListener("click",()=>{alert("Hola, Soy el div")})
    const boton = document.getElementById('saludar');
    const div = document.querySelector('.divboton');
    

    boton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        alert('Botón clickeado');
    });

    div.addEventListener('click', () => {
        alert('Div clickeado');
    });
