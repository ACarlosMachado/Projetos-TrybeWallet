import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { newExpense, walletCurriencies } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: '',
    };
    this.saveNewExpense = this.saveNewExpense.bind(this);
    this.fetchAllApi = this.fetchAllApi.bind(this);
  }

  async componentDidMount() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // console.log('retorno Api====', Object.keys(data));
    const arrayCurrency = Object.keys(data);
    const removeUSDT = arrayCurrency.filter((currencies) => (currencies !== 'USDT'));

    const { dispatchCurrencies } = this.props;
    dispatchCurrencies(removeUSDT);
  }

  async fetchAllApi() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const data = await response.json();
    // const removeUSDT = data.Object.keys(data).filter((valor) => valor !== 'USDT');
    // console.log('removeUDT ===> ', removeUSDT);

    this.setState({ exchangeRates: data });
    return data;
  }

  async saveNewExpense() {
    const { dispatchExpense } = this.props;
    const allApi = await this.fetchAllApi();
    // console.log('cliquei');
    // console.log('resultado da api =>', allApi);
    this.setState({ exchangeRates: allApi });
    dispatchExpense(this.state);
    // document.getElementById('value').value = '';
    this.setState({ value: '', currency: 'USD' });
  }

  handleChanges({ target }) {
    const { id, value } = target;
    console.log(id, value);
    this.setState({ [id]: value });
  }

  render() {
    const { currencies } = this.props;
    const { value } = this.state;

    return (
      <form>
        <label htmlFor="value">
          valor
          <input
            value={ value }
            id="value"
            type="number"
            data-testid="value-input"
            onChange={ (e) => this.handleChanges(e) }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            data-testid="currency-input"
            onChange={ (e) => this.handleChanges(e) }
          >
            {
              currencies.map((moeda, index) => (
                <option
                  key={ index }
                  value={ moeda }
                  data-testid={ moeda }
                >
                  {moeda}

                </option>))
            }

          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            data-testid="method-input"
            onChange={ (e) => this.handleChanges(e) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            id="tag"
            data-testid="tag-input"
            onChange={ (e) => this.handleChanges(e) }

          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            data-testid="description-input"
            onChange={ (e) => this.handleChanges(e) }
          />
        </label>
        <button
          id="btnSubmit"
          type="button"
          placeholder="Adicionar despesa"
          onClick={ this.saveNewExpense }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  dispatchExpense: PropTypes.func.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(string).isRequired,
};

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (payload) => dispatch(newExpense(payload)),
  dispatchCurrencies: (payload) => dispatch(walletCurriencies(payload)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
