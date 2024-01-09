import './styles.css';

type Props = {
    text: string;
}

export default function Button({ text }: Props) {
    return (
        <button className='dsfilter-button'>{text}</button>
    );
}