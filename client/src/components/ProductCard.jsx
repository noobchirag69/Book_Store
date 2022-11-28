import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../scripts/CartContext';

export const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    const style = {
        "width": "40px"
    };

    return (
        <Card>
            <Card.Body className="py-4">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Rs. {product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Button style={style} className="btn-success mx-3" onClick={() => cart.addOneToCart(product.id)}>+</Button>
                        <span className="text-center">In Cart: {productQuantity}</span>
                        <Button style={style} className="btn-success mx-3" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                        <Button className="w-75 mt-3 btn-danger" onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
                    </>
                    :
                    <Button className="w-75" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    );
};
