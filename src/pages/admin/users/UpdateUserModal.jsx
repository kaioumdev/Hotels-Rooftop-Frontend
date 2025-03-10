import React, { useState } from 'react';
import { useGetUserQuery, useUpdateUserRoleMutation } from '../../../redux/features/auth/authApi';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateRole } from '../../../redux/features/auth/authSlice';

const UpdateUserModal = ({ user, onClose, onRoleUpdate }) => {
    const [role, setRole] = useState(user?.role);
    const [updateUserRole] = useUpdateUserRoleMutation();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.user);
    const { refetch } = useGetUserQuery();

    const handleUpdateRole = async () => {
        try {
            await updateUserRole({ userId: user._id, role }).unwrap();

            // Update Redux state immediately
            dispatch(updateRole({ role }));

            // Update localStorage if the current user is updating their own role
            if (currentUser?._id === user._id) {
                const updatedUser = { ...currentUser, role };
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }

            toast.success("User role updated successfully");
            await refetch(); // Ensure users list updates
            onRoleUpdate();
            onClose();
        } catch (error) {
            console.error("Failed to update user role", error);
            toast.error("Failed to update role");
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-4 rounded shadow-lg w-1/3'>
                <h2 className='text-xl mb-4'>Edit User</h2>
                <div className='mb-4 space-y-4'>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type="text" value={user?.email} readOnly className='mt-1 w-full bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-5 focus:outline-none' />
                </div>
                <div className='mb-4 space-y-4'>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className='mt-1 w-full bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-5 focus:outline-none'>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className='flex justify-end pt-5'>
                    <button onClick={onClose} className='bg-gray-500 text-white px-4 rounded py-2 mr-2'>Cancel</button>
                    <button onClick={handleUpdateRole} className='bg-indigo-500 text-white px-4 rounded py-2 mr-2'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserModal;
