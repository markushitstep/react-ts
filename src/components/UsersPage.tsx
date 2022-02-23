import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types'
import { UserItem } from './UserItem'
import List from './List'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


export const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <List items={users} renderItem={(user: IUser) =>
            <UserItem
                onClick={(user) => navigate('/user/' + user.id)}
                user={user}
                key={user.id} />}
        />
    )
}