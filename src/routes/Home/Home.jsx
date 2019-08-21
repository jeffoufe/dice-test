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

    const goToEvents = (search: string) => {
        if (search) {
            history.push(`/events?venue=${search}`);
        }
    };

    return (
        <div className={styles['home-container']}>
            <img 
                src={LogoLight} 
                alt='logo-light' 
                className={styles['home-logo']} 
            />
            <div className={styles['home-search-container']}>
                <input 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search} 
                    className={styles['home-search-input']}
                    placeholder='Enter a venue...'
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            goToEvents(search);
                        }
                    }}
                />
                <Button
                    theme='dark'
                    align='right'
                    onClick={() => goToEvents(search)}
                >
                    SEARCH
                </Button>
            </div>
        </div>
    );
};

const Home = withRouter(PureHome);
export default Home