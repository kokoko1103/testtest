<template>
    <div>
        <v-container>
            <v-card style="margin-bottom:20px;">
                <v-container>
                    <v-form ref="form" v-model="valid" @submit.prevent="PostForm">
                        <v-textarea
                            auto-grow
                            clearable
                            label="어떤 이야기를 하고싶나요?"
                            v-model="content"
                            required
                            :success="success"
                            :success-message="successMessage"
                            @input="onChangeTextarea"
                        ></v-textarea>
                        <v-btn type="submit" absolute right>올리기</v-btn>
                        <input ref="imageInput" type="file" multiple hidden @change="onChangeImages">
                        <v-btn @click="onClickImageUpload" type="button">이미지 올리기</v-btn>
                        <div>
                            <div v-for="( p, i ) in imagePaths" :key="p" style="display: inline-block">
                                <img :src="'http://localhost:3085/'+p" :alt="p" style="width: 150px;">
                                <div>
                                    <button @click="onRemoveImage(i)" type="button">제거</button>
                                </div>
                            </div>
                        </div>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import {mapState} from 'vuex'

let today = new Date();

export default {
    data(){
        return {
            valid:false,
            content:'',
            success:false,
            successMessage:''
        }
    },
    computed:{
        ...mapState('posts',['mainPosts']),
        ...mapState('users',['me']),
        ...mapState('posts', ['imagePaths'])
    },
    methods:{
        PostForm(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('posts/add',{
                    content: this.content,
                }).then(() =>{
                    this.content = '',
                    this.success= true,
                    this.successMessage="업로드를 성공했습니다."
                }).catch(() => {

                })
            }
        },
        onChangeTextarea(value){
            if(value.length){
                this.success=false,
                this.successMessage=''
            }
        },
        onClickImageUpload(){
            this.$refs.imageInput.click();
        },
        onChangeImages(e){
            console.log(e.target.files);
            const imageFormData = new FormData();
            [].forEach.call(e.target.files, (f) => {
                imageFormData.append('image', f);
            });
            this.$store.dispatch('posts/uploadImages',imageFormData);
        },
        onRemoveImage(index){
            this.$store.commit('posts/removeImagePath', index);
        },
    }
}
</script>

<style>

</style>