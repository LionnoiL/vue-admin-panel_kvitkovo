import axios from 'axios'

const COLOR_API_BASE_URL = "https://api.imperiaholoda.com.ua:4446/v1/colors"

class ColorService{
    getColors(){
        return axios.get(COLOR_API_BASE_URL);
    }
}

export default new ColorService()