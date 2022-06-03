import { Link } from 'react-router-dom';

import Button from 'components/Button/Button';
import 'components/BackLink/BackLink.css';

export default function BackBtn() {
    return (
        <div className='back-to-home-link'>
            <Link to='/'>
                <Button text="Back to Homepage" />
            </Link>
        </div>
    );
}
