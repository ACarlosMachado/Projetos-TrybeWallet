import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { objectOf, string } from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask)}</td>
              <td>
                { Number(expense.value * expense.exchangeRates[expense.currency]
                  .ask)}
              </td>
              <td>Real</td>
              <td>Edita/Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(objectOf(string)).isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps)(Expenses);
