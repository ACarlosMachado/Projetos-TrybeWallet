import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

Wallet.propTypes = {
};

const mapStateToProps = (state) => ({ userEmail: state.user.email });

export default connect(mapStateToProps)(Wallet);
