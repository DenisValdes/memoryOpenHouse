
function getCartas() {
    return new Promise((resolve, reject) => {
      resolve(Cartas)
    })
} 

const Cartas = [
    {
        id: 1,
        foto: null,
        texto:"Geogebra",
        idPar: 1,
        estado: "oculta"
    },
    {
        id: 2,
        foto:"https://drive.google.com/open?id=10k3Ko64Pk6ESEU1ugaxXJeunlKLFjDJd",
        texto:null,
        idPar: 1,
        estado:"oculta"
    },
    {
        id: 3,
        foto:null,
        texto:"Triangulo isosceles",
        idPar: 2,
        estado:"oculta"
    },
    {
        id: 4,
        foto:"https://drive.google.com/open?id=1ptOVrBJiFIlVLpbS9JLC-9c24kwratzj",
        texto:null,
        idPar: 2,
        estado:"oculta" 
    },
    {
        id: 5,
        foto:null,
        texto:"Triángulo Equilátero",
        idPar: 3,
        estado:"oculta"
    },
    {
        id: 6,
        foto:"https://drive.google.com/open?id=1HMv_gsk2Ndua_HZSrq1f3RSrZRCt0Wnq",
        texto:null,
        idPar: 3,
        estado:"oculta" 
    },
    {
        id: 7,
        foto:null,
        texto:"Triángulo Escaleno",
        idPar: 4,
        estado:"oculta" 
    },
    {
        id: 8,
        foto:"https://drive.google.com/open?id=1dePCekYIBKeSdvb2AFW57dDQ2Tge0HFe",
        texto:null,
        idPar: 4,
        estado:"oculta"
    },
    {
        id: 9,
        foto:null,
        texto:"Arco Capaz",
        idPar: 5,
        estado:"oculta"
    },
    {
        id: 10,
        foto:"https://drive.google.com/open?id=1zzaWenZrZ96qBmzqAFDW-SSbVBtpLADc",
        texto:null,
        idPar: 5,
        estado:"oculta"
    },{
        id: 11,
        foto:null,
        texto:"Homotecia",
        idPar: 6,
        estado:"oculta"
    },
    {
        id: 12,
        foto:"https://drive.google.com/open?id=1d5ZBu13CIM_8LBTk-seDyK9P0nxsfu4w",
        texto:null,
        idPar: 6,
        estado:"oculta"
    },
    {
        id: 13,
        foto:null,
        texto:"Dodecaedro",
        idPar: 7,
        estado:"oculta"
    },
    {
        id: 14,
        foto:"https://drive.google.com/open?id=10g2J2ty1ANjcm4npOle3BKeGfu0qZV36",
        texto:null,
        idPar: 7,
        estado:"oculta"
    },
    {
        id: 15,
        foto:null,
        texto:"Teorema de Pitágoras",
        idPar: 8,
        estado:"oculta"
    },
    {
        id: 16,
        foto:"https://drive.google.com/open?id=1sUem9FUBRQcQPzZDuP1TMVxmprgrQi1K",
        texto:null,
        idPar: 8,
        estado:"oculta"
    },
    {
        id: 17,
        foto:null,
        texto:"Pitágoras",
        idPar: 9,
        estado:"oculta"
    },
    {
        id: 18,
        foto:"https://drive.google.com/open?id=1Eo5ZTPFgAksi15q04SUkRiBVuwrUV_6A",
        texto:null,
        idPar: 9,
        estado:"oculta"    
    },
    {
        id: 19,
        foto:null,
        texto:"Mediatriz",
        idPar: 10,
        estado:"oculta"    
    },
    {
        id: 20,
        foto:"https://drive.google.com/open?id=1S4S00qO9vuVP8vlNACdnkpA_YPtea9oH",
        texto:null,
        idPar: 10,
        estado:"oculta"   
    },
    {
        id: 21,
        foto:null,
        texto:"Bisectriz",
        idPar: 11,
        estado:"oculta"
    },
    {
        id: 22,
        foto:"https://drive.google.com/open?id=1euJ09BidCQ2tDmE5SKW_X542RH3pryMG",
        texto:null,
        idPar: 11,
        estado:"oculta"
    },
    {
        id: 23,
        foto:null,
        texto:"Ortocentro",
        idPar: 12,
        estado:"oculta"
    },
    {
        id: 24,
        foto:"https://drive.google.com/open?id=1O49SSmCUkS28WslTIJmUAFirlIyM1cGj",
        texto:null,
        idPar: 12,
        estado:"oculta"
    },
    {
        id: 25,
        foto:null,
        texto:"Paralelogramo tipo",
        idPar: 13,
        estado:"oculta" 
    },
    {
        id: 26,
        foto:"https://drive.google.com/open?id=1qaC5ctRygJxSs9ErOL_KtDovfbhb7BLD",
        texto:null,
        idPar: 13,
        estado:"oculta"  
    },
    {
        id: 27,
        foto:null,
        texto:"Tangente",
        idPar: 14,
        estado:"oculta"  
    },
    {
        id: 28,
        foto:"https://drive.google.com/open?id=19iKTrsqn8YNJhG5Vf405be1saBSkDXQa",
        texto:null,
        idPar: 14,
        estado:"oculta"
    }
];

export {
    getCartas
}
