import React, { Component } from 'react';
import { connect } from 'react-redux';
// When a Component (like BookList) is connected to the Redux state, it becomes a Container/Smart-Component
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // State of book list and active book will show up as props in BookList
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  // When selectBook is called, result is passed to reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
} // Everything dispatched will be send to props BookList container

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// Promote BookList from Component to Container - make selectBook avaiable as prop by dispatch
