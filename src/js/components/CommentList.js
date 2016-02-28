import { Component } from 'react';
import Comment from '../components/Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author} text={comment.text} key={Date.now() * Math.random()}/>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
