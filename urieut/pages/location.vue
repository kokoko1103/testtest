<template>
    <v-container style="margin-top:100px;">
        <v-card>
            <v-container>
                <v-text-field
                    v-model="locationSearch"
                    solo
                    placeholder="시/군/구"
                    prepend-inner-icon="mdi-magnify"
                    dense
                    rounded
                    @input="Search"
                ></v-text-field>
            </v-container>
            <v-container>
                <v-card v-for="l in location" :key="l.id" style="margin-bottom:20px;">
                    <p style="margin:0; height:36fpx;">{{l.name}}</p>
                    <v-btn>버튼버튼</v-btn>
                </v-card>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import jeju from './locations/jeju'
import seogwipo from './locations/seogwipo'
export default {
    data(){
        return {
            locationSearch:'',
            location:[
                {
                    id:1,
                    name:'제주시'
                },
                {
                    id:2,
                    name:'서귀포시'
                }
            ],

        }
    },
    methods:{
        Search(value){
            if(value){

            }
        }
    },
    components:{
        jeju,
        seogwipo,
    }
}
</script>

<style>

</style>