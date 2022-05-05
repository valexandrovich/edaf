import axios from 'axios'
import { i18n } from '../plugins/i18n'

// http: //localhost:1337/api/products?filters[productType][$eq]=artistTalks

const API_URL = 'http://localhost:1337/api/'

class ProductService {
    getProducts() {
        let locale = i18n.locale
            // ?pagination[start]=0&pagination[limit]=100
        return axios.get(API_URL + 'products?populate=*&locale=' + locale + '&pagination[start]=0&pagination[limit]=100', {
            headers: {
                'Authorization': 'bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0'
            }
        })
    }
}

export default new ProductService()