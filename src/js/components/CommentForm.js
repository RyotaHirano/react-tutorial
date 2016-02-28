import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return(
      <div className="commentForm">
        <form className="commentForm" onSubmit={this.onSubmit}>
          <input type="text" placeholder="Your Name" ref="author"/>
          <input type="text" placeholder="Say Something..." ref="text"/>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();

    const author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    const text = ReactDOM.findDOMNode(this.refs.text).value.trim();

    if(!author || !text) {
      return;
    }

    this.props.onCommentSubmit(
      {
        author: author,
        text: text
      }
    );

    // 入力してある情報を削除
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
    return;
  }
}
