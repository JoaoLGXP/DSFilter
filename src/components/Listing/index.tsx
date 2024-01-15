import './styles.css';
import { ProductDTO } from '../../models/product';

type Props = {
    product: ProductDTO
}

export default function Listing({ product }: Props) {
    return (
        <div className='dsfilter-listing-card'>
            <div className='dsfilter-listing-product-name'>
                {product.name}
            </div>
            <div className='dsfilter-listing-product-price'>
                R$ {product.price.toFixed(2)}
            </div>
        </div>
    );
}