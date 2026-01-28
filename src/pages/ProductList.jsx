import { useParams, Link } from 'react-router-dom'

const ProductList = () => {

    const productList = [
        { id: 1, name: "Laptop", price: "30000", description: "laptop is mandatory" },
        { id: 2, name: "Mouse", price: "30000", description: "Mouse is useful" },
        { id: 3, name: "Phone", price: "30000", description: "Phone is smart" },
        { id: 4, name: "Keyboard", price: "30000", description: "Keyboard is key" },
    ]
    const {id} = useParams();
    const product = productList.find((p) => p.id === Number(id));
    
    // if (!product) {
    //     return <div><h1>Product not found</h1></div>
    // }
    
    return (
        <div>
            <h1>Product Details</h1>
            <h2>Name: {product.name}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
        </div>
    )
}

export default ProductList