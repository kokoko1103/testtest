export const state = () => ({
    mainPosts: [],
    hasMorePost: true,
    imagePaths: [],
  });
  
  const totalPosts = 51;
  const limit = 10;
  
  export const mutations = {
    addMainPost(state, payload) {
      state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload) {
      const index = state.mainPosts.findIndex(v => v.id === payload.id);
      state.mainPosts.splice(index, 1);
    },
    loadComments(state, payload){
      const index = state.mainPosts.findIndex(v =>v.id === payload.postId);
      state.mainPosts[index].Comments = payload;
    },
    addComment(state, payload) {
      const index = state.mainPosts.findIndex(v => v.id === payload.postId);
      state.mainPosts[index].Comments.unshift(payload);
    },
    loadPosts(state, payload) {
      // const diff = totalPosts - state.mainPosts.length; // 아직 안 불러온 게시글 수
      // const fakePosts = Array(diff > limit ? limit : diff).fill().map(v => ({
      //   id: Math.random().toString(),
      //   User: {
      //     id: 1,
      //     nickname: '히기익',
      //   },
      //   content: `Hello infinite scrolling~ ${Math.random()}`,
      //   Comments: [],
      //   Images: [],
      // }));
      state.mainPosts = state.mainPosts.concat(payload);
      state.hasMorePost = payload.length === limit;
    },
    concatImagePath(state , payload){
      state.imagePaths = state.imagePaths.concat(payload);
    },
    removeImagePath(state, payload){
      state.imagePaths.splice(payload,1);
    }
  };
  var index = 1;
  export const actions = {
    add({ commit, state }, payload) {
      // 서버에 게시글 등록 요청 보냄
      this.$axios.post('http://localhost:3085/post',{
        content: payload.content,
        imagePaths: state.imagePaths,
      },{
        withCredentials:true,
      }).then((res) => {
        index = 1+index;
        commit('addMainPost', res.data);
      }).catch((err) => {

      })
    },
    remove({ commit }, payload) {
      commit('removeMainPost', payload);
    },
    addComment({ commit }, payload) {
      this.$axios.post('http://localhost:3085/post/'+parseInt(payload.postId)+'/comment',{
        content : payload.content
      },{
        withCredentials:true
      }).then((res) => {
        console.log(payload.postId);
        commit('addComment', res.data);
      }).catch((err) => {
        console.log(err)
      })
    },
    loadComments({ commit }, payload){
      this.$axios.get('http://locallhost:3085/post/'+parseInt(payload.postId)+'/comments')
        .then((res) => {
          commit('loadComments',res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadPosts({ commit, state }, payload) {
      if (state.hasMorePost) {
        this.$axios.get('http://localhost:3085/posts')
        .then((res) => {
          commit('loadPosts',res.data);
        }).catch((err) => {
          console.error(err);
        })
      }
    },
    uploadImages({commit, state }, payload){
      this.$axios.post('http://localhost:3085/post/images', payload,{
        withCredentials: true,
      }).then((res) =>{
        commit('concatImagePath', res.data);
      }).then((err) => {

      })
    }
  };