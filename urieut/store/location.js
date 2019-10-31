export const state = () =>({
    locations:[{
        id:1,
        name:'제주시',
    },{
        id:2,
        name:'서귀포시',
    }],
})
export const mutations = {
    bye(state){
        state.hello = 'goodbye'
    }
};
export const actions = {

}