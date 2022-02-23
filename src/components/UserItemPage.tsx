import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types'
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom'

export const UserItemPage: FC = () => {
    const [user, setUsers] = useState<IUser | null>(null)
    const params = useParams<{id: string}>();
    const navigate = useNavigate()

    useEffect(() => {
        fetchUse()
    }, [])

    const fetchUse = async () => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUsers(response.data);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users') }>Back</button>
            <h1>Страница пользователей {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.street}
            </div>
        </div>
    )
}
