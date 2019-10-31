<template>
    <div>
        <v-container>
            <v-card>
                <v-subheader>회원가입</v-subheader>
                <v-container>
                    <v-form ref="form" v-model="valid" @submit.prevent="SignupForm">
                        <v-text-field
                            label="핸드폰번호"
                            v-model="Phone"
                            required
                            :rules="PhoneRules"
                        ></v-text-field>
                        <v-text-field
                            label="이름"
                            v-model="Name"
                            requried
                            :rules="NameRules"
                        ></v-text-field>
                        <v-text-field
                            label="별명"
                            v-model="nickname"
                            requried
                            :rules="NicknameRules"
                        ></v-text-field>
                        <div>
                            <v-radio-group v-model="Gender" :mandatory="false" row>
                            <v-radio label="남성" value="male"></v-radio>
                            <v-radio label="여성" value="female"></v-radio>
                            </v-radio-group>
                        </div>
                        <v-text-field
                            label="비밀번호"
                            :append-icon="show ? 'visibility' : 'visibility_off'"
                            :type="show ? 'text' : 'password'"
                            v-model="Password"
                            requried
                            :rules="PasswordRules"
                            @click:append="show = !show"
                        ></v-text-field>
                        <v-btn type="submit">submit</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            valid:false,
            show: false,
            Phone:'',
            Name:'',
            nickname:'',
            Gender:'',
            Password:'',
            PhoneRules:[ v => !!v || '핸드폰 번호는 필수입니다.'],
            NameRules:[ v => !!v || '이름은 필수입니다.'],
            NicknameRules:[ v => !!v || '별명은 필수입니다.'],
            PasswordRules:[ v => !!v || '비밀번호는 필수입니다.']
        }
    },
    computed:{
        me(){
            return $store.state.users.me;
        }
    },
    methods:{
        SignupForm(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('users/signUp',{
                    Phone: this.Phone,
                    nickname : this.nickname,
                    Name: this.Name,
                    Gender: this.Gender,
                    Password : this.Password
                }).then(() => {
                    this.$router.push('/login');
                }).catch(() =>{
                    alert('회원가입이 실패했습니다.')
                })
            }
        }
    },
    head(){
        return {
            title: '회원가입'
        }
    },
    middleware: 'anonymous',
}
</script>

<style>

</style>