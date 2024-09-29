// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

// import images
import Features1Img from "./assets/img/features-1.avif";
import Features2Img from "./assets/img/UnHistorialComprobado03.jpg";
import AnalisisFundamental from "../src/assets/img/workouts/AnalisisFundamental00.avif";
import AnalisisTecnico from "../src/assets/img/workouts/AnalisisTecnico02.jpg";
import EstrategiasInversion from "../src/assets/img/workouts/EstrategiasdeInversiones.jpg";
import SeleccionCarteraOptima from "../src/assets/img/workouts/SeleccionCarteraOptima.jpg";
import GestionPortafolio from "../src/assets/img/workouts/GestiondePortafolio1.jpg";
import TradingAlgoritmico from "../src/assets/img/workouts/TradingAlgoritmico.jpg";
import RobotsTrading from "../src/assets/img/workouts/RobotsTrading.jpg";
import OpcionesDerivados from "../src/assets/img/workouts/OpcionesDerivados.jpg";
import CambioDivisas from "../src/assets/img/workouts/CambioDivisas.jpg";
import CryptoMonedas from "../src/assets/img/workouts/CryptoMonedas.jpg";
import AcademiaTraders from "../src/assets/img/workouts/AcademiaTraders.jpg";
import Product1Img from "./assets/img/products/product-1.png";
import Product2Img from "./assets/img/products/product-2.png";
import Product3Img from "./assets/img/products/product-3.png";
import Product4Img from "./assets/img/products/product-4.png";
import Product5Img from "./assets/img/products/product-5.png";
import Product6Img from "./assets/img/products/product-6.png";
import Product7Img from "./assets/img/products/product-7.png";
import Product8Img from "./assets/img/products/product-8.png";
import Product9Img from "./assets/img/products/product-9.png";
import Product10Img from "./assets/img/products/product-10.png";
import TestimonialImg from "./assets/img/testimonial.jpg";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import Avatar4Img from "./assets/img/avatar-4.png";

export const header = {
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
};

export const navigation = [
  { name: "Nosotros", href: "/", url: "#who-we-are" },
  { name: "Productos", href: "/", url: "#products" },
  { name: "Proyectos", href: "/", url: "#projects" },
  { name: "Noticias", href: "/", url: "#news" },
  { name: "Tarifas", href: "/", url: "#pricing" },
  { name: "Testimonios", href: "/", url: "#testimonial" },
  { name: "FAQ", href: "/", url: "#faq" },
  { name: "Contactanos", href: "/", url: "#contact-us" },
];

export const hero = {
  title: "Incrementa la rentabilidad de tus Activos Financieros ...",
  subtitle:
    "Precisión inigualable para encontrar antes que otros, a los Activos más rentables. Usando señales de compra/venta impulsadas por IA que te indican cuándo entrar y salir ...",
  buttonText: "Registrate",
};

export const banner = {
  titlePart1: "Incrementa la rentabilidad de tus Activos Financieros ...",
  titlePart2: "– Como nunca antes.",
  subtitle:
    "Precisión inigualable para encontrar antes que otros, a los Activos más rentables. Usando señales de compra/venta impulsadas por IA que te indican cuándo entrar y salir ...",
  textBtn: "Unete Ahora !!!",
  img: "",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];

export const features = {
  image: <Features1Img />,
  title: "¿Quienes Somos?",
  subtitle:
    "Bienvenido a Educa Digital, su plataforma para la selección de acciones basada en IA. Le ofrecemos inteligencia artificial de vanguardia para revolucionar la forma de invertir. Nuestra misión es nivelar el campo de juego llevando el poder de la IA al pequeño inversor.",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "¿Por qué confiar en el comercio de acciones con IA?",
      subtitle:
        "Por su capacidad para predecir movimientos bursátiles, procesar grandes cantidades de datos instantáneamente y eliminar los sesgos emocionales humanos en las decisiones comerciales.",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "¿Para que comprender el Comercio de Acciones con IA?",
      subtitle:
        "Para entender el mundo de la Inteligencia Artificial y descubrir cómo está revolucionando el Trading de Acciones. Conozca los complejos algoritmos, el análisis de big data y las técnicas de aprendizaje automático que impulsan nuestras selecciones de acciones basadas en IA.",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Lograr Inversiones Eficientes, maximizando la Rentabilidad",
      subtitle:
        "En el mundo tradicional del comercio de acciones, el éxito pinta la imagen de un individuo dedicado que analiza grandes cantidades de noticias financieras, rastrea los movimientos del mercado y profundiza en los prospectos de la empresa. ¿Acaso la IA no es una mejor la alternativa...?",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "Un Historial Comprobado",
    subtitle:
      "Entendemos que cuando se trata de sus inversiones, la evidencia habla más que las promesas. Por eso no hablamos sólo de potencial: mostramos resultados reales. Sumérjase en el desempeño histórico y en tiempo real de nuestra estrategia comercial impulsada por IA y vea cómo ha superado consistentemente al mercado. Los conocimientos transparentes y respaldados por datos son la base de lo que hacemos, porque su confianza en nuestro sistema se basa en un éxito comprobado, no solo en palabras.",
  },
};

