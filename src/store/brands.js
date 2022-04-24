import axios from 'axios'
export default{
    state: {
        clothes: []
    },
    getters: {
        allClothes(state){
            return state.clothes
        }
    },
    mutations: {
        updateClothes(state,newClothes){
            state.clothes = newClothes
        }
    },
    actions: {
        async fetchClothes(result){
            const res = await axios.get(`http://localhost:3001/brands`);
            const newClothes = res.data;
            result.commit('updateClothes', newClothes);
        }
    },
}