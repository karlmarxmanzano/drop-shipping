<template>
    <!-- <div id="app">
        <theHeader />
        <router-view />
    </div> -->

    <v-app>

        <!-- <template v-if="auth"> -->
            <TheHeader />
            <v-content>
                <v-container
                    fluid
                    fill-height
                >
                    <router-view></router-view>
                </v-container>
            </v-content>
        <!-- </template> -->

        <!-- <template v-else> -->
            <!-- <SignIn></SignIn> -->
            <!-- <router-view></router-view> -->
        <!-- </template> -->

		
	</v-app>
</template>

<script>
    import TheHeader from './views/layout/TheHeader'
    import SignIn from './views/pages/auth/SignIn'
    import { mapGetters } from 'vuex'

    export default {
        name: 'mainApp',
        data() {
            return {
                items: [
                    {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                    },
                    {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                    },
                    {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                    },
                ],
            }
        },
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