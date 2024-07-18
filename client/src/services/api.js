import axios from 'axios';
const API_URl='http://localhost:8000';
export const uplodeFile=async(data)=>{
    try{
        let responce= await axios.post(`${API_URl}/uplode`,data);
        return responce.data;

    }
    catch(error){
        console.error('Error while catching the api', error.message);
    }
}