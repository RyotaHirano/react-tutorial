import $ from 'jquery';
import { Component } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.onCommentSubmit = this.commentSubmit.bind(this);

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data}); // dataの更新
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return(
      <div className="commentBox">
        <h1>CommentBox</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.onCommentSubmit} />
      </div>
    );
  }

  commentSubmit(comment) {
    const comments = this.state.data;
    const newComment = comments.concat([comment]);
    this.setState({data: newComment});
  }
}
