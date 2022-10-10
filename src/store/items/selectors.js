const { createSelector } = require('reselect');

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;
export const selectItem = (state, props) => {
  return state.items.find((item) => item.uuid === props.uuid);
};

export const selectItemSubTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);

export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
