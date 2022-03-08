// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialStateWallet = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialStateWallet, action) => {
  switch (action.type) {
  case 'WALLET_ACTION':
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default walletReducer;
