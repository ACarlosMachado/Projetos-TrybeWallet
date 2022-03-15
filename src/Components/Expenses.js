import React from 'react';
import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <td>Descrição</td>
          <td>Tag</td>
          <td>Método de pagamento</td>
          <td>Valor</td>
          <td>Moeda</td>
          <td>Câmbio utilizado</td>
          <td>Valor convertido</td>
          <td>Moeda de conversão</td>
          <td>Editar/Excluir</td>
        </tr>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ despesas: state.wallet.Expenses });

export default connect(mapStateToProps)(Expenses);
