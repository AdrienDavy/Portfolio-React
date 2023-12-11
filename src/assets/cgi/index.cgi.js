import { soft, category } from '../keywordList.js';
import templeOnMars from '@cgiThumbnails/temple_on_mars.png';
import thunderWizard from '@cgiThumbnails/thunder_wizard.png';
import gazMask from '@cgiThumbnails/gaz_mask.png';
import tlouMenu from '@cgiThumbnails/tlou_menu.png';
import butterfly from '@cgiThumbnails/butterfly.png';
import blackHoleCity from '@cgiThumbnails/black_hole_city.png';
import luxuryRoom from '@cgiThumbnails/luxury_room.png';
import abstractYolines from '@cgiThumbnails/abstract_yolines.png';
import psychedelicVectron from '@cgiThumbnails/psychedelic_vectron.png';
const cgiLibrary = [

  {
    id: 1,
    number: "01",
    title: "Temple on Mars",
    description: "Projet personnel et première vidéo en 3D",
    software: [soft.c4d, soft.octane, soft.kitbash, soft.after],
    category: [category.art],
    year: 2021,
    thumbnail: templeOnMars,
    video: "https://www.youtube.com/embed/Ducj6Y-B7nM"
  },
  {
    id: 2,
    number: "02",
    title: "Thunder Wizard",
    description: "Projet personnel en 3D",
    software: [soft.c4d, soft.octane, soft.quixel, soft.after],
    category: [category.art],
    year: 2021,
    thumbnail: thunderWizard,
    video: "https://www.youtube.com/embed/QmxS2-ER_Tc"
  },
  {
    id: 3,
    number: "03",
    title: "Gaz Mask in a Hallway",
    description: "Projet personnel en 3D",
    software: [soft.mixamo, soft.c4d, soft.octane, soft.quixel, soft.after],
    category: [category.art],
    year: 2021,
    thumbnail: gazMask,
    video: "https://www.youtube.com/embed/xuh0AbK8_ws"
  },
  {
    id: 4,
    number: "04",
    title: "TLOU Main Menu",
    description: "Inspiré du menu du jeu vidéo The Last Of Us 1",
    software: [soft.c4d, soft.octane, soft.quixel, soft.after],
    category: [category.art],
    year: 2022,
    thumbnail: tlouMenu,
    video: "https://www.youtube.com/embed/IgCmGsaSFyw"
  },
  {
    id: 5,
    number: "05",
    title: "Butterfly",
    description: "Modélisation, texturage et animation d'un papillon pour un clip musical",
    software: [soft.c4d, soft.octane, soft.after],
    category: [category.art],
    year: 2021,
    thumbnail: butterfly,
    video: "https://www.youtube.com/embed/3zlf1RqE8B4"
  },
  {
    id: 6,
    number: "06",
    title: "Black Hole City",
    description: "Projet personnel en 3D",
    software: [soft.c4d, soft.octane, soft.quixel, soft.kitbash, soft.after],
    category: [category.art],
    year: 2022,
    thumbnail: blackHoleCity,
    video: "https://www.youtube.com/embed/_QZOEdx8qAY"
  },
  {
    id: 7,
    number: "07",
    title: "Luxury Room",
    description: "Projet personnel en 3D",
    software: [soft.c4d, soft.octane, soft.quixel, soft.kitbash, soft.after],
    category: [category.art],
    year: 2022,
    thumbnail: luxuryRoom,
    video: "https://www.youtube.com/embed/BmdyqzcAyrY"
  },
  {
    id: 8,
    number: "08",
    title: "Abstract Yolines",
    description: "Projet personnel en 3D",
    software: [soft.c4d, soft.octane, soft.houdini, soft.after],
    category: [category.art],
    year: 2022,
    thumbnail: abstractYolines,
    video: "https://www.youtube.com/embed/57FBeFryTRk"
  },
  {
    id: 9,
    number: "09",
    title: "Psychedelic Vectron",
    description: "Projet personnel en 3D",
    software: [soft.c4d, soft.octane, soft.after],
    category: [category.art],
    year: 2021,
    thumbnail: psychedelicVectron,
    video: "https://www.youtube.com/embed/NER56dkBJfE"
  }
]

export default cgiLibrary 