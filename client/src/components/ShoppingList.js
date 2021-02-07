import React, { Component } from 'react';
import '../App.css';
import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux';
import { getItems, deleteItems } from '../actions/itemActions.js';
import PropTypes from 'prop-types'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems()
    }
    onDeleteClick = (id) => {
        this.props.deleteItems(id)
    }
    render() {

        const { items } = this.props.item;
        return (
            <Container>

                <ListGroup>
                    <Table>

                        <TransitionGroup className="shopping-list">

                            {items.map(({ _id, ville, stock, orange, banane, pomme, fraise, cerise }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>

                                        <thead>

                                            <tr>
                                                
                                                <th>Ville</th>
                                                <th>Nombre Total de stocks</th>
                                                <th>Stock d'Oranges</th>
                                                <th>Stock de Bananes</th>
                                                <th>Stock de Pommes</th>
                                                <th>Stock de Fraises</th>
                                                <th>Stock de Cerises</th>
                                            </tr>

                                        </thead>

                                        <tbody>
                                            <tr>
                                               
                                                <td> {ville}</td>
                                                <td>  {stock}</td>
                                                <td>{orange}  </td>
                                                <td>{banane}  </td>
                                                <td>{pomme}  </td>
                                                <td>{fraise}  </td>
                                                <td>{cerise}  </td>
                                                <td>
                                                    <Button
                                                        className="remove-btn"
                                                        color="danger"
                                                        size="sm"
                                                        onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                                                </td>
                                            </tr>

                                        </tbody>


                                    </ListGroupItem>
                                </CSSTransition>

                            ))}
                        </TransitionGroup>
                    </Table>
                </ListGroup>

            </Container>



        );
    }

}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItems })(ShoppingList);