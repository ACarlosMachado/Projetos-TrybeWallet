import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Form from '../Components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
};

const mapStateToProps = (state) => ({ userEmail: state.user.email });

export default connect(mapStateToProps)(Wallet);
