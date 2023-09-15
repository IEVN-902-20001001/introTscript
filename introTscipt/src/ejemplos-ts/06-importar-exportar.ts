import { Producto, calcularIva2 } from "./05-desestructurar-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:8790
    },
    {
        desc:'Telefono2',
        precio:91
    },
    {
        desc:'Telefono3',
        precio:792
    },
    
]
const[total3,iva3]=calcularIva2(carrito);
console.log(`Total : ${total3}`)
console.log(`Iva: ${iva3}`);

