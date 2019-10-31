<template>
  <div>
      <v-container>
          <v-card style="margin-bottom:20px;">
              <v-container>
                  <v-form ref="form" v-model="valid" @click.prevent="profileForm">
                      <v-subheader v-if="me">{{me.nickname}} 님 프로필</v-subheader>
                      <v-container>
                          <v-text-field
                            label="수정할 별명"
                            v-model="nickname"
                            required
                            :rules="nicknameRules"
                          ></v-text-field>
                          <v-btn type="submit">수정</v-btn>
                      </v-container>
                  </v-form>
              </v-container>
          </v-card>
          <v-card style="margin-bottom:20px;">
              <v-container>
                  <v-subheader>팔로워</v-subheader>
                  <FollowList :users="FollowerList" :remove="removeFollower"/>
              </v-container>
          </v-card>
          <v-card style="margin-bottom:20px;">
              <v-container>
                  <v-subheader>팔로잉</v-subheader>
                  <FollowList :users="FollowingList" :remove="removeFollowing"/>
              </v-container>
          </v-card>
      </v-container>
  </div>
</template>

<script>
import FollowList from '~/components/FollowList'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            valid:false,
            nickname:'',
            nicknameRules:[ v => !!v || '수정할 별명을 입력해주세요'],
        }
    },
    components:{
        FollowList
    },
    computed:{
        ...mapState('users',['me']),
        ...mapState('users',['FollowerList']),
        ...mapState('users',['FollowingList']),
    },
    methods:{
        profileForm(){
            this.$store.dispatch('users/updateNickname',{
                nickname : this.nickname,
            })
        },
        removeFollower(id){
            this.$store.dispatch('users/removeFollowers',{id})
        },
        removeFollowing(id){
            this.$store.dispatch('users/removeFollowings',{id})
        }
    },
    middleware: 'authenticated',
}
</script>

<style>

</style>