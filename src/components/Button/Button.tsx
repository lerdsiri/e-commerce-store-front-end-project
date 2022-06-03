import 'components/Button/Button.css';

export default function Button({text, clickHandler}: {text: string, clickHandler: any}) {
  return (
    <button onClick={clickHandler} className='btn'>
        {text}
    </button>
  )
}
