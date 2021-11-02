import { ActionType } from '../action-types/index';

const init = {
  item: [
    {
      image:
        'https://dnvefa72aowie.cloudfront.net/origin/article/202110/D0F168A939DD3A856D73AEA7D854D582E6431E0A6C93FE60C965DBA568D0C3D4.jpg?q=82&s=300x300&t=crop',
      title: '냉장고',
      location: '서울 서초구 방배1동',
      time: '오후 2시, 6시',
    },
    {
      image:
        'https://dnvefa72aowie.cloudfront.net/origin/article/202110/D0F168A939DD3A856D73AEA7D854D582E6431E0A6C93FE60C965DBA568D0C3D4.jpg?q=82&s=300x300&t=crop',
      title: '냉장고',
      location: '서울 서초구 방배1동',
      time: '오후 2시, 6시',
    },
    {
      image:
        'https://dnvefa72aowie.cloudfront.net/origin/article/202110/D0F168A939DD3A856D73AEA7D854D582E6431E0A6C93FE60C965DBA568D0C3D4.jpg?q=82&s=300x300&t=crop',
      title: '냉장고',
      location: '서울 서초구 방배1동',
      time: '오후 2시, 6시',
    },
    {
      image:
        'https://dnvefa72aowie.cloudfront.net/origin/article/202110/D0F168A939DD3A856D73AEA7D854D582E6431E0A6C93FE60C965DBA568D0C3D4.jpg?q=82&s=300x300&t=crop',
      title: '냉장고',
      location: '서울 서초구 방배1동',
      time: '오후 2시, 6시',
    },
    {
      image:
        'https://dnvefa72aowie.cloudfront.net/origin/article/202110/D0F168A939DD3A856D73AEA7D854D582E6431E0A6C93FE60C965DBA568D0C3D4.jpg?q=82&s=300x300&t=crop',
      title: '냉장고',
      location: '서울 서초구 방배1동',
      time: '오후 2시, 6시',
    },
    {
      image:
        'https://dnvefa72aowie.cloudfront.net/origin/article/202110/D0F168A939DD3A856D73AEA7D854D582E6431E0A6C93FE60C965DBA568D0C3D4.jpg?q=82&s=300x300&t=crop',
      title: '냉장고',
      location: '서울 서초구 방배1동',
      time: '오후 2시, 6시',
    },
    {
      image:
        'https://dnvefa72aowie.cloudfront.net/origin/article/202110/D0F168A939DD3A856D73AEA7D854D582E6431E0A6C93FE60C965DBA568D0C3D4.jpg?q=82&s=300x300&t=crop',
      title: '냉장고',
      location: '서울 서초구 방배1동',
      time: '오후 2시, 6시',
    },
  ],
};

export const groceryReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ActionType.API_GET:
      return { ...state, item: payload };
    case ActionType.ADD_GROCERY:
      return { ...state, item: payload };
    default:
      return state;
  }
};