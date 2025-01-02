import React from 'react'
import { formatDate } from '../../../utils/formateDate'

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
                                        <img src={commentIcon} alt="" className='h-14' />
                                        <div>
                                            <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{comment?.user?.username}</p>
                                            <p>{formatDate(comment.createdAt)}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : <div></div>
                }
            </div>
        </div>
    )
}

export default CommentCard