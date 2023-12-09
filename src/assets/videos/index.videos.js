import { soft, work, category } from '../keywordList.js';
import dressedThumb from '@thumbnails/dressed_like_a_naked_soul.png'
import charlie from '@thumbnails/charlie.png'
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
]

export default videoLibrary 