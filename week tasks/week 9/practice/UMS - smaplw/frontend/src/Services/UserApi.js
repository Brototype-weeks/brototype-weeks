import { userInstances } from '../Axios/UserInstance'



// user registration
export const userRegister = async (formData)=>{
    try {
  
        const response = await userInstances.post('/api/users/register',formData)
        // console.log('Response:', response.data);
    return response.data;
    } catch (error) {
        console.error('Error:', error);
        console.log('Error message:', error.message);
        throw error;
    }     
}


// user login
export const userlogin =async (userdata)=>{
    try {
         
        const response = await userInstances.post('/api/users/login',userdata);
        return response
    } catch (error) {
        console.log('Error loggin in:', error.message);
        throw error;
        
    }
}

// get home
export const userHome = async () =>{
    try {
        const response = await userInstances.get('/userHome')
    return response
    } catch (error) {
        console.log('error Home',error.message);
        
    }
    
}

// user logout

export const userLogout = () =>{

}

// user update profile

export const userEditProfile = async (formData) =>{
    try {
        console.log('formData'+formData);
        const response = await userInstances.put(`/api/users/userEditProfile${id}`,formData);
        return response 
    } catch (error) {
        
    }
}