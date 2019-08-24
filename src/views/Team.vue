<template>
    <div class="team">
        <v-row>
            <v-col v-for="p in team" :key="p.name" cols="12" md="3" xs="12" >
                <v-card class="text-center lighten-5" outlined >
                    <v-img
                            class="white--text"
                            height="300px"
                            :src="p.image"
                    >
                        <v-card-title class="align-end fill-height">{{p.image}}</v-card-title>
                    </v-img>
                    <v-card-text>
                        <div class="black--text"> {{p.name}}</div>
                        <div class="caption"> {{p.role}}</div>
                    </v-card-text>
                    <v-card-actions class="mx-3">
                        <v-btn text color="grey">
                            <v-icon left>message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Team",
        data() {
            return {
                team: [
                    {name: 'The Net Ninja', role: 'Web developer',image:'体育特长生.jpg'},
                    {name: 'Ryu', role: 'Graphic designer',image:'十里洋场.jpg'},
                    {name: 'Chun Li', role: 'Web developer',image:'我们结婚吧.jpg'},
                    {name: 'Gouken', role: 'Social media maverick',image:'深港双城记.jpg'},
                    {name: 'Yoshi', role: 'Sales guru',image:'苏州河两岸.jpg'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>