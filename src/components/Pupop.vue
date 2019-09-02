<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog
            width="600"
    >
        <template v-slot:activator="{ on }" >
            <v-btn
                    color="primary lighten-2"
                    v-on="on"
                    small
                    outlined
                    rounded
                    min-height="50"
            >
                Add new project!
            </v-btn>
        </template>

        <v-card>
            <v-card-title
                    class="headline grey lighten-2"
                    primary-title
            >
                <h2>Add A New Project</h2>
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field label="Tilte" prepend-inner-icon="folder" v-model="title"></v-text-field>
                    <v-textarea label="content" prepend-icon="edit" v-model="content"></v-textarea>
                    <v-btn class="primary lighten-4" outlined @click="submit">submit</v-btn>
                </v-form>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Pupop",
        data(){
            return{
                title:'',
                content:''
            }
        },
        methods:{
            submit(){
                console.log(this.title + this.content);
            }
        }
    }
</script>

<style scoped>

</style>