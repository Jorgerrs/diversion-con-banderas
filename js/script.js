document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://restcountries.com/v3.1/all';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById('countries-list');
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));

            data.forEach(pais => {
                const div = document.createElement('div');
                div.classList.add('pais');

                const banderaUrl = pais.flags?.png || pais.flags?.svg || '';

                const bandera = document.createElement('img');
                bandera.src = banderaUrl;
                bandera.classList.add('bandera');

                const nombre = document.createElement('p');
                nombre.textContent = pais.name.common;
                nombre.classList.add('nombre');

                div.appendChild(bandera);
                div.appendChild(nombre);
                contenedor.appendChild(div);
            });
        })
});
