/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import { useState } from 'react';

type Props = {
    onFilter: Function;
}

type FormData = {
    minimum?: number;
    maximum?: number;
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({
        minimum: undefined,
        maximum: undefined
    });

    function handleImputChangeMinimum(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    function handleImputChangeMaximum(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setFormData(formData);
        onFilter(formData.minimum, formData.maximum);
    }

    return (
        <form onSubmit={handleSubmit} className='dsfilter-mt20'>
            <div className='dsfilter-filter-input-field dsfilter-mb20'>
                <input
                    name='minimum'
                    value={formData.minimum || ""}
                    type="text"
                    placeholder='Preço mínimo'
                    onChange={handleImputChangeMinimum}
                />
            </div>
            <div className='dsfilter-filter-input-field dsfilter-mb20'>
                <input
                    name='maximum'
                    value={formData.maximum || ""}
                    type="text"
                    placeholder='Preço máximo'
                    onChange={handleImputChangeMaximum}
                />
            </div>
            <div>
                <button type='submit' className='dsfilter-button'>Filtrar</button>
            </div>
        </form>
    );
}