export const newInStore = {
  title: "Nuestros Productos",
  subtitle:
    "Obtenga nuestros Productos con Precios Promocionales",
  link: "Mostrar Todos",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      image: <AnalisisFundamental />,
      name: "Analisis Fundamental",
    },
    {
      image: <AnalisisTecnico />,
      name: "Analisis Tecnico",
    },
    {
      image: <EstrategiasInversion />,
      name: "Estrategias de Inversion",
    },
    {
      image: <SeleccionCarteraOptima />,
      name: "Seleccion de Cartera Optima",
    },
    {
      image: <GestionPortafolio />,
      name: "Gestion de Portafolio",
    },
    {
      image: <TradingAlgoritmico />,
      name: "Trading Algoritmico",
    },
    {
      image: <RobotsTrading />,
      name: "Robots de Trading",
    },
    {
      image: <OpcionesDerivados />,
      name: "Opciones y Derivados",
    },
    {
      image: <CambioDivisas />,
      name: "Cambio de Divisas",
    },
    {
      image: <CryptoMonedas />,
      name: "Crypto Monedas",
    },
    {
      image: <AcademiaTraders />,
      name: "Academia de Traders",
    },
  ],
};

export const products = {
  title: "La Nueva Era en la Gestion de Activos Financieros",
  subtitle:
    "Aproveche el poder de la IA a través de carteras personalizadas que se adaptan a sus preferencias únicas en todos los mercados y conviértalas en productos financieros personalizados.",
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Afina y optimiza tus Estrategias de Inversiones, con modelos de Inteligencia Artificial",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Realiza análisis en profundidad de Oportunidades Reales",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Supera a los mercados con la IA más completa para la gestión de activos",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Obten una ventaja competitiva, con nuestras herramientas IA personalizadas",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Reconoce la importancia de los factores ESG en tus decisiones de inversión",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Característica clave de nuestras Carteras, es el Análisis del sentimiento de las Noticias",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "Transforma tus estrategias de inversión en valores liquidos y rentables",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Tenemos un espectro completo de Servicios Financieros",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Las notas estructuradas de Educa Digital, son certificados con la mayor transparencia y liquidez",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Convierta datos en decisiones informadas, para invertir con rentablidades crecientes",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Tarifas de Pago",
  plans: [
    {
      name: "Básico",
      price: "20",
      list: [
        { name: "Acceso ilimitado a nuestros Reportes y Análisis Técnicos" },
        { name: "Consultas online 24/7" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "Acceso ilimitado a nuestros Reportes y Análisis Técnicos" },
        {
          name: "Selección de Cartera Optima y Gestión de Portafolio de Activos Financieros",
        },
        { name: "Consultas online 24/7" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "Acceso ilimitado a nuestros Reportes y Análisis Técnicos" },
        {
          name: "Selección de Cartera Optima y Gestión de Portafolio de Activos Financieros",
        },
        { name: "Trading Algoritmico y Robots de Trading" },
        { name: "Consultas online 24/7" },
      ],
      delay: 1000,
    },
  ],
};

