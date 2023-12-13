import React from 'react'
import './SearchBlog.css'

function SearchBlog({ searchKey, setSearchKey }) {
    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <div className='input-container d-flex align-items-center justify-align-content-center'>
                <input type="text" placeholder='Search Blog by author' onChange={e=>setSearchKey(e.target.value)} />
                <i class="fa-solid fa-magnifying-glass fs-5"></i>
            </div>
        </div>
    )
}

export default SearchBlog