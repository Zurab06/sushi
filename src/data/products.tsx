import photo from '../assets/img/pizza.jpg'
import photo1 from '../assets/img/sushi.jpg'
import photo2 from '../assets/img/soup.jpg'

interface CategoryItem {
    name: string,
    weight: number,
    pieces: number,
    price: number,
    Image: string
}

export const categoryItem: CategoryItem[] = [
    {
        name: 'пицца',
        weight: 1050,
        pieces: 30,
        price: 1500,
        Image: photo
    },
    {
        name: 'суши',
        weight: 1050,
        pieces: 30,
        price: 1500,
         Image: photo1
    },
    {
        name: 'WOK',
        weight: 1050,
        pieces: 30,
        price: 1500,
        Image:photo2
    },
    {
        name: 'роллы',
        weight: 1050,
        pieces: 30,
        price: 1500,
         Image: photo
    },
    {
        name: 'Саломон сет',
        weight: 1050,
        pieces: 30,
        price: 1500,
        Image: photo
    },
    {
        name: 'Саломон',
        weight: 1050,
        pieces: 30,
        price: 1500,
         Image: photo
    },
    {
        name: 'Саломон сет',
        weight: 1050,
        pieces: 30,
        price: 1500,
        Image:photo
    },
    {
        name: 'Саломон',
        weight: 1050,
        pieces: 30,
        price: 1500,
         Image: photo
    },
  
    {
        name: 'Саломон',
        weight: 1050,
        pieces: 30,
        price: 1500,
         Image: photo
    },
   
    
    
]