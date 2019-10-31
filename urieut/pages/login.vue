<template>
  <div>
      <v-container>
          <v-card>
              <v-subheader>로그인</v-subheader>
              <v-container>
                  <v-form ref="form" v-model="valid" @submit.prevent="LoginFrom">
                      <v-text-field
                        label="핸드폰 번호"
                        v-model="Phone"
                        requried
                        :rules="PhoneRules"
                      ></v-text-field>
                      <v-text-field
                        :append-icon="show ? 'visibility' : 'visibility_off'"
                        :type="show ? 'text' : 'password'"
                        label="비밀번호"
                        v-model="Password"
                        requried
                        :rules="PasswordRules"
                        @click:append="show = !show"
                      ></v-text-field>
                      <v-btn type="submit" :disabled="!valid">login</v-btn>
                      <v-btn nuxt to="/signup">회원가입</v-btn>
                  </v-form>
              </v-container>
              <p>{{content}}</p>
          </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            valid:false,
            Phone:'',
            Password:'',
            show:false,
            PhoneRules:[ v => !!v || '핸드폰번호를 입력하세요'],
            PasswordRules:[ v => !!v || '비밀번호를 입력하세요'],
            content: ''
        }
    },
    computed:{
        me(){
            return $store.state.users.me;
        }
    },
    methods:{
        LoginFrom(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('users/Login',{
                    Phone: this.Phone,
                    Password : this.Password,
                }).then(() => {
                    this.$router.push('/');
                }).catch(() => {
                    alert('가입된 핸드폰 번호가 없습니다.')
                })
            }
        }
    },
    middleware: 'anonymous',
}
</script>

<style>

</style>