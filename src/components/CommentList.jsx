import { Component } from "react";
import SingleComment from "./SingleComment";
class CommentList extends Component {
  state = {
    listaCommenti: this.props.listaCommenti
  };
  componentDidMount() {
    console.log("listacommenti: ", this.props.listaCommenti);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.listaCommenti.map((element) => (
            <SingleComment key={element._id} comment={element.comment} />
          ))}
        </ul>
      </div>
    );
  }
}
export default CommentList;
