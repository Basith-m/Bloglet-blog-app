import React, { createContext, useState } from 'react'
export const BlogDateContext = createContext()

function DateContext({ children }) {
    // const [formattedTime, setFormattedTime] = useState('');
    const [postDate, setPostDate] = useState('')
    return (
        <>
            <BlogDateContext.Provider value={{postDate, setPostDate}}>
                {children}
            </BlogDateContext.Provider>
        </>
    )
}

export default DateContext