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
        <v-navigation-drawer app right v-model="drawer" class="grey lighten-5">
            <v-list>
                <v-list-item-group v-model="index">
                    <v-list-item v-for="item in links" :key="item.text" router :to="item.route">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.text}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
        , data() {
            return {
                drawer: false,
                index: 0,
                links: [
                    {icon: 'dashboard', text: 'Dashboard', route: '/'},
                    {icon: 'folder', text: 'My Projects', route: '/projects'},
                    {icon: 'person', text: 'Team', route: '/team'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>