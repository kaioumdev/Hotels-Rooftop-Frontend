import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div>
            <div>
                <h1>Hi, {user?.username}</h1>
                <p>Welcome to the admin dashboard</p>
                <p>Here you can manage your hotel's posts, manage rooms, and other administrative tasks.</p>
            </div>
        </div>
    )
}

export default Dashboard