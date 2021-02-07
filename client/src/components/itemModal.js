import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody, Form, FormGroup, Input, Fade, Label, ListGroupItem
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem, getItems, modifyItem } from '../actions/itemActions'


class ItemModal extends Component {
    componentDidMount() {
        this.props.getItems()
    }
    state = {
        isOpen: false,
        fadeIn: false,
        modal: false,
        modal2: false,
        name: '',
        select1: 'Banane',
        select2: '',
        select3: '',
        stock: 0,
        orange: 0,
        banane: 0,
        pomme: 0,
        fraise: 0,
        cerise: 0,
        Quantity: 0
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    toggle2 = () => {
        this.setState({
            modal2: !this.state.modal2,
            fadeIn: false
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            ville: this.state.name,
            stock: parseInt(this.state.banane, 10) + parseInt(this.state.orange, 10) + parseInt(this.state.cerise, 10) + parseInt(this.state.pomme, 10) + parseInt(this.state.fraise, 10),
            orange: this.state.orange,
            banane: this.state.banane,
            pomme: this.state.pomme,
            fraise: this.state.fraise,
            cerise: this.state.cerise
        }


        this.props.addItem(newItem)
        // close modal 
        this.toggle();



    }
    onSubmit2 = (e) => {
        e.preventDefault()
        if (this.state.select2 === this.state.select3) {
            this.setState({ fadeIn: true })
        } else {
            this.props.modifyItem({
                select1: this.state.select1,
                select2: this.state.select2,
                select3: this.state.select3,
                Quantity: this.state.Quantity,
            })
           
                this.toggle2();
            
            
        }

    }

    render() {
        const { items } = this.props.item;

        return (
            <div>
                <Button color="success"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}>Ajouter une ville</Button>
                <Button color="dark"
                    style={{ marginLeft: '1rem', marginBottom: '2rem' }}
                    onClick={this.toggle2}>Transferer des Fruits</Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.state.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Ajout d'une ville
                 </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>

                                <Input
                                    type='text'
                                    name='name'
                                    id='item'
                                    placeholder='Nom de la Ville'
                                    onChange={this.onChange}
                                ></Input>



                                <Input
                                    type='number'
                                    name='orange'
                                    id='item'
                                    style={{ marginTop: '1rem' }}
                                    placeholder="Stock d'Oranges "
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type='number'
                                    name='banane'
                                    id='item'
                                    style={{ marginTop: '1rem' }}
                                    placeholder='Stock de Bananes'
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type='number'
                                    name='pomme'
                                    id='item'
                                    style={{ marginTop: '1rem' }}
                                    placeholder='Stock de Pommes'
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type='number'
                                    name='fraise'
                                    id='item'
                                    style={{ marginTop: '1rem' }}
                                    placeholder='Stock de Fraises'
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type='number'
                                    name='cerise'
                                    id='item'
                                    style={{ marginTop: '1rem' }}
                                    placeholder='Stock de Cerises'
                                    onChange={this.onChange}
                                ></Input>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '1rem' }}
                                    block>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.modal2}
                    toggle={this.state.toggle2}>
                    <ModalHeader toggle={this.toggle2}>
                        Transfer d'un stock
                 </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit2} >
                            <FormGroup>
                                <Label for="exampleSelect">Type de Stock de Fruits</Label>
                                <Input type="select" name="select1" id="exampleSelect" onChange={this.onChange}>
                                    <option>Banane</option>
                                    <option>Orange</option>
                                    <option>Pomme</option>
                                    <option>Fraise</option>
                                    <option>Cerise</option>
                                </Input>
                            </FormGroup>

                            <ListGroupItem style={{ marginTop: '1rem' }}>
                                <Label for="exampleSelect">Ville d'Envoi</Label>
                                <Input type="select" name="select2" id="exampleSelect" style={{ marginBottom: '1rem' }} onChange={this.onChange}>
                                    <option>Ville d'Envoi</option>
                                    {items.map(({ ville }) => (
                                        <option style={{ marginTop: '1rem' }}>{ville}</option>
                                    ))}


                                </Input>
                                <Label for="exampleSelect">Ville de Reception</Label>
                                <Input type="select" name="select3" id="exampleSelect" onChange={this.onChange}>
                                    <option>Ville de Reception</option>
                                    {items.map(({ ville }) => (
                                        <option style={{ marginTop: '1rem' }}>{ville}</option>
                                    ))}
                                </Input>

                            </ListGroupItem>


                            <Input
                                type='number'
                                name='Quantity'
                                id='item'
                                style={{ marginTop: '1rem' }}
                                placeholder='Quantity'
                                onChange={this.onChange}
                            ></Input>

                            <Fade in={this.state.fadeIn} tag="h5" className="mt-3" color="red">
                                Can't have a town send to itself ! Changez une ville
                                </Fade>
                           
                            <Button
                                color="dark"
                                style={{ marginTop: '1rem' }}
                                block>Send Transfer</Button>

                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { addItem, getItems, modifyItem })(ItemModal)