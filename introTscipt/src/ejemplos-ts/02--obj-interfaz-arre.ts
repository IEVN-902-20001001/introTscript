//objetos

interface Alumno{
    matricula?:number;
    nombre:string;
    email:string
    
    }
    
    const alumno:Alumno={
        nombre:'miguel',
        email:'mike13@gmail.com',
    };
    
    console.log(alumno.nombre);
    
    console.table(alumno);
    
    let mascota=['perro,gato,perico']
    mascota[1]='perico verde';
    mascota.push('gato dos');
    console.table(mascota);
    
    let tem:(string|number)[]=[]
    tem.push('RCR');
    tem.push(32);