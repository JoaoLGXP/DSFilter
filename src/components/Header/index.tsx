import './styles.css';
import { useContext } from 'react';
import { ContextListCount } from '../../utils/context-list-count';

export default function Header() {

    const { contextListCount } = useContext(ContextListCount);

    return (
        <header>
            <div className="dsfilter-header-content dsfilter-container">
                <div className='dsfilter-header-title'>
                    <h1>DSFilter</h1>
                </div>
                <div className='dsfilter-header-products-quantity'>
                    <p>{contextListCount} produto(s)</p>
                </div>
            </div>
        </header>
    );
}