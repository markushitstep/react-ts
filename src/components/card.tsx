import React, { FC, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

export const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    const [state, setState] = useState(0);
    return (
        <div
            onClick={() => onClick(state)}
            style={{
                width, height,
                border: variant === CardVariant.outlined ? '1px solid green' : '1px solid red',
                backgroundColor: variant === CardVariant.primary ? 'lightGray' : 'none'
            }}>
            {
                children
            }
        </div>
    )
}