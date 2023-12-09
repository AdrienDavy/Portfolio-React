import { soft, work, category } from '../keywordList.js';
import dressedThumb from './thumbnails/dressed_like_a_naked_soul.png'
const videoLibrary = [
  {
    id: 1,
    number: "0" + 1,
    title: "Dressed Like a Naked Soul",
    description: "Clip musical réalisé pour le groupe de métal Diary of Ordinary Men à Chambéry et à Lyon.",
    software: [soft.premiere, soft.after],
    work: [work.storyboard, work.cadrage, work.drphoto, work.montage, work.fx, work.etalo],
    category: [category.clip],
    year: 2015,
    thumbnail: dressedThumb,
    video: "https://www.youtube.com/embed/15i39WF7QA8"
  },
]

export default videoLibrary 