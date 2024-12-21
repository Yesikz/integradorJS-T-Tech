
fetch('./productos.json') 
    .then(response => {
        if (!response.ok) throw new Error('Error al cargar el JSON'); 
        return response.json();
    })
    .then(productos => {
        const section = document.querySelector('#productos');
        const contenedor = section.querySelector('.contenedor');

        // Crear tarjetas productos 
        productos.forEach(producto => {
            const divProducto = document.createElement('div');

            // Crear la tarjeta
            const card = document.createElement('div');
            card.classList.add('card');
            divProducto.appendChild(card);

            // Imagen
            const a = document.createElement('a');
            a.href = producto.link;
            card.appendChild(a);

            const figure = document.createElement('figure');
            a.appendChild(figure);

            const img = document.createElement('img');
            img.src = producto.imgSrc;
            img.alt = producto.altText;
            figure.appendChild(img);

            // Información
            const info = document.createElement('div');
            info.classList.add('info');
            a.appendChild(info);

            const h3 = document.createElement('h3');
            h3.classList.add('planta');
            h3.innerHTML = `${producto.nombre}: <br><br><p class="descP">${producto.descripcion}</p>`;
            info.appendChild(h3);

            const h4 = document.createElement('h4');
            h4.innerHTML = `Presentación: <p class="presP">${producto.presentacion}</p>`;
            info.appendChild(h4);

            const h5 = document.createElement('h5');
            h5.textContent = 'Haga click para más detalles';
            info.appendChild(h5);

            // Botón de agregar
            const pPrecio = document.createElement('p');
            pPrecio.classList.add('precio');
            pPrecio.textContent = `Precio: ${producto.precio}`;
            divProducto.appendChild(pPrecio);

            const btnAgregar = document.createElement('button');
            btnAgregar.classList.add('comprar-btn');
            btnAgregar.textContent = 'Agregar al Carrito';
            btnAgregar.addEventListener('click', () => agregarAlCarrito(producto));
            divProducto.appendChild(btnAgregar);

            contenedor.appendChild(divProducto);
        });
    })
    .catch(error => {
        console.error('Error al cargar productos:', error);
    });


// Agregar un producto 

function agregarAlCarrito(producto) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(item => item.nombre === producto.nombre);

    if (index === -1) {
        const productoConCantidad = { ...producto, cantidad: 1 };
        carrito.push(productoConCantidad);

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: `${producto.nombre} ha sido agregado al carrito.`,
            timer: 1500,
            showConfirmButton: false
        });
    } else {
        carrito[index].cantidad += 1;

        Swal.fire({
            icon: 'info',
            title: 'Cantidad actualizada',
            text: `Se ha incrementado la cantidad de ${producto.nombre}.`,
            timer: 1500,
            showConfirmButton: false
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarContadorCarrito();
}

// Actualizar el contador 
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = document.querySelector('.carrito-contador');
    const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    if (contador) contador.textContent = totalCantidad;
}


// Inicializar el contador
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
});


// Eliminar producto
function eliminarProductoCarrito(nombre) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: `¿Quieres eliminar ${nombre} del carrito?`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, eliminar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
    }).then((result) => {
        if (result.isConfirmed) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito = carrito.filter(producto => producto.nombre !== nombre);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            Swal.fire({
                icon: 'success',
                title: 'Producto eliminado',
                text: `${nombre} se ha eliminado del carrito.`,
                timer: 1500,
                showConfirmButton: false
            });
            actualizarContadorCarrito();
            mostrarCarrito();
        }
    });
}

// Mostrar el carrito
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.querySelector('.carrito-productos');
    const totalPrecio = document.getElementById('total');
    const mensajeCarritoVacio = document.querySelector('.carrito-vacio'); 
    contenedorCarrito.innerHTML = ''; 

    if (carrito.length === 0) {
        // Mensaje carrito vacío
        mensajeCarritoVacio.style.display = 'block';
        totalPrecio.textContent = '$0.00'; 
        return; 
    } else {
        mensajeCarritoVacio.style.display = 'none';
    }

    let total = 0;
    carrito.forEach(producto => {
        const divProductoCarrito = document.createElement('div');
        divProductoCarrito.classList.add('carrito-producto');

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        divProductoCarrito.appendChild(nombre);

        const cantidad = document.createElement('p');
        cantidad.textContent = `Cantidad: ${producto.cantidad}`;
        divProductoCarrito.appendChild(cantidad);

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        divProductoCarrito.appendChild(precio);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => eliminarProductoCarrito(producto.nombre));
        divProductoCarrito.appendChild(eliminarBtn);

        contenedorCarrito.appendChild(divProductoCarrito);

        // Total 
        total += parseFloat(producto.precio.replace('$', '').replace(',', '')) * producto.cantidad;
    });

    totalPrecio.textContent = `$${total.toFixed(2)}`;
}

// Vaciar el carrito
const botonVaciar = document.querySelector('.carrito-acciones-vaciar');
botonVaciar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Está seguro?',
        text: "Esto vaciará todo el contenido del carrito.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('carrito'); 
            actualizarContadorCarrito();
            mostrarCarrito(); 
            Swal.fire(
                'Vaciado!',
                'El carrito ahora esta vacio.',
                'success'
            );
        }
    });
});

// Botón para ir al formulario
const botonComprar = document.querySelector('.carrito-acciones-comprar');
botonComprar.addEventListener('click', () => {
    window.location.href = 'formulario.html'; 
});

// Contador y mostrar carrito 
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
    mostrarCarrito();
});
