document.addEventListener("DOMContentLoaded", function() {
    // Crear la sección de Aloe Vera
    const aloeSection = document.createElement('section');
    aloeSection.innerHTML = `
        <h1>Aloe Vera</h1>
        <p>
            El Aloe Vera es una planta suculenta de hojas carnosas que pertenece a la familia de las Asphodelaceae. Su estructura botánica es única:
            <br>Hojas: Gruesas, suculentas y dispuestas en rosetas. Cada hoja tiene tres capas:
            <br>Capa externa: Actúa como protección.
            <br>Capa fibrosa: Donde se concentra la aloína, un compuesto amargo con propiedades laxantes.
            <br>Gel interior: La parte gelatinosa rica en nutrientes y con propiedades medicinales.
            <br>El Aloe Vera puede alcanzar hasta 60 cm de altura y crece en climas cálidos y secos. Es extremadamente resistente a la sequía debido a su capacidad para almacenar agua en sus hojas carnosas.
        </p>
        <div class="imgP">
            <img src="../img/aloe1.jpg" alt="aloe">
        </div>
    `;

    // Crear la sección de propiedades medicinales
    const propiedadesSection = document.createElement('section');
    propiedadesSection.id = 'propiedades';
    propiedadesSection.innerHTML = `
        <h1>Propiedades medicinales</h1>
        <p>
            El gel de Aloe Vera es rico en vitaminas, minerales y otros nutrientes esenciales. Contiene:
            <br>Vitaminas: A, B1, B2, B3, B6, B12, C y E.
            <br>Minerales: zinc, calcio, cromo, selenio, hierro, magnesio y cobre.
            <br>Estos componentes son fundamentales para el buen funcionamiento del organismo, contribuyendo a la salud celular, fortaleciendo el sistema inmunológico y favoreciendo el proceso de regeneración celular.
        </p>
    `;

    // Crear la sección de beneficios
    const beneficiosSection = document.createElement('section');
    beneficiosSection.id = 'beneficios';
    beneficiosSection.innerHTML = `
        <h1>Beneficios </h1>
        <div class="propP">
            <ul>
                <li>Hidratante</li> 
                <li>Tonificante</li>
                <li> Emoliente</li>
                <li>Cicatrizante</li>
                <li>Desinfectante</li>
                <li>Antiinflamatorio</li>
                <li>Astringente</li>
                <li>Antialérgico</li>
                <li>Antifúngico</li>
                <li>Colerético</li>
                <li>Laxante</li>
                <li>Purgante</li>
            </ul>
        </div>
    `;

    // Crear la imagen adicional
    const imgSection = document.createElement('div');
    imgSection.classList.add('imgP');
    imgSection.innerHTML = `
        <img src="../img/aloe2.jpg" alt="aloe">
    `;

    // Crear la sección de usos
    const usosSection = document.createElement('section');
    usosSection.id = 'usos';
    usosSection.innerHTML = `
        <h1>Usos</h1>
        <p>
            Hoy en día es un ingrediente principal en muchos productos cosméticos y farmacéuticos. Las diferentes partes de la hoja contienen varios compuestos con efectos distintos y normalmente no se utilizan juntos.
            <br>Muchos son los usos o propiedades que se le da actualmente, desde aumentar la oxigenación de la sangre, aliviar la inflamación y el dolor de artritis, aumenta el rendimiento cardiovascular y la resistencia física o acelerar la recuperación de una lesión, esfuerzo físico o un magnifico antibiótico natural.
            <br>En la medicina moderna, el Aloe Vera es uno de los ingredientes más utilizados en productos farmacéuticos y cosméticos.
            <h3><span class="negrita">Se emplea para el tratamiento de:</span></h3>
            <br>Quemaduras de primer y segundo grado: Su aplicación tópica acelera la cicatrización.
            <br>Psoriasis y eczema: Alivia la inflamación y el picor.
            <br>Tratamiento de heridas: Promueve la regeneración celular, ayudando en la cicatrización rápida de lesiones.
            <br>Estudios recientes han demostrado que el Aloe Vera tiene potencial como un agente complementario en el tratamiento de enfermedades crónicas, como la diabetes y algunas formas de cáncer, gracias a sus propiedades antioxidantes y antiinflamatorias.
            <h3><span class="negrita"> Aquí puedes encontrar un listado bastante completo de los usos o propiedades que se le actualmente. </span></h3>
            <h4><span class="negrita">Para la piel:</span></h4>
            <br>El gel del aloe vera acelera el proceso de cicatrización mejorando la circulación de la sangre alrededor de la herida.
            <br> El Aloe es un excelente antiséptico y limpiador natural, penetra fácilmente en nuestra piel. También es un excelente regenerador celular, tonificante, cicatrizante y penetra muy bien en la piel.
            <br> Además debido a que es un excelente regenerador de la piel ayuda a combatir las arrugas del envejecimiento prematuro de la piel, manchas, etc.
            <br>Puedes usarlo para mitigar las irritaciones en la piel al afeitarte.
            <h4><span class="negrita">Para el pelo:</span></h4>
            <br>El Aloe Vera también es eficaz para el cuidado capilar. Puede utilizarse para:
            <br><span class="negrita">Fortalecer el cabello:</span> al nutrir el cuero cabelludo, contribuye a un crecimiento más fuerte y saludable del cabello.
            <br><span class="negrita">Combatir la caspa:</span> sus propiedades antimicrobianas ayudan a mantener el cuero cabelludo sano y libre de irritaciones.
            <h4><span class="negrita">Los problemas estomacales:</span></h4>
            <br>Otro de los usos populares del Aloe Vera es su capacidad para mejorar la digestión y tratar problemas estomacales.
            <h3><span class="negrita">Consumo en forma de jugo</span></h3>
            <br>Ayuda a:
            <br>Controlar el azúcar en sangre.
            <br>Mejorar la digestión.
            <br>Curar úlceras estomacales.
            <br>Problemas bucales.
            <br>Combatir las varices.
            <h3><span class="negrita">Tópicos comunes en mascotas:</span></h3>
            <br>Aliviar quemaduras solares en perros.
            <br>Tratar irritaciones o dermatitis.
            <br>Curar pequeñas heridas superficiales.
        </p>
    `;

    // Crear la sección de contraindicaciones
    const contraindicacionesSection = document.createElement('section');
    contraindicacionesSection.id = 'contraindicaciones';
    contraindicacionesSection.innerHTML = `
        <h1>Contraindicaciones</h1>
        <p>
            A pesar de los numerosos beneficios del Aloe Vera, su uso debe ser controlado, ya que puede causar efectos secundarios, especialmente si se consume en exceso:
            <br><span class="negrita">Consumo oral:</span> El Aloe Vera contiene aloína, una sustancia que tiene propiedades laxantes. Consumir grandes cantidades puede causar diarrea, calambres abdominales y deshidratación.
            <br><span class="negrita">Reacciones alérgicas:</span> Algunas personas pueden desarrollar alergias tópicas al aplicarlo en la piel, lo que resulta en enrojecimiento o erupciones cutáneas.
            <br><span class="negrita">Interacción con medicamentos:</span> El Aloe Vera puede interactuar con algunos medicamentos, especialmente los destinados a controlar el azúcar en sangre o la presión arterial.
        </p>
    `;

    // Crear la sección de video informativo
    const videoSection = document.createElement('section');
    videoSection.id = 'video';
    videoSection.innerHTML = `
        <h1> Video Informativo</h1>
        <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube.com/embed/P6P1tb80t2k?si=Vjem5JCI8_UXvRh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;

    // Agregar todas las secciones al main
    const main = document.querySelector('main');
    main.appendChild(aloeSection);
    main.appendChild(propiedadesSection);
    main.appendChild(beneficiosSection);
    main.appendChild(imgSection);
    main.appendChild(usosSection);
    main.appendChild(contraindicacionesSection);
    main.appendChild(videoSection);
});
