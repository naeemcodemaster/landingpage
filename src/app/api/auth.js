import axios from 'axios';

export const loginUser = async(email,password)=>{
    console.log("url is",process.env.NEXT_PUBLIC_ROOT_URL);
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_ROOT_URL}/login`,{
            email,password
        });
        return response.data;
    } catch (error) {
        console.log('Error in login', error);
        throw error;
    }
}