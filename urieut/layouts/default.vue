<template>
  <v-app>
    <div>
      <v-toolbar>
      <v-toolbar-title><nuxt-link to="/">Title</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-text-field label="검색"  prepend-icon="mdi-magnify" :style="{display:'flex',alignItems:'bottom'}" style="margin-top:16px;"/>
        <p v-if="me" style="">{{me.nickname}}</p>
        <v-btn text nuxt to="/profile">프로필</v-btn>
        <v-btn text nuxt to="/login" v-if="!me">로그인</v-btn>
        <v-btn @click="Logout" v-else>로그아웃</v-btn>
        <v-btn text nuxt to="/signup">회원가입</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </div>
    <v-row no-gutters>
      <v-col md="3"></v-col>
      <v-col cols="12" md="6" absolute style="align-items:center">
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState('users',['me'])
  },
  methods:{
    Logout(){
      this.$store.dispatch('users/Logout');
    }
  }
}
</script>

<style>
  a{
    display: inline-block;
    text-decoration: none;
    color:black;
  }
  .v-btn__content{
    display:inline-block;
    text-decoration: none;
    color:black;
  }
</style>