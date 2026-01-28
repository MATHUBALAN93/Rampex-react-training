import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const product = [
        { id: 1, name: "Laptop", price: "30000" },
        { id: 2, name: "Mouse", price: "30000" },
        { id: 3, name: "Phone", price: "30000" },
        { id: 4, name: "Keyboard", price: "30000" },
    ]

    return (
        <div>
            <h1>Products</h1>
                {product.map((p) => (
                <div key={p.id}>
                    <h3>{p.name}</h3>
                    <h3>{p.price}</h3>
                    <Link to={`/products/${p.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}
export default Product