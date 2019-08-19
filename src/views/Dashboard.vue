<template>
    <div class="dashboard">

        <v-container fluid>
            <v-card flat>
                <v-row>
                    <v-col cols="12" md="3" xs="12">
                        <div class="caption grey--text"> Project title</div>
                        <div>How to use Vuetify</div>
                    </v-col>
                    <v-col cols="4" md="3" xs="12">
                        <div class="caption grey--text">Person</div>
                        <div>Aworker</div>
                    </v-col>
                    <v-col cols="4" md="3" xs="12">
                        <div class="caption grey--text">Due by</div>
                        <div>2019.08.19</div>
                    </v-col>
                    <v-col cols="4" md="3" xs="12">
                        <div class="caption grey--text">Status</div>
                        <div>Going on</div>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>

    </div>
</template>

<script>


    export default {
        name: 'dashboard',
    }
</script>
