const mongoose = require('mongoose');
// const User = require('../models/User');
const Products = require('../models/Products');
// const Orders = require('../models/Orders');

const {dbURL} = require('../config');

console.log(dbURL)

const catalogo = [
  {
    name: "Barra de pan de pueblo",
    image: "https://alliquindoiblog.files.wordpress.com/2015/09/panbaguette.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.79
  },
  {
    name: "Barra pan sin sal",
    image: "http://www.lineaysalud.com/wp-content/uploads/2013/02/pan-e1448478151666.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.45
 },
  {
    name: "Pan con semillas de girasol",
    image: "https://bridor.com/wp-content/uploads/product-images/60ERAB-11.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.10,
    category:'Breads',
  },
  {
    name: "Barra integral",
    image: "http://cdn.themis-media.com/media/global/images/galleries/display/60/60702.jpg",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.60,
    category:'Breads',
},
  {
    name: "Pan cereales",
    image: "http://lacanasta.es/wp-content/uploads/2015/03/la-canasta-pan-3.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.10,
    category:'Breads',
  },
  {
    name: "pan 100% cenceno",
    image: "http://lacanasta.es/wp-content/uploads/2015/03/la-canasta-pan-5.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.25,
    category:'Breads',
  },
  {
    name: "Hogaza 6 cereales",
    image: "http://www.piquitosrubio.com/images/piquitos-rubio-panes-ardales-malaga6.png?crc=3947963899",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 2.50,
    category:'Breads',
  },
  {
    name: "Barra de pan",
    image: "https://comercial.panaderiadacunha.com/wp-content/uploads/2016/12/CatalogoPC_0005_BARRA-COMUN.jpg-copy.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.45,
    category:'Breads',
  },
  {
    name: "Barra gallega",
    image: "http://distribucio104.com/wp-content/uploads/2016/12/barrita-sb-90.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.79,
    category:'Breads',
  },
  {
    name: "Chatta de miga morena",
    image: "http://www.sanbrandan.com/fotos/catalogo/detalle/chatta-miga-morena.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.15,
    category:'Breads',
  },
  {
    name: "Chapata",
    image: "https://static.wixstatic.com/media/d9dd1e_0c33ed8c57824b78b82676fb47cf75f0~mv2_d_3456_2304_s_2.png/v1/fill/w_481,h_322,al_c,usm_0.66_1.00_0.01/d9dd1e_0c33ed8c57824b78b82676fb47cf75f0~mv2_d_3456_2304_s_2.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.20,
    category:'Breads',


  },
  {
    name: "Hogaza grande",
    image: "http://daicomapans.es/wp-content/uploads/2017/02/hogaza_grande_gremio.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 2.25,
    category:'Breads',
  },
  {
    name: "Pan Payés pequeño",
    image: "http://www.panlamagdalena.es/wp-content/uploads/2015/06/03-hogaza-de-pueblo.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.25,
    category:'Breads',
  },
  {
    name: "Pan candeal lechuguno",
    image: "http://www.elhornodeangel.es/wp-content/uploads/cache/images/2017/12/B-01_Pan-Candeal/B-01_Pan-Candeal-1061621459.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.85,
    category:'Breads',
},
  {
    name: "Pan de picos",
    image: "https://i1.wp.com/www.pacomagazine.es/wp-content/uploads/2017/05/IMG_9090.png?fit=850%2C318&ssl=1",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.79,
    category:'Breads',
},
  {
    name: "Pan especial para torrijas",
    image: "http://www.amasalia.es/Imagenes/Pan-de-torrijas.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1,
    category:'Breads',
  },
  {
    name: "Empanada casera gallega de carne",
    image: "https://www.lareiragourmet.com/media/im/600x600-empanada-carne-20170321083338-77.jpg",
    ingredients:"Carne vacuno, cebolla,tomate,pimiento,huevo,sal y especias",
    price: 9.95,
    category:'Pattys',
  },
  {
    name: "Empanada casera gallega de atún",
    image: "http://panificadoramencer.com/wp-content/uploads/2016/02/empanada-de-atun.png",
    ingredients:"Atún, cebolla,tomate,pimiento,huevo,sal y especias",
    price: 9.95,
    category:'Pattys',
  },
  {
    name: "Empanada casera gallega de bacalao",
    image: "https://www.lareiragourmet.com/media/im/600x600-empanada-bacalao-20170321081011-99.jpg",
    ingredients:"Bacalao desmigado, cebolla,tomate,pimiento,huevo,sal y especias",
    price: 9.95,
    category:'Pattys',
  },
  {
    name: "Empanada casera gallega de pulpo",
    image: "http://www.empanadasdepan.com/imagenes/pulpo.png",
    ingredients:"Atún, cebolla,tomate,pimiento,huevo,sal y especias",
    price: 9.95,
    category:'Pattys',
  },
  {
    name: "Empanada casera gallega de setas y langostinos",
    image: "https://i0.wp.com/www.buscorecetas.com/wp-content/uploads/2011/09/empanada-gallega.png",
    ingredients:"Setas,langostinos,cebolla,tomate,pimiento,huevo,sal y especias",
    price: 11.95,
    category:'Pattys',
  },
  {
    name: "Empanada casera rellena de aguacate y pisto manchego",
    image: "https://i0.wp.com/www.buscorecetas.com/wp-content/uploads/2011/09/empanada-gallega.png",
    ingredients:"aguacate, cebolla,tomate,pimiento,huevo,sal y especias",
    price: 11.95,
    category:'Pattys',
  },
  {
    name: "Empanadillas caseras variadas x4 uds",
    image: "https://i1.wp.com/pecadosdelivery.com/wp-content/uploads/2017/09/emp-1.png?fit=729%2C346&ssl=1",
    ingredients:"Setas,aguacate,atún,carne vacuno,bacalao,langostinos,cebolla,tomate,pimiento,huevo,sal y especias",
    price: 7.95,
    category:'Pattys',
  },
  {
    name: "Empanadillas caseras rancheras x4 uds",
    image: "http://louperrine.com/wp-content/uploads/2017/08/Chicken-Empenadas.png",
    ingredients:"pollo,bacon,queso,salsa barbacoa,cebolla,tomate,pimiento,huevo,sal y especias",
    price: 7.95,
    category:'Pattys',
  },
  {
    name: "Tarta Sacher 12 raciones",
    image: "http://www.arteysano.eu/wp-content/uploads/2018/01/sacher.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta Selva Negra 12 raciones",
    image: "http://pastelesdlulu.com/wp-content/uploads/2013/10/black-forest-cake.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta San Marcos 12 raciones",
    image: "http://www.sweetpast.com/archivos/productos/CD01212%20TARTA%20SAN%20MARCOS3.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta de fruta fresca 12 raciones",
    image: "http://i50.tinypic.com/2ywvhx3.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta de fresas 12 raciones",
    image: "http://pastelesdlulu.com/wp-content/uploads/2013/10/black-forest-cake.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Mousse-Tarta de arándanos 12 raciones",
    image: "http://www.pasteleriasanshara.es/images/tartas/Mousse-arandanos.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Mousse-Tarta de limón 12 raciones",
    image: "http://www.laroccacakes.com/wp-content/uploads/2016/02/Lemon-Mousse-Cake_2.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Mousse-Tarta de chocolate 12 raciones",
    image: "https://www.dufflet.com/getmetafile/039b0c3f-4112-4adf-a2db-9941ae2f5532/cchml-fs8.aspx",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Mousse-Tarta de albaricoque 12 raciones",
    image: "https://banner.kisspng.com/20171212/af9/kind-of-yellow-peach-jam-mousse-cake-free-to-download-5a2fe486b8d7d7.2767225515130881347571.jpg",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Mousse-Tarta de trufa 12 raciones",
    image: "https://cdn.shopify.com/s/files/1/1087/0244/products/truffle_royale_cake_1024x1024.png?v=1449636381",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Mousse-Tarta bombón 12 raciones",
    image: "https://vincesmarket.ca/wp-content/uploads/2017/03/LaRocca-Chocolate-Mousse-Bombe-Celebration-Cake.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Mousse-Tarta de Oreo 12 raciones",
    image: "http://www.mcdonalds.es/sites/default/files/produits/pastel-oreo_0.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta de la reina 12 raciones",
    image: "https://www.dufflet.com/getmetafile/2c4d5220-d15d-487b-b4af-a2ec52eadeaa/ctcml-fs8.aspx",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta infantil niño 12 raciones",
    image: "https://tartasdefondantmadrid.files.wordpress.com/2014/01/tarta-de-fondant-oso-dormilo-azul.png",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta infantil niña 12 raciones",
    image: "https://www.pasteleriadulceamanecer.es/456-large_default/tarta-infantil-da144.jpg",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
  {
    name: "Tarta infantil minnie fondant 12 raciones",
    image: "https://www.pasteleriadulceamanecer.es/456-large_default/tarta-infantil-da144.jpg",
    ingredients:"Harina de trigo,azucar,azucar glas, huevo,mantequilla,cacao en polvo,levadura química, mermelada de albaricoque,nata líquida.",
    price: 12.95,
    category:'cakes',
  },
]

Products.create(catalogo, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${catalogo.length} orders`)
});