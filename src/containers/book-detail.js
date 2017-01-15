import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      // If initial state (null) of bookSelected is still active render placeholder for bookDetails
      return <div>Select a book to get started!</div>
    }
    return (
      <div>
        <p><text-muted><u>Details for:</u></text-muted></p>
        <h3>{this.props.book.title}</h3>
        <img src={this.props.book.cover} />
        <p>Number of pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
