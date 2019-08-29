<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog
            v-model="dialog"
            width="300"
    >
        <template v-slot:activator="{ on }" >
            <v-btn
                    color="primary lighten-2"
                    v-on="on"
                    small
                    outlined="30"
                    rounded="30"
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
                Privacy Policy
            </v-card-title>

            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Pupop"
    }
</script>

<style scoped>

</style>