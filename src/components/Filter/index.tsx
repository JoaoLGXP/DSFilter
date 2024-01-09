import Button from '../Button';
import './styles.css';

export default function Filter() {
    return (
        <form className='dsfilter-mt20'>
            <div className='dsfilter-filter-input-field dsfilter-mb20'>
                <input type="text" placeholder='Preço mínimo' />
            </div>
            <div className='dsfilter-filter-input-field dsfilter-mb20'>
                <input type="text" placeholder='Preço máximo' />
            </div>
            <div>
                <Button text='Filtrar' />
            </div>
        </form>
    );
}