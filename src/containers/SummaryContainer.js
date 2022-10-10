import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubTotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selectors';

const mapStateToProps = (state) => {
  // const subtotal = state.items.reduce((sum, item)=> sum + item.price * item.quantity,0);
  // const tipAmount = (state.tipPercentage * subtotal) / 100;
  // const total = subtotal + tipAmount;
  const subtotal = selectSubTotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
