<template>
    <div class="dashboard">
        <h1>This is the home page</h1>
        <v-divider></v-divider>
        <v-btn class="pink white--text">click me</v-btn>

        <v-btn depressed class="pink">click me</v-btn>
        <v-btn text class="pink">click me</v-btn>

        <v-btn dark class="pink white--text hidden-lg-and-up">
            <v-icon left>email</v-icon>
            <span>email me</span>
        </v-btn>

        <v-btn fab dark small depressed color="purple" class="hidden-sm-and-down">
            <v-icon dark>favorite</v-icon>
        </v-btn>
    </div>
</template>

<script>


    export default {
        name: 'dashboard',
    }
</script>
