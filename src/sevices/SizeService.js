import axios from 'axios'

const SIZE_API_BASE_URL = "https://api.imperiaholoda.com.ua:4446/v1/sizes"

class SizeService{
    getAll(){
        return axios.get(SIZE_API_BASE_URL);
    }
}

export default new SizeService()