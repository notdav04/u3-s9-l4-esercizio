import SingleBook from "./SingleBook";
import { Component } from "react";
import { Form, Row, Container } from "react-bootstrap";
class BookList extends Component {
  state = {
    ricerca: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const libriFiltrati = this.props.list.filter((book) => {
      return book.title
        .toLowerCase()
        .includes(this.state.ricerca.toLowerCase());
    });
    return (
      <div>
        <div className="d-flex justify-content-center">
          <Form className="w-50" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ricerca</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci una parola o un testo da cercare!"
                value={this.state.ricerca}
                onChange={(e) =>
                  this.setState({
                    ricerca: e.target.value
                  })
                }
              />
            </Form.Group>
          </Form>
        </div>
        <Container>
          <Row>
            {!this.state.ricerca &&
              this.props.list.map((book) => {
                return <SingleBook key={book.asin} book={book} />;
              })}
            {this.state.ricerca &&
              libriFiltrati.map((book) => {
                return <SingleBook key={book.asin} book={book} />;
              })}
          </Row>
        </Container>
      </div>
    );
  }
}
export default BookList;
