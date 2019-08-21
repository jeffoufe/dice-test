// @flow

import styles from './Button.module.scss';
import * as React from 'react';

type ButtonProps = {
    children: React.Node,
    theme?: 'dark' | 'blue' | 'disabled',
    onClick?: () => void,
    align?: 'left' | 'right',
    className?: string
}

const Button = ({ children, theme, onClick, align, className }: ButtonProps) => {
    const themeClassName = `button-${theme || 'blue'}`;
    const alignClassName = align === 'right' ? styles['button-right'] : '';
    return (
        <button
            className={`${styles[themeClassName]} ${alignClassName} ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;