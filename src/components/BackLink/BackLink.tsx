import { Link } from 'react-router-dom';

import 'components/BackLink/BackLink.css';

export default function BackBtn() {
    return (
        <Link to='/' className='back-home'>Back to Homepage</Link>
    );
}
