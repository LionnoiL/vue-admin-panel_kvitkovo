import axios from 'axios'

const TYPES_API_BASE_URL = "https://api.imperiaholoda.com.ua:4446/v1/types"

class TypesService{
    getAll(){
        return axios.get(TYPES_API_BASE_URL);
    }

    add(data){
        let header= {
            headers: {'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTcwMzA5ODY2NCwiZXhwIjoxNzAzMTAyMjY0fQ.W6qppRYmGsaJH55kvwqYMWQ9PnmCJ8waaii1t3D1EHs'}
        };
        return axios.post(TYPES_API_BASE_URL, data, header);
    }
}

export default new TypesService()