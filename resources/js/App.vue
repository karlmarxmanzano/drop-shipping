<template>
    <!-- <div id="app">
        <theHeader />
        <router-view />
    </div> -->

    <v-app>

        <!-- <template v-if="auth"> -->
            <TheHeader />
            <v-content>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-content>
        <!-- </template> -->

        <!-- <template v-else>
            <SignIn></SignIn>
        </template> -->

		
	</v-app>
</template>

<script>
    import TheHeader from './views/layout/TheHeader'
    import SignIn from './views/pages/auth/SignIn'
    import { mapGetters } from 'vuex'

    export default {
        name: 'mainApp',
        computed: {
            ...mapGetters({
                auth: 'auth/authenticated'
            })
        },
        components: {
            TheHeader,
            SignIn
        }
    }
</script>

<style scoped>

</style>