import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updateItemPrice,
  updateItemQuantity
} from '../store/items/actions';
import { selectItemSubTotal } from '../store/items/selectors';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     total: parseInt(ownProps.price * ownProps.quantity)
//   };
// };

const mapStateToProps = (state, ownProps) => ({
  total: selectItemSubTotal(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid),
      updatePrice: (price) => updateItemPrice(ownProps.uuid, price),
      updateQuantity: (quantity) => updateItemQuantity(ownProps.uuid, quantity)
    },
    dispatch
  );
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
