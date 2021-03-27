import axios from 'axios';



// AXIOS
export const uploadImg = async (file) =>{
    // Defining our variables
    const UPLOAD_PRESET = 'v5gelyvh' // Insert yours
    const CLOUD_NAME = 'dpurt6mxc' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', file)
    FORM_DATA.append('upload_preset',UPLOAD_PRESET)
    console.log('uploadImg -> FORM_DATA', FORM_DATA)
    // Sending a post method request to Cloudniary's API
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        return res.data;
    } catch(err) {
        console.error('ERROR!', err)
    }
}