import {useParams, Link} from 'react-router-dom';


const Product = () => {

const { id } = useParams();


    return(
        <div>
            <Link to="/product/1">Producto 1</Link>
                <br />Product {id}
        </div>
)
}

export default Product;
