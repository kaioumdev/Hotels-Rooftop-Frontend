import React from 'react'
import { useGetUserQuery } from '../../../redux/features/auth/authApi'

const ManageUser = () => {
    const { data: user = [], error, isLoading, refetch } = useGetUserQuery();
    return (
        <div>ManageUser</div>
    )
}

export default ManageUser