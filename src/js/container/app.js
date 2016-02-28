import { Component } from 'react';
import CommentBox from '../components/CommentBox';
const URL = 'https://raw.githubusercontent.com/reactjs/react-tutorial/master/comments.json';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <CommentBox url={URL} />
    );
  }
}
