import axios from 'axios';

const GENAI_API_URL = 'https://w2w-api-c76466fc82ee.herokuapp.com';
const API_ENDPOINTS = {
    gen_id: '/genai_id'
};

export const getGenaiData = async (isFemale, skinTone, age) => {
    try {
        // let gender = isFemale ? true : false;
        // console.log(gender, skinTone, age)
        const url = `${GENAI_API_URL}${API_ENDPOINTS.gen_id}?isFemale=${isFemale}&skin=${skinTone}&age=${age}`;

        const response = await axios.post(url);
        // console.log(response)
        return response.data;
    } catch (error) {
        // if (error.response) {
        //     console.error('API responded with an error:', error.response);
        // } else if (error.request) {
        //     console.error('No response received from API:', error.message);
        // } else {
        //     console.error('Error setting up the request:', error.message);
        // }
        console.log(error)
    }
};
