// @flow

import styles from './Button.module.scss';
import * as React from 'react';

type ButtonProps = {
    children: React.Node,
    theme?: 'dark' | 'blue' | 'disabled',
    onClick?: () => void,
    align?: 'left' | 'right'
}

const Button = ({ children, theme, onClick, align }: ButtonProps) => {
    const className = `button-${theme || 'blue'}`;
    return (
        <button
            className={`${styles[className]} ${styles[align || 'left']}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;