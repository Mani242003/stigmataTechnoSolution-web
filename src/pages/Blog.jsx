import React from 'react'
import BlogList from './BlogList'
import News from '../components/News'

const Blog = () => {
  return (
    <div>


<div className="  p-[3rem]">
  <span className="text-desGray text-5xl font-extrabold">Blogs</span>
 
  
</div>
<BlogList isHomePage={false} />

    </div>
  )
}

export default Blog