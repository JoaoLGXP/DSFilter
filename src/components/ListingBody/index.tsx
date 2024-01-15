import './styles.css';
import Filter from '../Filter';
import Listing from '../Listing';
import * as productService from '../../services/product-service';
import { ProductDTO } from '../../models/product';
import { useEffect, useState } from 'react';
import { ContextListCount } from '../../utils/context-list-count';
import Header from '../Header';

type QueryParams = {
    valueMax: number;
    valueMin: number;
};

export default function ListingBody() {

    const MIN = 0;
    const MAX = Number.MAX_VALUE;

    const [queryParams, setQueryParams] = useState<QueryParams>({
        valueMax: MAX,
        valueMin: MIN
    });

    const [contextListCount, setContextListCount] = useState<number>(0);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        const newFilter = productService.findByPrice(queryParams.valueMin, queryParams.valueMax);
        setProducts(newFilter);
        setContextListCount(newFilter.length);
    }, [queryParams])

    function handleFilter(min: number, max: number) {
        const newMin = min;
        const newMax = max;
        setQueryParams({ valueMin: newMin || MIN, valueMax: newMax || MAX });
    }

    return (
        <ContextListCount.Provider value={{ contextListCount, setContextListCount }}>
            <Header />
            <div className='dsfilter-container'>
                <Filter onFilter={handleFilter} />
                <div className='dsfilter-listing-content dsfilter-mt20'>
                    {
                        products.map(product =>
                            <Listing key={product.id}
                                product={product}
                            />
                        )
                    }
                </div>
            </div>
        </ContextListCount.Provider>

    );
}