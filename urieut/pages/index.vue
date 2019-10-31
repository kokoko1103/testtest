<template>
  <div>
      <PostForm v-if="me"/>
      <div>
          <PostCard v-for="p in mainPosts" :key="p.post_id" :post="p"/>
          <p>{{data}}</p>
      </div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard'
import PostForm from '~/components/PostForm'
import {mapState} from 'vuex'
export default {
    components:{
        PostCard,
        PostForm
    },
    computed:{
        ...mapState('users',['me']),
        ...mapState('posts',['mainPosts']),
        ...mapState('posts',['hasMorePost']),
    },
    data(){
        return {
            //nickname: this.me.nickname,
            data : this.mainPosts
        }
    },
    fetch({store}){
        store.dispatch('posts/loadPosts');
    },
    mounted(){
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
    methods:{
        onScroll(){
            console.log('scroll');
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 200){
                if(this.hasMorePost){
                    this.$store.dispatch('posts/loadPosts');
                }
            }
        },
    }
}
</script>

<style>

</style>