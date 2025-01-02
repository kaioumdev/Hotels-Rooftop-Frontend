import React from 'react'

const PostAComment = () => {
    return (
        <div>
            <h3 className='text-lg font-medium mb-8'>Leave a Comment</h3>
            <form>
                <textarea name="text" value={comment} onChange={(e) => setComment(e.target.value)} cols="30" rows="10" placeholder='Share your opinion about this post....'
                    className='w-full bg-bgPrimary focus:outline-none p-5' id=""></textarea>
                <button type='submit' className='w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default PostAComment