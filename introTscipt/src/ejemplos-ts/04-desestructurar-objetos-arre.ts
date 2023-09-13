interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{

    autor:string;
    year:number;

}
const reproductor:Reproductor={ 
    volumen:90,
    segundos:66,
    cancion:"mañanitas",
    detalles:{
        autor:'cepillin',
        year:1921,
    }
}
console.log(`El volumen actual es :${reproductor.volumen}`);
console.log(`los segundos son :${reproductor.segundos}`);
console.log(`la cancion actual es :${reproductor.cancion}`);
console.log(`El cantante es :${reproductor.detalles.autor}`);

const{volumen,segundos,cancion,detalles}=reproductor
const{autor,year}=detalles

console.log(`los segundos son :${segundos}`);
console.log(`los segundos son :${volumen}`);
console.log(`los segundos son :${autor}`);