import React from 'react';
import { formatDate } from '../../../utils/formateDate';
import commentIcon from '../../../assets/commentor.png';


const CommentCard = ({ comments }) => {
    return (
        <div className='my-6 bg-white p-8'>
            <div>
                {
                    comments?.length > 0 ? <div>
                        <h3 className='text-lg font-medium'>All Comments</h3>
                        <div>
                            {
                                comments.map((comment, index) => (
                                    <div key={index}>
                                        <div>
                                            <img src={commentIcon} alt="" className='h-14' />
                                            <div>
                                                <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{comment?.user?.username}</p>
                                                <p className='text-[12px] italic'>{formatDate(comment.createdAt)}</p>
                                            </div>
                                        </div>
                                        {/* comment details */}
                                        <div className='text-gray-600 mt-5 border p-8'>
                                            <p className='md:w-4/5'>{comment?.comment}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : <div className='text-lg font-medium'>No Comments Found</div>
                }
            </div>
        </div>
    )
}

export default CommentCard