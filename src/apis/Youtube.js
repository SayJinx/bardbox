import axios from "axios";
const KEY = 'AIzaSyCaQ-Y1jr2ffZIJkKxbHwkfvIBz-igqPsg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})