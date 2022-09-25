import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MyCard() {
  return (
    <div className="cardContent">
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
      <ListGroup className="list-group-flush">
          <ListGroup.Item><input type="radio" /></ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}