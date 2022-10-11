import produce from 'immer';
import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTIY_UPDATED,
  ITEM_REMOVED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awsome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item);
  }
  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }
  if (action.type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = action.payload.price;
  }
  if (action.type === ITEM_QUANTIY_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = action.payload.quantity;
  }
}, initialItems);

export default reducer;
