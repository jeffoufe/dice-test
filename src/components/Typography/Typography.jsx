// @flow

import React from 'react';
import styles from './Typography.module.scss';

import type { Node } from 'react';

type TypographyProps = {
    children: Node,
    className?: string,
    inline?: boolean
}

export const Text = ({ children, className, inline = false }: TypographyProps) => (
    <div className={`${styles.text} ${inline ? styles.inline : ''} ${className || ''}`}>{children}</div>
);

export const ImportantText = ({ children, className, inline = false }: TypographyProps) => (
    <div className={`${styles.important} ${inline ? styles.inline : ''} ${className || ''}}`}>{children}</div>
);

export const BlueHeader = ({ children, className, inline = false }: TypographyProps) => (
    <div className={`${styles['header-blue']} ${inline ? styles.inline : ''} ${className || ''}}`}>{children}</div>
);

export const GreyHeader = ({ children, className, inline = false }: TypographyProps) => (
    <div className={`${styles['header-grey']} ${inline ? styles.inline : ''} ${className || ''}}`}>{children}</div>
);