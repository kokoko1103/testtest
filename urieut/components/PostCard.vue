<template>
  <v-container>
      <v-card>
          <v-container>
              <h4>{{post.nickname}}</h4>
              <v-card-text>{{post.content}}</v-card-text>
              <v-img></v-img>
              <v-card-actions>
                  <v-btn><v-icon>mdi-twitter-retweet</v-icon></v-btn>
                  <v-btn><v-icon>mdi-heart-outline</v-icon></v-btn>
                  <v-btn @click="onToggleCommnet"><v-icon>mdi-comment-outline</v-icon></v-btn>
                  <v-menu open-on-hover offset-y>
                      <template v-slot:activator="{on}">
                        <v-btn v-on="on"><v-icon>mdi-dots-horizontal</v-icon></v-btn>
                      </template>
                      <v-list>
                          <v-list-item>
                              <v-btn @click="onRemove">삭제</v-btn>
                              <v-btn @click="onUpdate">수정</v-btn>
                          </v-list-item>
                      </v-list>
                  </v-menu>
              </v-card-actions>
          </v-container>
      </v-card>
      <template v-if="toggle">
          <Comment :post-id="post.post_id" />
            <v-list>
                <v-list-item v-for="c in post" :key="c.post_id">
                    <v-list-item-avatar color="red">
                        <span>{{c.nickname[0]}}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{c.nickname}}</v-list-item-title>
                        <v-list-item-subtitle>{{c.content}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
      </template>
  </v-container>
</template>

<script>
import Comment from '~/components/Comment'
import {mapState} from 'vuex'
export default {
    components:{
        Comment
    },
    computed:{
        ...mapState('users',['me'])
    },
    data(){
        return{
            toggle:false,
        }
    },
    props:{
        post:{
            type: Object,
            required: true,
        }
    },
    methods:{
        onToggleCommnet(){
            if(!this.toggle){
                this.$store.dispatch('posts/loadComments', {
                    postId : this.post.post_id
                })
            }
            this.toggle =!this.toggle;

        },
        onUpdate(){

        },
        onRemove(){
            this.$store.dispatch('posts/removeMainPost',{
                id: this.post.post_id
            })
        }
    }
}
</script>

<style>

</style>