export const testimonial = {
  title: "Lo que la gente dice sobre nosotros",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Jose Ampuero",
      occupation: "Inversor",
      message:
        "Me ha servido bastante Educa Digtial, ya que me ayuda a tener hábitos financieros positivos, en cuanto a mis ahorros sin tantos problemas ...",
    },
    {
      avatar: <Avatar2Img />,
      name: "Geraldine Miranda",
      occupation: "Inversor",
      message:
        "Genial para invertir cuando no tienes los conocimienos técnicos, y tampoco el tiempo de ir gestionando tus inversiones diariamente ...",
    },
    {
      avatar: <Avatar3Img />,
      name: "Stephanie Cayo",
      occupation: "Inversor",
      message:
        "La Pizarra de Cotizaciones es muy fácil e intuitiva de utilizar, tiene buenas recomendaciones y rentabiliza el manejo de todas mis inversiones ...",
    },
    {
      avatar: <Avatar4Img />,
      name: "Oscar Villavicencio",
      occupation: "Inversor",
      message:
        "La app explica fácilmente los conceptos de inversión, en un ambiente amigable y sencillo de navegar. Además que rentabiliza mis inversiones, que es lo que uno busca ...",
    },
    {
      avatar: <Avatar2Img />,
      name: "Andrea Torres",
      occupation: "Inversor",
      message:
        "Genial para invertir cuando no tienes los conocimienos técnicos, y tampoco el tiempo de ir gestionando tus inversiones diariamente ...",
    },
    {
      avatar: <Avatar3Img />,
      name: "Luisa Flores",
      occupation: "Inversor",
      message:
        "Te ofrecen buena opciones, para tener tus ahorros seguros, e incrementarlos en forma constante con rentabilidades atractivas ...",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "Preguntas Frecuentes",
  accordions: [
    {
      question: "¿Que es EDUCA DIGITAL?",
      answer:
        "Educa Digital es una empresa de inteligencia que utiliza aprendizaje automático y modelos estadísticos para ofrecer inteligencia procesable para realizar inversiones en Activos Financieros,  y generar soluciones de software financiero inteligente.",
    },
    {
      question: "¿Qué servicios ofrece EDUCA DIGITAL?",
      answer:
        "EDUCA DIGITAL ofrece indicadores de inteligencia o señales de compra y venta de activos del mercado financiero, tanto para minoristas como para instituciones. Además, EDUCA DIGITAL proporciona herramientas de análisis de riesgos para protocolos de Finanzas Descentralizadas, y soluciones de inversión cuantitativa para nuestros clientes en Finanzas Descentralizadas.",
    },
    {
      question: "¿Para que sirve la Selección de Cartera Optima?",
      answer:
        "La selección  de Cartera Optima se utiliza para determinar en que activos financieros, deben invertir nuestros clientes, según sus respectivos perfiles de inversiones, metas financieras y tolerancia al riesgo. La selección de una Cartera Optima, implica analizar el comportamiento de los mercados de bonos, acciones, materias primas y futuros financieros,  e identificar patrones que pueden usarse para hacer predicciones sobre precios o movimientos del mercado futuros. Este tipo de análisis se puede realizar mediante análisis técnico, análisis fundamental y herramientas de Inteligencia Artificial.",
    },
    {
      question: "¿Cual es la utilidad de los Modelos de IA Generativa?",
      answer:
        "Los modelos de IA generativa, como GPT-4, pueden crear contenido por sí mismos. Pueden proporcionar respuestas similares a las humanas a indicaciones, generando contenido original de forma autónoma como un artículo, un chiste, una canción, un video, una imagen o una secuencia de código.",
    },
    {
      question: "¿Que es el Trading AI?",
      answer:
        "El trading AI es el conjunto de tecnicas informaticas que integran capacidades de Inteligencia Artificial en sistemas de trading algorítmicos. Los bots de trading AI tienen la capacidad de procesar una gran cantidad de datos técnicos y fundamentales del mercado en tiempo real, relacionados con una amplia variedad de mercados financieros como acciones, materias primas, bonos, índices, forex y cripto.",
    },
    {
      question: "¿Como esta revolucionando el Trading la IA Generativa?",
      answer:
        "La IA generativa ha creado la oportunidad de un análisis de datos y una toma de decisiones más precisos y eficientes. Al entrenar un modelo con noticias financieras y datos del mercado, puede generar predicciones sobre precios de activos y una variedad de otras métricas financieras. También se puede utilizar para analizar grandes cantidades de datos no estructurados, como publicaciones en redes sociales, para identificar el sentimiento y otras tendencias que puedan impactar en los mercados.",
    },
  ],
};

export const newsletter = {
  title: "OBTENGA MAS DESCUENTOS EN SUS COMPRAS",
  subtitle: "Únase a nuestra Lista de Correos",
  placeholder: "Su dirección de correo electrónico",
  buttonText: "Compra Ahora",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "FurniShop 2022 - All Rights Reserved.",
};
