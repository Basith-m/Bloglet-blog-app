import React from 'react'
import './SearchBlog.css'

function SearchBlog() {
    return (
        <div className='container'>
            <div className='input-container d-flex align-items-center justify-align-content-center'>
                <input type="text" placeholder='Search Blog by author' />
                <i class="fa-solid fa-magnifying-glass fs-5"></i>
            </div>
        </div>
    )
}

export default SearchBlog