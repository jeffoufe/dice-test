// @flow

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import Button from '../../components/Button/Button';
import LogoLight from '../../assets/logo-light.png';
import styles from './Home.module.scss';

type PureHomeProps = {
    history: {
        push: (string) => void
    }
}

export const PureHome = ({ history }: PureHomeProps) => {
    const [search, setSearch] = useState('');

    return (
        <div className={styles.container}>
            <img 
                src={LogoLight} 
                alt='logo-light' 
                className={styles.logo} 
            />
            <div className={styles['search-container']}>
                <input 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search} 
                    className={styles['search-input']}
                    placeholder='Enter a venue...'
                />
                <Button
                    theme='dark'
                    align='right'
                    onClick={() => {
                        if (search) {
                            history.push('/events')}
                        }
                    }
                >
                    SEARCH
                </Button>
            </div>
        </div>
    );
};

const Home = withRouter(PureHome);
export default Home