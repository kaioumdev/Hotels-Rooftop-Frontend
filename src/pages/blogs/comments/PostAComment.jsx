import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { usePostCommentMutation } from '../../../redux/features/comments/commentApi';

const PostAComment = () => {
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [postComment] = usePostCommentMutation();
    // TODO: handle posting functionality later
    const handlePostComment = (e) => {
        e.preventDefault();
        if (!user) {
            alert("Please login to comment on this post");
            navigate("/login");
            return;
        };
        const newComment = {
            comment: comment,
            user: user._id,
            postId: id
        }
        console.log(newComment);
    }
    return (
        <div className='mt-8'>
            <h3 className='text-lg font-medium mb-8'>Leave a Comment</h3>
            <form onSubmit={handlePostComment}>
                <textarea name="text" value={comment} onChange={(e) => setComment(e.target.value)} cols="30" rows="10" placeholder='Share your opinion about this post....'
                    className='w-full bg-bgPrimary focus:outline-none p-5' id=""></textarea>
                <button type='submit' className='w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default PostAComment