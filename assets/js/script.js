
/*Arreglo para Venta*/

const propiedad_ventas = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/propiedad-venta1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 2,
        costo: 5000,
        smoke: false,
        pets: true

    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/propiedad-venta2.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/propiedad-venta3.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '7567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 3500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/propiedad-venta3.jpg',
        descripcion: 'Este apartamento de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '123 Luxury Lane, Summit Peaks, CA 45678',
        habitaciones: 3,
        banos: 3,
        costo: 3500,
        smoke: true,
        pets: true
    }

];

/*Arreglo para Alquiler*/

const propiedad_alquiler = [

    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/propiedad-alquiler1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 2,
        banos: 1,
        costo: 750,
        smoke: false,
        pets: false

    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/propiedad-alquiler2.jpg',
        descripcion: 'Este apartamento de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '123 Luxury Lane, Summit Peaks, CA 45678',
        habitaciones: 2,
        banos: 1,
        costo: 350,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/propiedad-alquiler3.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '7567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 4,
        banos: 3,
        costo: 950,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/propiedad-alquiler4.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 6,
        banos: 12,
        costo: 1200,
        smoke: false,
        pets: false
    }
];

/*********************************************************************************************************************************/


const currentURL = window.location.href;
let html = "";
const listaVenta = document.querySelector(".venta .row");
const listaAlquiler = document.querySelector(".alquiler .row");

if(currentURL.includes("index.html")){
    let contador = 0;
    if(listaVenta){
        for(let i of propiedad_ventas){
            if(contador < 3){
                template(i);
                contador++
            }
            else{
                break
            }
        }
        listaVenta.innerHTML = html;
        html = "";
        contador = "";
    }

    if (listaAlquiler) {
        for (let i of propiedad_alquiler) 
        {
          if (contador < 3) {
            template(i);
            contador++;
          } 
          else 
          {
            break;
          }
        }
        listaAlquiler.innerHTML = html;
        html = "";
        contador=""
      }
    }
    
    else {
      if (listaVenta) {
        for (let i of propiedad_ventas) {
          template(i);
        }
        listaVenta.innerHTML = html;
        html = "";
      }
    
      if (listaAlquiler) {
        for (let i of propiedad_alquiler) {
          template(i);
        }
        listaAlquiler.innerHTML = html;
        html = "";
      }
    }



function template(i){
    html += `
    <div class="col-md-4 mb-4 ps-2 pe-2">
    <div class="card">
        <img src=${i.src}
            class="card-img-top" alt="Imagen del inmueble" />
        <div class="card-body">
            <h5 class="card-title">
                ${i.nombre}
            </h5>
            <p class="card-text">
                ${i.descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${i.ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${i.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${i.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${i.costo}</p>
            <p class="${i.smoke ? 'text-success' : 'text-danger'}">
                <i class="fas ${i.smoke ? 'fa-smoking' : 'fa-smoking-ban'}">
                </i>
                ${i.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${i.pets ? 'text-success' : 'text-danger'}">
                <i class="fas fa-paw"></i>
                ${i.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
            </div>
            </div>
            </div>
    `;
}


