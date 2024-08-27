import {useEffect, useState} from 'react'

function App() {
    const [products, setProducts] = useState([])

    async function getProducts() {
        const response = await fetch('http://localhost:3000/products')
        const products = await response.json()
        setProducts(products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <h1>Products</h1>
            {
                <ul>
                    {
                        products.map((product, index) => (
                            <li key={index}>
                                {product.name}: {product.price}
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

export default App
