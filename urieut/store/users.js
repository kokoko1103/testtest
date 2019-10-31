export const state = () =>({
    me: null,
    FollowerList:[{
        id:1,
        nickname:'하나'
    },{
        id:2,
        nickname: '두울'
    },{
        id:3,
        nickname: '세엣'
    },{
        id:4,
        nickname: '네엣'
    }],
    FollowingList:[{
        id:1,
        nickname:'다섯'
    },{
        id:2,
        nickname:'여섯'
    },{
        id:3,
        nickname: '일곱'
    },{
        id:4,
        nickname: '여덟'
    }],
})

var index = 1;

export const mutations = {
    setMe(state, payload){
        state.me = payload;
    },
    updateNickname(state, payload){
        state.me.nickname = payload.nickname;
    },
    addFollowers(state, payload){
        state.FollowerList.push(payload)
    },
    addFollowings(state,payload){
        state.FollwingList.push(payload)
    },
    removeFollowers(state,payload){
        const index = state.FollowerList.find(v => v.id === payload.id);
        state.FollowerList.splice(index,1);
    },
    removeFollowings(state,payload){
        const index = state.FollowingList.find(v => v.id === payload.id);
        state.FollowingList.splice(index,1);
    }
};

export const actions ={
    signUp({ commit, state }, payload) {
        this.$axios.post('http://localhost:3085/user',{
            phone: payload.Phone,
            name: payload.Name,
            nickname: payload.nickname,
            password: payload.Password,
            gender: payload.Gender,
        },{
            withCredentials:true
        }).then((res) => {
            console.log(res.data);
            commit('setMe',res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },
    Login({commit}, payload){
        this.$axios.post('http://localhost:3085/user/login',{
            phone: payload.Phone,
            password: payload.Password
        },{
            withCredentials: true,
        }).then((res) => {
            commit('setMe', res.data);
        }).catch((err) => {
            console.log(err);
        })
    },
    Logout({commit},payload){
        this.$axios.post('http://localhost:3085/user/logout',{},{
            withCredentials: true,
        })
        .then((res) => {
            commit('setMe',null)
        }).catch((err) => {
            console.log(err)
        })
    },
    updateNickname({commit}, payload){
        commit('updateNickname', payload)
    },
    addFollowers({commit}, payload){
        commit('addFollowers', payload)
    },
    addFollowings({commit}, payload){
        commit('addFollowings', payload)
    },
    removeFollowers({commit}, payload){
        commit('removeFollowers', payload)
    },
    removeFollowings({commit}, payload){
        commit('removeFollowings', payload)
    }
};