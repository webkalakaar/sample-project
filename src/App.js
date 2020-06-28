import React from 'react';
import './App.css';
import { Button, ListGroup, ListGroupItem, Container, Row, Col, Badge } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { SET_ITEM, REMOVE_ITEM } from './store/type';
import shortid from 'shortid';

/*
  Advantages of using hooks:
    - One of the main advantage of using hooks is that it brings more readability and simplicity to code
    - We do not need to watch store state changes, use selector handles it by its own
       - like in my current example I do not need to watch that whether store items has new data or not
    - we do not need to use connect method to connect components to redux as a result it is more clear and easy to understand that which props comes form store and which are its own porps
*/

const App = () => {

  const items = useSelector(state => state.items);

  const dispatch = useDispatch();

  const addItem = (count) => dispatch({
    type: SET_ITEM,
    data: {
      id: shortid.generate(),
      name: "Item "+ count
    }
  })

  const removeItem = (itemId) => dispatch({
    type: REMOVE_ITEM,
    id:itemId
  })

  return (
    <Container>
      <Row>
        <Col xs={12}>
          {
            (items.length > 0) ? (
              <React.Fragment>
                <h2>Items in your list</h2>
                <ListGroup>
                  {
                    items.map(item => (
                      <ListGroupItem key={item.id}> {item.name} <Badge pill onClick={() => removeItem(item.id)}>x</Badge></ListGroupItem>
                    ))
                  }
                </ListGroup>
                <br />
                <Button onClick={() => addItem(items.length + 1)} size="sm" color="success">Add more</Button>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  You do not have any items in your list, <Button size="sm" color="success" onClick={() => addItem(1)}>click here </Button> to add one
                </React.Fragment>
              )
          }

        </Col>
      </Row>
    </Container>
  )
}

export default App;
