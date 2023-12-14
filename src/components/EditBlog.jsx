import React from 'react'
import { Link } from 'react-router-dom'

function EditBlog({ blog }) {

    console.log(blog);

  return (
    <>
        <Link to={'/blogEditor'}><i class="fa-solid fa-pen-to-square mx-3 text-success"></i></Link>
    </>
  )
}

export default EditBlog