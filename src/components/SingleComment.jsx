import { Component } from "react";

class SingleComment extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props.comment);
  }
  render() {
    return (
      <li>
        <p>{this.props.comment}</p>
        {/* <small>
          Voto: {comment.rate}- autore: {comment.author}
        </small> */}
      </li>
    );
  }
}

export default SingleComment;
