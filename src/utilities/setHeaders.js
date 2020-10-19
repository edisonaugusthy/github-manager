import axios from 'axios';



export const setAuthHeader = () => {
    try {
        axios.defaults.headers.common['Content-Type'] = 'application/vnd.github.hellcat-preview+json';
    } catch (error) {
        console.log('Error setting headers:', error);
    }
};
