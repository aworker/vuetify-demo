<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>nijia</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                            text
                            class="grey--text"
                            v-on="on"
                    >
                    <v-icon left>expand_more</v-icon>
                        Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="(link, index) in links"
                            :key="index"
                            router :to="link.route"
                    >
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app  v-model="drawer" class="grey lighten-5">
            <v-layout class="mt-5" column align-center>
                <v-avatar color="grey">
                    <v-img src="家有爱宠.jpg"></v-img>
                </v-avatar>
                <p>design by aworker!</p>
                <div class="mb-4">
                    <Pupop/>
                </div>
            </v-layout>

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
    import Pupop from './Pupop'
    export default {
        components:{ Pupop },
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