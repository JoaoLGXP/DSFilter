import Filter from '../Filter';
import Listing from '../Listing';
import './styles.css';

export default function ListingBody() {
    return (
        <div className='dsfilter-container'>
            <Filter />
            <Listing />
        </div>
    );
}