// Coloque aqui suas actions

export const USER_ACTION = 'USER_ACTION';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const CURRENCIES = 'CURRENCIES';

const userAction = (email) => ({
  type: 'USER_ACTION',
  payload: email,
});

export function newExpense(param) {
  return {
    type: NEW_EXPENSE,
    payload: param,
  };
}

export function walletCurriencies(param) {
  return {
    type: CURRENCIES,
    payload: param,
  };
}

export default userAction;
