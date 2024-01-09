import './styles.css';

export default function Header() {
    return (
        <header>
            <div className="dsfilter-header-content dsfilter-container">
                <div className='dsfilter-header-title'>
                    <h1>DSFilter</h1>
                </div>
                <div className='dsfilter-header-products-quantity'>
                    <p>0 produto(s)</p>
                </div>
            </div>

        </header>
    );
}