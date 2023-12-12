import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

// register
export const registerAPI = async(user)=> {
    return await commonAPI("POST",`${SERVER_URL}/user/register`,user,"")
}

// login
export const loginAPI = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/user/login`,user,"")
}

// add blog
export const addBlogAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST",`${SERVER_URL}/blog/add`,reqBody,reqHeader)
}