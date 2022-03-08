// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialStateUser = {
  email: '',
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
  case 'USER_ACTION':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
