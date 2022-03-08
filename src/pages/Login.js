import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userAction from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonLoginDisabled: true,
  };

  saveEmailInState = () => {
    const { email } = this.state;
    const { history, saveEmail } = this.props;
    saveEmail(email);
    history.push('/carteira');
  }

  enabledButton() {
    const { email, password } = this.state;
    // Regex para verificação do email => https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const emailRegex = /^\S+@\S+\.\S+$/;
    // Método .match() => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
    const validEmail = email.match(emailRegex);
    const minLengthPassword = 6;

    if (validEmail && password.length >= minLengthPassword) {
      this.setState({ isButtonLoginDisabled: false });
    } else {
      this.setState({ isButtonLoginDisabled: true });
    }
  }

  handleChanges({ target }) {
    const { id, value } = target;
    console.log(id, value);
    this.setState({ [id]: value }, this.enabledButton);
  }

  render() {
    const { isButtonLoginDisabled } = this.state;
    return (
      <form className="formLogin">
        <input
          type="email"
          data-testid="email-input"
          id="email"
          placeholder="Digite seu email"
          onChange={ (e) => this.handleChanges(e) }
        />
        <input
          type="password"
          data-testid="password-input"
          id="password"
          placeholder="Senha"
          onChange={ (e) => this.handleChanges(e) }
        />
        <button
          type="button"
          disabled={ isButtonLoginDisabled }
          onClick={ this.saveEmailInState }
        >
          Entrar
        </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(userAction(email)),
});

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// Consultei os GitHub a seguir para enterder como fazer o mapDispatchToProps pelo onClick do botão;
// https://github.com/tryber/sd-018-a-project-trybewallet/pull/94
// https://github.com/tryber/sd-018-a-project-trybewallet/pull/87
