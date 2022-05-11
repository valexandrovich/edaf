import productService from "../service/productService";

export const products = {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        GET_ALL_PRODUCTS(state) {
            return state.products
        },
        GET_PRODUCT_BY_ID: (state) => (id) => {
            return state.products.find(el => el.id = id)
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        }
    },
    actions: {
        async LOAD_PRODUCTS(context) {
            const products = await productService.getProducts()
            context.commit('SET_PRODUCTS', products.data.data)
        }
    }
}