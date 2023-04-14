
import photo1 from '../assets/img/sushi.jpg';
import photo2 from '../assets/img/soup.jpg';

interface CategoryItem {
  id: number;
  name: string;
  weight: number;
  pieces: number;
  price: number;
  Image: string;
}

export const categoryItem: CategoryItem[] = [
  {
    id: 1,
    name: 'пицца',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },
  {
    id: 2,
    name: 'суши',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo1,
  },
  {
    id: 3,
    name: 'WOK',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },
  {
    id:4,
    name: 'роллы',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },
  {
    id: 5,
    name: 'Саломон сет',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },
  {
    id:6,
    name: 'Саломон',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },
  { 
    id:7,
    name: 'Саломон сет',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },
  {
    id: 8,
    name: 'Саломон',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },

  {
    id:9,
    name: 'Саломон',
    weight: 1050,
    pieces: 30,
    price: 1500,
    Image: photo2,
  },
];
