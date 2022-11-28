import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../scripts/products'
import { ProductCard } from '../components/ProductCard'

export const Store = () => {
  return (
    <div>
      <h1 className="text-center my-4">Welcome to Book Store!</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}
