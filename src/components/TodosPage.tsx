import React, { FC, useState, useEffect } from 'react';
import { ITodo } from '../types/types'
import { TodoItem } from './TodoItem'
import List from './List'
import axios from 'axios';

export const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
        <h1>dsgdsgfdsfdsfds</h1>
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
        </>
    )
}