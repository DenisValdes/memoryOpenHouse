import imageMarce from './comodin.jfif';

function shuffle(Cartas) {
    Cartas.sort(() => Math.random() - 0.5);
}

const Cartas = [
    {
        id: 1,
        foto: "",
        texto:"Geogebra",
        idPar: 1,
        estado: "oculta"
    },
    {
        id: 2,
        foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Created_with_GeoGebra-logo.svg/1024px-Created_with_GeoGebra-logo.svg.png",
        texto:"",
        idPar: 1,
        estado:"oculta"
    },
    {
        id: 3,
        foto:"",
        texto:"Triangulo isosceles",
        idPar: 2,
        estado:"oculta"
    },
    {
        id: 4,
        foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Triangle.Isosceles.svg/1200px-Triangle.Isosceles.svg.png",
        texto:"",
        idPar: 2,
        estado:"oculta" 
    },
    {
        id: 5,
        foto:"",
        texto:"Triángulo Equilátero",
        idPar: 3,
        estado:"oculta"
    },
    {
        id: 6,
        foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Tri%C3%A1ngulo_para_tabla_01.svg/1200px-Tri%C3%A1ngulo_para_tabla_01.svg.png",
        texto:"",
        idPar: 3,
        estado:"oculta" 
    },
    {
        id: 7,
        foto:"",
        texto:"Triángulo Escaleno",
        idPar: 4,
        estado:"oculta" 
    },
    {
        id: 8,
        foto:"https://images.vexels.com/media/users/3/158761/isolated/preview/9487b0ca0a4d609861329a69c021f34e-silueta-de-tri--ngulo-escaleno-by-vexels.png",
        texto:"",
        idPar: 4,
        estado:"oculta"
    },
    {
        id: 9,
        foto:"",
        texto:"Arco Capaz",
        idPar: 5,
        estado:"oculta"
    },
    {
        id: 10,
        foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/ArcoCapaz001.svg/1200px-ArcoCapaz001.svg.png",
        texto:"",
        idPar: 5,
        estado:"oculta"
    },{
        id: 11,
        foto:"",
        texto:"Homotecia",
        idPar: 6,
        estado:"oculta"
    },
    {
        id: 12,
        foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Homothetic_transformation.svg/300px-Homothetic_transformation.svg.png",
        texto:"",
        idPar: 6,
        estado:"oculta"
    },
    {
        id: 13,
        foto:"",
        texto:"Dodecaedro",
        idPar: 7,
        estado:"oculta"
    },
    {
        id: 14,
        foto:"https://upload.wikimedia.org/wikipedia/commons/d/d0/Compound_of_dodecahedron_and_icosahedron.png",
        texto:"",
        idPar: 7,
        estado:"oculta"
    },
    {
        id: 15,
        foto:"",
        texto:"Teorema de Pitágoras",
        idPar: 8,
        estado:"oculta"
    },
    {
        id: 16,
        foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Pythagorean_right_angle.svg/1200px-Pythagorean_right_angle.svg.png",
        texto:"",
        idPar: 8,
        estado:"oculta"
    },
    {
        id: 17,
        foto:"",
        texto:"Pitágoras",
        idPar: 9,
        estado:"oculta"
    },
    {
        id: 18,
        foto:"https://www.meteorologiaenred.com/wp-content/uploads/2019/04/Pit%C3%A1goras.jpg",
        texto:"",
        idPar: 9,
        estado:"oculta"    
    },
    {
        id: 19,
        foto:"",
        texto:"Mediatriz",
        idPar: 10,
        estado:"oculta"    
    },
    {
        id: 20,
        foto:"https://i2.wp.com/roberprof.org/wp-content/uploads/2018/06/mediatriz.png?resize=257%2C300",
        texto:"",
        idPar: 10,
        estado:"oculta"   
    },
    {
        id: 21,
        foto:"",
        texto:"Bisectriz",
        idPar: 11,
        estado:"oculta"
    },
    {
        id: 22,
        foto:"https://www.aulafacil.com/uploads/cursos/341/editor/bisectriz.es.png",
        texto:"",
        idPar: 11,
        estado:"oculta"
    },
    {
        id: 23,
        foto:"",
        texto:"Ortocentro",
        idPar: 12,
        estado:"oculta"
    },
    {
        id: 24,
        foto:"https://drive.google.com/open?id=1O49SSmCUkS28WslTIJmUAFirlIyM1cGj",
        texto:"",
        idPar: 12,
        estado:"oculta"
    },
    {
        id: 25,
        foto:"",
        texto:"Paralelogramo tipo",
        idPar: 13,
        estado:"oculta" 
    },
    {
        id: 26,
        foto:"https://www.stickpng.com/assets/images/58afda8c829958a978a4a687.png",
        texto:"",
        idPar: 13,
        estado:"oculta"  
    },
    {
        id: 27,
        foto:"",
        texto:"Tangente",
        idPar: 14,
        estado:"oculta"  
    },
    {
        id: 28,
        foto:"https://img2.freepng.es/20180423/tzw/kisspng-circle-line-tangent-point-angle-suo-5ade19e2426d89.6014108515245050582721.jpg",
        texto:"",
        idPar: 14,
        estado:"oculta"
    },
    {
        id: 29,
        foto:"",
        texto:"HALLOWEEN POINT",
        idPar: 15,
        estado:"oculta"  
    },
    {
        id: 30,
        foto: imageMarce,
        texto:"",
        idPar: 15,
        estado:"oculta"
    }, 
    {
        id: 31,
        foto:"",
        texto:"HALLOWEEN POINT",
        idPar: 16,
        estado:"oculta"  
    },
    {
        id: 32,
        foto:"https://drive.google.com/open?id=19iKTrsqn8YNJhG5Vf405be1saBSkDXQa",
        texto:"",
        idPar: 16,
        estado:"oculta"
    }
];

shuffle(Cartas);

function getCartas() {
    return new Promise((resolve, reject) => {
      resolve(Cartas)
    })
} 

export {
    getCartas
}
