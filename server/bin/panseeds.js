const mongoose = require('mongoose');
// const User = require('../models/User');
const Products = require('../models/Products');
// const Orders = require('../models/Orders');

const dbName = 'bread-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const Breads = [
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
    price: 1.10
  },
  {
    name: "Barra integral",
    image: "http://cdn.themis-media.com/media/global/images/galleries/display/60/60702.jpg",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.60
},
  {
    name: "Pan cereales",
    image: "http://lacanasta.es/wp-content/uploads/2015/03/la-canasta-pan-3.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.10
  },
  {
    name: "pan 100% cenceno",
    image: "http://lacanasta.es/wp-content/uploads/2015/03/la-canasta-pan-5.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.25
  },
  {
    name: "Hogaza 6 cereales",
    image: "http://www.piquitosrubio.com/images/piquitos-rubio-panes-ardales-malaga6.png?crc=3947963899",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 2.50
  },
  {
    name: "Barra de pan",
    image: "https://comercial.panaderiadacunha.com/wp-content/uploads/2016/12/CatalogoPC_0005_BARRA-COMUN.jpg-copy.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.45
  },
  {
    name: "Barra gallega",
    image: "http://distribucio104.com/wp-content/uploads/2016/12/barrita-sb-90.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.79
  },
  {
    name: "Chatta de miga morena",
    image: "http://www.sanbrandan.com/fotos/catalogo/detalle/chatta-miga-morena.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.15
  },
  {
    name: "Chapata",
    image: "https://static.wixstatic.com/media/d9dd1e_0c33ed8c57824b78b82676fb47cf75f0~mv2_d_3456_2304_s_2.png/v1/fill/w_481,h_322,al_c,usm_0.66_1.00_0.01/d9dd1e_0c33ed8c57824b78b82676fb47cf75f0~mv2_d_3456_2304_s_2.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.20
  },
  {
    name: "Hogaza grande",
    image: "http://daicomapans.es/wp-content/uploads/2017/02/hogaza_grande_gremio.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 2.25
  },
  {
    name: "Pan Payés pequeño",
    image: "http://www.panlamagdalena.es/wp-content/uploads/2015/06/03-hogaza-de-pueblo.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.25
  },
  {
    name: "Pan candeal lechuguno",
    image: "http://www.elhornodeangel.es/wp-content/uploads/cache/images/2017/12/B-01_Pan-Candeal/B-01_Pan-Candeal-1061621459.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1.85
},
  {
    name: "Pan de picos",
    image: "https://i1.wp.com/www.pacomagazine.es/wp-content/uploads/2017/05/IMG_9090.png?fit=850%2C318&ssl=1",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 0.79
},
  {
    name: "Pan especial para torrijas",
    image: "http://www.amasalia.es/Imagenes/Pan-de-torrijas.png",
    ingredients:" pan rústico enriquecido con harina de espelta y semillas enteras del cereal que se pueden apreciar en su masa y corteza. La espelta es un cereal con un alto valor nutritivo rico en proteínas, minerales, vitaminas B, E y betacarotenos, y fibra insoluble. Estos componentes ayudan a reducir el nivel de colesterol, aceleran el tránsito intestinal y reducen la secreción de ácidos biliares",
    price: 1
  },
]

Products.create(Breads, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${Breads.length} orders`)
});