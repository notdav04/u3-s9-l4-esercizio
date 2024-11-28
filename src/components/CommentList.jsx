import { Component } from "react";

class CommentList extends Component {
  state = {
    listaCommenti: this.props.listaCommenti
  };
  render() {
    return (
      <div>
        ok lista passata
        <ul>
          {this.state.listaCommenti.map((comment, index) => (
            <li key={index}>{comment.comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CommentList;
