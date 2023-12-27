const productos = [
    {
        id: "SM-F731",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/189107-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "celulares",
        nombre: "Galaxy Z Flip5",
        precio: 1999000,
        descripcion: "El Galaxy Z Flip5 presenta por primera vez la Flex Window de 3,4 pulgadas creado para la autoexpresión.",
        stock: 10
    },
    {
        id: "SM-S918",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/191397-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "celulares",
        nombre: "Galaxy S23 ULTRA",
        precio: 2420000,
        descripcion: "Sacá fotos y videos nítidos, desde el anochecer hasta el amanecer. El sensor de cámara más avanzado y el procesador más rápido del Galaxy admiten poca luz y reducen el ruido. E incluso el lente de la cámara borra la captura al atenuar el resplandor.",
        stock: 5
    },
    {
        id: "SM-A145",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/191115-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "celulares",
        nombre: "Galaxy A14",
        precio: 290000,
        descripcion: "Ampliá tu vista con la pantalla Infinity-V de 6.6” en el Galaxy A14 y experimentá todo en colores verdaderos y de alta definición con la tecnología de pantalla FHD+.",
        stock: 0
    },
    {
        id: "SM-R510",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/184128-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "auriculares",
        nombre: "Galaxy Buds2 Pro",
        precio: 300000,
        descripcion: "Cada nota suena como real porque el audio claro comienza en la fuente con tu dispositivo Samsung Galaxy favorito.",
        stock: 10
    },
    {
        id: "SM-R177",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/173094-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "auriculares",
        nombre: "Samguns inear000",
        precio: 130000,
        descripcion: "Experimentá audio con sonido bien equilibrado, ajuste de comodidad sin igual, cancelación de ruido activa (ANC) y conectividad perfecta a tu teléfono y reloj con los Galaxy Buds2.",
        stock: 1
    },
    {
        id: "LS27BG",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/190232-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "monitores",
        nombre: 'Monitor Gaming 27" FHD 240Hz con panel IPS',
        precio: 699999,
        descripcion: "Una forma realista de desafiar la realidad, en la que experimentarás tus juegos como nunca antes. El panel IPS te permite experimentar los colores con nitidez y con un amplio ángulo de visión de 178º, para una mayor claridad desde cualquier punto de vista.",
        stock: 10
    },
    {
        id: "LF24T3",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/190483-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "monitores",
        nombre: 'Monitor LED 24" con Panel IPS y bordes Ultradelgados Negro',
        precio: 229499,
        descripcion: "Diseño minimalista, máxima concentración. La pantalla sin borde en 3 lados aporta una estética limpia y moderna a cualquier entorno de trabajo. ",
        stock: 7
    },
    {
        id: "LS32BM",
        imagen: "https://samsungar.vtexassets.com/arquivos/ids/190853-1200-auto?width=1200&height=auto&aspect=true",
        categoria: "monitores",
        nombre: 'Monitor 32" UHD 4K M70B',
        precio: 789999,
        descripcion: "Todo lo que necesitás está en tu Monitor. Mirá contenido, trabajá y chateá, todo sin conectar una PC, gracias a Smart Monitor.",
        stock: 3
    },
];

const obtenerProductos = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve(productos);
    }, 2000)
});

export default obtenerProductos