// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { NEW_EXPENSE, CURRENCIES } from '../actions';

const initialStateWallet = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialStateWallet, action) => {
  let newExpense = null;
  switch (action.type) {
  case NEW_EXPENSE:
    newExpense = { id: state.expenses.length, ...action.payload };
    return {
      ...state,
      expenses: [...state.expenses, newExpense],
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
