import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../scripts/CartContext';
import { getProductData } from '../scripts/products';

export const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>Amount: {quantity}</p>
            <p>Price: Rs. {quantity * productData.price}</p>
            <Button size="sm" variant="danger" onClick={() => cart.deleteFromCart(id)}>Remove From Cart</Button>
            <hr/>
        </>
    )
}
