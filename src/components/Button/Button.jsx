// @flow

import styles from './Button.module.scss';
import * as React from 'react';

type ButtonProps = {
    children: React.Node,
    theme?: 'dark' | 'submit' | 'disabled',
    onClick: () => void,
    align?: 'left' | 'right'
}

const Button = ({ children, theme, onClick, align }: ButtonProps) => (
    <button
        className={`${styles.button} ${styles[align || 'left']} ${styles[theme || 'submit']}`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;