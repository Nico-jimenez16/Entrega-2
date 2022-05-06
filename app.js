Vue.component('my-header', {
    template: /* html */ `
        <div>
            <div class="flex w-full max-h-32 text-white border-b p-4">
                <div class="flex flex-col w-full hidden md:flex items-end justify-center pr-4">
                    <h2 class="text-2xl">{{ titulo }}</h2>
                    <a class="text-xl"><strong></strong>{{ entrega }}</a>
                </div>
            </div>
        </div> 
    
    `,
    props: {
        titulo: {
            type: String,
            required: true,
        },
        entrega: {
            type: String,
            required: true,
        }
    }
});


Vue.component('products', {
    template: /* html */ `    
        <div class="mb-8">
            <h1 class="flex w-full justify-center items-center text-3xl p-4">{{ tabla.title }}</h1>
            <div>
                <table class="w-full table-auto">
                    <thead class="bg-black text-white">
                        <tr>
                            <th v-for="(head, i) of tabla.headtable" :key="i" scope="col">{{head}}</th>
                        </tr>
                    </thead>

                    <!-- Tabla de Productos -->

                    <tbody class="bg-yellow-300 text-2xl">
                        <tr v-for="(producto, index) of tabla.productos" :key="index">
                            <td>{{index}}</td>
                            <td><img class="w-1/5 h-32" :src="producto.url"></td>
                            <td>{{producto.descripcion}}</td>
                            <td>$ {{producto.precio}}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>   
        </div>
    `,
    
    props: {
        tabla:{
            type: Object,
            required: true
        }
    }
});


const app = new Vue ({
    el: '#app',
    data() {
        return {
            titulo: 'Hola , soy Nicolas Jimenez',
            entrega: 'Esta es la Segunda entrega - Componentes con VueJs',
            one: {
                tabla: {
                    title: 'Tabla de datos con Componentes - Hamburguesas',
                    headtable: ['Index', 'Imagen', 'Descripcion', 'Precio'],
                    productos: 
                    [
                        {
                            url: './image/hamburguesa.jpg',
                            descripcion: 'Hamburguesa simple',
                            precio: 100
                        },
                        {
                            url: './image/hamburguesa.jpg',
                            descripcion: 'Hamburguesa doble',
                            precio: 200
                        },
                        {
                            url: './image/hamburguesa.jpg',
                            descripcion: 'Hamburguesa triple',
                            precio: 300
                        }
                    ]
                }
            },
            two: {
                tabla: {
                    title: 'Tabla de datos con Componentes - Usuarios',
                    headtable: ['Index', 'Nombre', 'Apellido', 'Edad'],
                    productos: [
                        {
                            url: './image/audi.jpg',
                            descripcion: 'Audi A4',
                            precio: 58000
                        },
                        {
                            url: './image/audi.jpg',
                            descripcion: 'Audi A5',
                            precio: 68000
                        },
                        {
                            url: './image/audi.jpg',
                            descripcion: 'Audi A5',
                            precio: 78000
                        }
                    ]
                }
            }
        }
    }
    
});