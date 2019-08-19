<template>
    <div class="dashboard">

        <v-container fluid>
            <v-card flat v-for="project in projects" :key="project.title">
                <v-row :class="`pa-3 project ${project.status}`">
                    <v-col cols="12" md="3" xs="12">
                        <div class="caption grey--text"> Project title</div>
                        <div>{{project.title}}</div>
                    </v-col>
                    <v-col cols="4" md="3" xs="12">
                        <div class="caption grey--text">Person</div>
                        <div>{{project.person}}</div>
                    </v-col>
                    <v-col cols="4" md="3" xs="12">
                        <div class="caption grey--text">Due by</div>
                        <div>{{project.due}}</div>
                    </v-col>
                    <v-col cols="4" md="3" xs="12">
                        <div class="caption grey--text">Status</div>
                        <div>{{project.status}}</div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
        </v-container>

    </div>
</template>

<script>


    export default {
        name: 'dashboard',
        data(){
            return {
                projects: [
                    { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                ]
            }
        }
    }
</script>

<style>
    .project.complete{
        border-left: 4px solid #3CD1C2;
    }
    .project.ongoing{
        border-left: 4px solid orange
    }
    .project.overdue{
        border-left: 4px solid tomato;
    }
</style>
