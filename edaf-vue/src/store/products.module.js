import productService from "../service/productService";

export const products = {
    namespaced: true,
    state: {
        products: [],
        productSpaces: []
    },
    getters: {
        GET_ALL_PRODUCTS(state) {
            return state.products
        },
        GET_ALL_PRODUCT_SPACES(state) {
            return state.productSpaces
        },
        GET_PRODUCT_BY_ID: (state) => (id) => {
            return state.products.find(el => el.id = id)
        },
        GET_PRODUCT_SPACE_BY_ID: (state) => (id) => {
            return state.productSpaces.find(el => el.id = id)
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_PRODUCT_SPACES(state, products) {
            state.productSpaces = products
        }
    },
    actions: {
        async LOAD_PRODUCTS(context) {
            const products = await productService.getProducts()
            context.commit('SET_PRODUCTS', products.data.data)
        },
        async LOAD_PRODUCT_SPACES(context) {
            const products = await productService.getProductSpaces()
            context.commit('SET_PRODUCT_SPACES', products.data.data)
        }
    }
}