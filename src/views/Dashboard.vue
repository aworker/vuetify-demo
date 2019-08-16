<template>
    <div class="dashboard">
        <h1 class="v-subheader grey--text">This is the home page</h1>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-btn outlined block class="">1</v-btn>
            </v-flex>
            <v-flex xs12 md6>
                <v-btn outlined block class="">2</v-btn>
            </v-flex>
        </v-layout>
        <v-container fluid>
            <v-row no-gutters class="my-6">
                <v-col cols="12" md="6">
                    <v-btn outlined  block tile >mobile:12  desktop:6</v-btn>
                </v-col>
                <v-col cols="12" md="6">
                    <v-btn outlined  block tile >mobile:12 desktop:6</v-btn>
                </v-col>
            </v-row>
            <v-row no-gutters class="my-6 dark">
                <v-col cols="4" md="6">
                    <v-btn outlined  block tile >3</v-btn>
                </v-col>
                <v-col cols="4" md="6">
                    <v-btn outlined  block tile >3</v-btn>
                </v-col>
                <v-col cols="4" md="6">
                    <v-btn outlined  block tile >3</v-btn>
                </v-col>
                <v-col cols="4" md="6">
                    <v-btn outlined  block tile >3</v-btn>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>


    export default {
        name: 'dashboard',
    }
</script>
