
import { ADD_TO_CART, REMOVE_FROM_CART, LIST_PRODUCTS } from './actions';


const initialState = {
  products: [
    { id: 1, name: 'Vivo SmartPhone', price: 10000 ,image:"./images/vivo.png"},
    { id: 2, name: 'Dell Laptop', price: 50000,image:"./images/DellImage.png" },
    { id: 3, name: 'Headphones', price: 2000 ,image:"./images/headphones.jpg"},
    { id: 4, name:'Tablet' ,price:10000,image:"./images/tablet.png"}
  ],
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case LIST_PRODUCTS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default rootReducer;
