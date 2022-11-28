import { useState, useContext } from 'react';
import { Button, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../scripts/CartContext';
import { CartProduct } from './CartProduct';

export const NavbarComponent = () => {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    })
      .then(response => response.json())
      .then(data => {
        if (data.url) {
          window.location.assign(data.url);
        }
      })
      .catch(err => console.log(err));
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <Navbar expand="sm" className="mt-3">
        <Navbar.Brand href="/" className="fw-bold">Book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Button className="btn-warning px-5" onClick={handleShow}>Items in Cart: {productsCount}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ?
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))}
              <h2>Total: Rs. {cart.getTotalCost()}</h2>
              <Button size="lg" variant="success" onClick={checkout}>Proceed to Payment</Button>
            </>
            :
            <h2>Your cart is empty!</h2>
          }
        </Modal.Body>
      </Modal>
    </>
  );
};