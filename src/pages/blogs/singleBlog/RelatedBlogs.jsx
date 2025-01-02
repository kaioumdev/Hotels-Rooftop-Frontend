import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchRelatedBlogsQuery } from '../../../redux/features/blogs/blogsApi';

const RelatedBlogs = () => {
    const { id } = useParams();
    const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);
    console.log(blogs)
    return (
        <div>
            <h3 className='text-2xl font-medium pt-8 px-8 pb-5'>Related Blogs</h3>
            <hr />
            {
                blogs.length > 0 ? (<div className='space-y-4 mt-5'>
                    {
                        blogs.map((blog) => (
                            <Link key={blog._id}>
                                <div>
                                    <img src={blog.coverImg} alt="" />
                                </div>
                            </Link>
                        ))
                    }
                </div>) : (<div className='p-8'>No Related Blogs Found</div>)
            }
        </div>
    )
}

export default RelatedBlogs