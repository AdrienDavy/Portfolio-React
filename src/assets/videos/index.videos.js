import { soft, work, category } from '../keywordList.js';
import dressedThumb from '@videoThumbnails/dressed_like_a_naked_soul.png'
import charlie from '@videoThumbnails/charlie.png'
import dantesk from '@videoThumbnails/dantesk.png'
import reperkusound from '@videoThumbnails/reperkusound.png'
import bassodrome from '@videoThumbnails/bassodrome.png'
import sygma from '@videoThumbnails/sygma.png'
import vietnam from '@videoThumbnails/vietnam.png'
import whitsundays from '@videoThumbnails/whitsundays.png'
import greatOceanRoad from '@videoThumbnails/great_ocean_road.png'
import arolla from '@videoThumbnails/arolla.png'
const videoLibrary = [
  {
    id: 1,
    number: "01",
    title: "Dressed Like a Naked Soul",
    description: "Clip musical réalisé pour le groupe de métal Diary of Ordinary Men à Chambéry et à Lyon.",
    software: [soft.premiere, soft.after],
    work: [work.storyboard, work.cadrage, work.drphoto, work.montage, work.fx, work.etalo],
    category: [category.clip],
    year: 2015,
    thumbnail: dressedThumb,
    video: "https://www.youtube.com/embed/15i39WF7QA8"
  },
  {
    id: 2,
    number: "02",
    title: "M. Charlie",
    description: "Clip musical réalisé pour l'artiste John'Son à Montmélian en Savoie.",
    software: [soft.premiere, soft.after],
    work: [work.cadrage, work.montage, work.fx, work.etalo],
    category: [category.clip],
    year: 2016,
    thumbnail: charlie,
    video: "https://www.youtube.com/embed/wT5VEkvqCdc"
  },
  {
    id: 3,
    number: "03",
    title: "Dantesk",
    description: "Aftermovie réalisé pour Big Foot Secret Stage à Lyon",
    software: [soft.premiere, soft.after],
    work: [work.capta, work.montage, work.fx, work.etalo],
    category: [category.aftermovie],
    year: 2015,
    thumbnail: dantesk,
    video: "https://www.youtube.com/embed/8rWluVbIlKA"
  },
  {
    id: 4,
    number: "04",
    title: "Reperkusound",
    description: "Aftermovie réalisé pour Mediatone à Lyon",
    software: [soft.premiere, soft.after],
    work: [work.capta, work.montage, work.fx, work.etalo],
    category: [category.aftermovie],
    year: 2015,
    thumbnail: reperkusound,
    video: "https://www.youtube.com/embed/UW9CjI1XZQQ"
  },
  {
    id: 5,
    number: "05",
    title: "Bassodrome",
    description: "Live report réalisé pour le festival du Bassodrome à Grenoble",
    software: [soft.premiere, soft.after],
    work: [work.capta, work.montage, work.fx, work.etalo],
    category: [category.liveReport],
    year: 2015,
    thumbnail: bassodrome,
    video: "https://www.youtube.com/embed/cezSdKJEsiU"
  },
  {
    id: 6,
    number: "06",
    title: "Alien Ceremony",
    description: "Aftermovie réalisé pour l'association de djs Sygma",
    software: [soft.premiere, soft.after],
    work: [work.capta, work.montage, work.fx, work.etalo],
    category: [category.aftermovie],
    year: 2016,
    thumbnail: sygma,
    video: "https://www.youtube.com/embed/YPun_RZc62E"
  },
  {
    id: 7,
    number: "07",
    title: "Viêtnam",
    description: "Vidéo réalisée pour un voyage de 1 mois dans le nord du Viêtnam",
    software: [soft.premiere, soft.after],
    work: [work.cadrage, work.montage, work.fx, work.etalo],
    category: [category.travel],
    year: 2019,
    thumbnail: vietnam,
    video: "https://www.youtube.com/embed/TcGwQQMH4qw"
  },
  {
    id: 8,
    number: "08",
    title: "Maroc",
    description: "Vidéo réalisée pour un voyage dans le sud du Maroc",
    software: [soft.premiere, soft.after],
    work: [work.cadrage, work.montage, work.fx, work.etalo],
    category: [category.travel],
    year: 2019,
    thumbnail: vietnam,
    video: "https://www.youtube.com/embed/TcGwQQMH4qw"
  },
  {
    id: 9,
    number: "09",
    title: "Whitsundays",
    description: "Vidéo réalisée pour un voyage sur la côte Est en Australie",
    software: [soft.premiere, soft.after],
    work: [work.drone, work.cadrage, work.montage, work.etalo],
    category: [category.travel],
    year: 2019,
    thumbnail: whitsundays,
    video: "https://www.youtube.com/embed/XOw0sLW8e0c"
  },
  {
    id: 10,
    number: "10",
    title: "Great Ocean Road",
    description: "Vidéo réalisée pour un voyage sur la côte Est en Australie",
    software: [soft.premiere, soft.after],
    work: [work.drone, work.cadrage, work.montage, work.etalo],
    category: [category.travel],
    year: 2019,
    thumbnail: greatOceanRoad,
    video: "https://www.youtube.com/embed/dULoxNsVhP8"
  },
  {
    id: 11,
    number: "11",
    title: "Arolla",
    description: "Vidéo réalisée quand j'habitais en Suisse",
    software: [soft.premiere, soft.after],
    work: [work.drone, work.montage, work.etalo],
    category: [category.travel],
    year: 2020,
    thumbnail: arolla,
    video: "https://www.youtube.com/embed/Wu8aTQr1xw4"
  },
]

export default videoLibrary 