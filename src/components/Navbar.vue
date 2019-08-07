<template>
    <nav>
        <v-app-bar flat app>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>nijia</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
            <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer app right  v-model="drawer" class="indigo"  >
            <p>text</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
        ,data(){
            return{
                drawer:false
            }
        }
    }
</script>

<style scoped>

</style>