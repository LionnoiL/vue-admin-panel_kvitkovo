import axios from 'axios'

const PRODUCTS_API_BASE_URL = "https://api.imperiaholoda.com.ua:4446/v1/products"

class ProductsService{
    getAll(){
        return axios.get(PRODUCTS_API_BASE_URL);
    }
}

export default new ProductsService()