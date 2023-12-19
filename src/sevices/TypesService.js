import axios from 'axios'

const TYPES_API_BASE_URL = "https://api.imperiaholoda.com.ua:4446/v1/types"

class TypesService{
    getAll(){
        return axios.get(TYPES_API_BASE_URL);
    }
}

export default new TypesService()