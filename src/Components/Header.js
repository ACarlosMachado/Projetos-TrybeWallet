import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    // console.log('expense', expenses);

    let sumExpenses = 0;
    if (expenses.length > 0) {
      expenses.forEach((expense) => {
        const getCurrency = expense.currency;
        const getAsk = expense.exchangeRates[getCurrency].ask;
        sumExpenses += expense.value * getAsk;
        // console.log('sumexpenses =>', sumExpenses);
        // console.log('getAsk ===>', getAsk);
      });
    }

    // (expenses.length > 0) ? expenses.forEach((expense) => {
    //   const { getAsk } = expense.exchangeRates[expense.currency];
    //   console.log('getAsk ===>', getAsk);
    // })
    //   : sumExpenses = 0;
    return (
      <header>
        <img src="https://img.icons8.com/bubbles/50/000000/money.png" alt="ícone dinheiro" />
        <p data-testid="email-field">
          Email:
          {' '}
          { userEmail }
        </p>
        <p data-testid="total-field">
          Despesa Total R$
          {' '}
          {sumExpenses.toFixed(2)}

        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
