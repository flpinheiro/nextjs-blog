import styles from './alert.module.css'
import cn from 'classnames'
import React from 'react';

interface AlertProps { 
    children: React.ReactNode, 
    type: string 
}

export default function Alert({ children, type }: AlertProps) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    );
}