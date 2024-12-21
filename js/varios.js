document.addEventListener("DOMContentLoaded", function() {
    // Formulario de contacto
    const formularioSection = document.createElement('section');
    formularioSection.id = 'formulario';
    formularioSection.classList.add('form');
    formularioSection.innerHTML = `
        <h2>Formulario de Contacto</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Enviar</button>
        </form>
    `;

    //  Reseñas
    const resenasSection = document.createElement('section');
    resenasSection.id = 'reseñas';
    resenasSection.innerHTML = `
        <h2>Reseñas</h2>
        <div class="review1">
            <div class="review">
                <p>"Excelente producto!" - Cliente 1</p>
            </div>
            <div class="review">
                <p>"Muy satisfecho con la compra." - Cliente 2</p>
            </div>
            <div class="review">
                <p>"Recomendado." - Cliente 3</p>
            </div>
        </div>
    `;

    // Video
    const videoSection = document.createElement('section');
    videoSection.id = 'video';
    videoSection.innerHTML = `
        <h2>Video sobre Plantas Medicinales</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cBg4z39yvtI?si=E75YFwNz2HcnFqPH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;

    // Agregar todas
    const main = document.querySelector('main');
    main.appendChild(formularioSection);
    main.appendChild(resenasSection);
    main.appendChild(videoSection);
});

