import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <img src="https://img.icons8.com/bubbles/50/000000/money.png" alt="ícone dinheiro" />
        <p data-testid="email-field">
          Email:
          {' '}
          { userEmail }
        </p>
        <p data-testid="total-field">Despesa Total R$</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ userEmail: state.user.email });

export default connect(mapStateToProps)(Header);
