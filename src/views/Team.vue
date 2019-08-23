<template>
    <div class="team">
        <v-row>
            <v-col v-for="p in team" :key="p.name" cols="12" md="3" xs="12" >
                <v-card class="text-center lighten-5" outlined >
                    <v-img
                            class="white--text"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-card-title class="align-end fill-height">I'm a title</v-card-title>
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
                    {name: 'The Net Ninja', role: 'Web developer'},
                    {name: 'Ryu', role: 'Graphic designer'},
                    {name: 'Chun Li', role: 'Web developer'},
                    {name: 'Gouken', role: 'Social media maverick'},
                    {name: 'Yoshi', role: 'Sales guru'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>