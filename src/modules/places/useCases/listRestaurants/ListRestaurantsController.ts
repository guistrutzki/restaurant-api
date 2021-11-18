import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ListRestaurantsUseCase } from './ListRestaurantsUseCase';

const mockedMenu = [
  {
    title: 'Batata frita',
    image: 'https://www.caratininga.com.br/imagem/index/24674114/G/fritas.png',
  },
  {
    title: 'Churrasco',
    image:
      'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/08/pexels-photo-8477294-1280x720.jpg',
  },
  {
    title: 'Feijoada',
    image:
      'https://img.itdg.com.br/images/recipes/000/002/998/355811/355811_original.jpg',
  },
  {
    title: 'Macarrão',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/101/040/356212/356212_original.jpg?mode=crop&width=710&height=400',
  },
  {
    title: 'Hamburger',
    image:
      'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Sushi',
    image:
      'https://revistamenu.com.br/wp-content/uploads/2020/01/sushirobo-1050x580.jpg',
  },
];

class ListRestaurantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listRestaurantsUseCase = container.resolve(ListRestaurantsUseCase);

    const allRestaurants = await listRestaurantsUseCase.execute();

    const generateRandomMenus = () => {
      const numberOfItems = Math.floor(Math.random() * 6) + 1;

      return Array.from({ length: numberOfItems }).map(() => {
        const randomIndex = Math.floor(Math.random() * numberOfItems) + 0;
        return mockedMenu[randomIndex];
      });
    };

    const parsedRestaurants = allRestaurants.map((eachRestaurant) => ({
      ...eachRestaurant,
      menu: generateRandomMenus(),
      gallery: eachRestaurant.gallery ? JSON.parse(eachRestaurant.gallery) : [],
    }));

    return res.json(parsedRestaurants);
  }
}

export { ListRestaurantsController };
