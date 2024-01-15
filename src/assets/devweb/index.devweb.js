import { soft, langage } from '../keywordList.js';
import feelmotion from '@devwebThumbnails/feelmotion.jpg';
import gabelins from '@devwebThumbnails/gabelins.jpg';
import portfolio from '@devwebThumbnails/portfolio.jpg';
import prolactine from '@devwebThumbnails/prolactine.jpg';
import saintiki from '@devwebThumbnails/saintiki.jpg';


const devwebLibrary = [

  {
    id: 1,
    number: "01",
    title: "La Ferme des Gabelins",
    description: "Site web pour accueillir tout type d’événements et activités dans un endroit convivial en Savoie. Intégration web basée à partir d’une maquette fournie dans l’agence Nouvel Oeil à Chambéry.",
    langage: [langage.wp, langage.acf, langage.html, langage.sass, langage.js, langage.php, langage.swiper],
    year: 2023,
    thumbnail: gabelins,
    link: "https://www.lafermedesgabelins.fr/"
  },
  {
    id: 2,
    number: "02",
    title: "Saintiki",
    description: "Site web vitrine présentant une villa à louer près de Saint-Tropez. Intégration web basée à partir d’une maquette fournie dans l’agence Nouvel Oeil à Chambéry.",
    langage: [langage.wp, langage.acf, langage.html, langage.sass, langage.js, langage.php],
    year: 2023,
    thumbnail: saintiki,
    link: "https://villa-saintiki.com/"
  },
  {
    id: 3,
    number: "03",
    title: "Prolactine",
    description: "Site web d’un affineur fromager. Création d’une maquette et intégration web d’un site vitrine dans l’agence Nouvel Oeil à Chambéry.",
    software: [soft.xd, soft.illustrator],
    langage: [langage.wp, langage.acf, langage.html, langage.sass, langage.js, langage.php],
    year: 2023,
    thumbnail: prolactine,
    link: "https://prolactinefrance.com/"
  },
  {
    id: 4,
    number: "04",
    title: "Feel Motion",
    description: "Application pour choisir un film en fonction de son humeur. Deuxième projet dans le cadre de la formation à la Wild Code School en équipe.",
    langage: [langage.react, langage.css, langage.js],
    year: 2023,
    thumbnail: feelmotion,
    link: "https://feelmotion.netlify.app/"
  },
  {
    id: 5,
    number: "05",
    title: "Portfolio 1.0",
    description: "Premier projet en autonomie dans la cadre de la formation à la Wild Code School.",
    langage: [langage.html, langage.css, langage.js],
    year: 2023,
    thumbnail: portfolio,
    link: "https://adriendavy.github.io/portfolio/"
  },

]

export default devwebLibrary; 