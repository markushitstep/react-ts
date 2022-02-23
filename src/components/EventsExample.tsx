import React, { FC, useRef, useState } from 'react';
import { ITodo } from '../types/types';


export const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)       


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(inputRef.current?.value)

    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        //e.dataTransfer
        console.log('DRAG');
    }

    const overHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
        setIsDrag(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
        setIsDrag(false);
        console.log('DROP');
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"/>
            <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>click</button>
            <div onDrag={dragHandler} draggable style={{ width: '200px', height: "200px", backgroundColor: "red", marginBottom: '40px' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={overHandler}
                style={{ width: '200px', height: "200px", backgroundColor: isDrag ? "red" : 'blue' }}
            >

            </div>
        </div>
    )
}