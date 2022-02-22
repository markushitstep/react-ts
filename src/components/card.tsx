import React, {FC} from 'react';

interface CardProps{
    width?: string;
    height?: string;
    variant?: string;
}

export const Card: FC<CardProps> = ({width, height, children, variant}) => {
    return (
        <div style={{width, height, border: '1px solid green'}}>
            {
                children
            }
        </div>
    )
}