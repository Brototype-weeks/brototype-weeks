import { useSelector } from "react-redux";

export const UseAuth = () =>{
    const userDetails = useSelector((state)=> state.user.userDetails)
    return { userDetails }
}