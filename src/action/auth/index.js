import axios from '../../api/auhothorizedAPI'
// import {CURRENT_USER} from '../types'

export const GetProfile = ()=> async dispatch =>{

    try {
        const {data} = await axios.get('/api/aimart/v1/user/profile')
        console.log('profile',data);
    } catch (error) {
        console.log('profile error',error);
    }






}