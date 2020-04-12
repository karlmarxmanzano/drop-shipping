<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-app-bar
                    app
                    flat
                    class="px-4"
                    absolute
                >
                    <v-btn
                        class="mr-3"
                        elevation="1"
                        @click="drawer = !drawer"
                        color="white"
                        small
                        fab
                    >
                        <v-icon v-if="drawer">
                            mdi-menu
                        </v-icon>

                        <v-icon v-else>
                            mdi-menu-open
                        </v-icon>
                        </v-btn>

                    <v-toolbar-title
                        class="hidden-sm-and-down font-weight-light"
                        v-text="$route.name"
                    />
                    
                    <v-spacer></v-spacer>

                    <v-text-field
                        label="Search"
                        append-icon="mdi-magnify"
                        filled
                        rounded
                        single-line
                        solo
                        flat
                        dense
                        hide-details
                    ></v-text-field>

                    <div class="mx-3" />

                    <!-- <v-btn 
                        class="ml-2"
                        icon
                    >
                        <v-badge
                            content="1"
                            value="1"
                            color="blue"
                            overlap
                            bordered
                        >
                            <v-icon
                                color="black"
                            >mdi-bell-outline</v-icon>
                        </v-badge>
                    </v-btn> -->

                    <v-menu
                        bottom
                        left
                        offset-y
                        origin="top right"
                        transition="scale-transition"
                    >
                        <template v-slot:activator="{ attrs, on }">
                            <v-btn
                                class="ml-2"
                                min-width="0"
                                icon
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-badge
                                    color="red"
                                    overlap
                                    bordered
                                >
                                    <template v-slot:badge>
                                        <span>5</span>
                                    </template>

                                    <v-icon>mdi-bell-outline</v-icon>
                                </v-badge>
                            </v-btn>
                        </template>

                        <v-list
                            :tile="false"
                            nav
                        >
                            <!-- <div>
                                <app-bar-item
                                    v-for="(n, i) in notifications"
                                    :key="`item-${i}`"
                                >
                                    <v-list-item-title v-text="n"></v-list-item-title>
                                </app-bar-item>
                                
                            </div> -->

                            <v-list-item
                                class="pb-0"
                                v-for="(n, i) in notifications"
                                :key="`item-${i}`"
                                dense
                            >
                                <v-list-item-content>
                                    <v-list-item-title 
                                        v-text="n"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                        </v-list>
                    </v-menu>

                    <v-btn icon>
                        <v-icon
                            color="black"
                        >mdi-account-outline</v-icon>
                    </v-btn>
                </v-app-bar>
            </v-col>
        </v-row>

        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list
                nav
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Karl Marx Manzano</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item-group>
                    <v-list-item
                        router 
                        :to="{ name: 'Dashboard' }"
                    >
                       <v-list-item-icon>
                           <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

                <v-list-item-group>
                    <v-list-item
                        router 
                        :to="{ name: 'User' }"
                    >
                       <v-list-item-icon>
                           <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Users</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

                <v-list-item-group>
                    <v-list-item
                        router 
                        :to="{ name: 'Role' }"
                    >
                       <v-list-item-icon>
                           <v-icon>mdi-account-key</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Roles</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

                <v-list-item-group>
                    <v-list-item
                        router 
                        :to="{ name: 'Permission' }"
                    >
                       <v-list-item-icon>
                           <v-icon>mdi-file-key</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Permissions</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

                <v-list-item-group>
                    <v-list-item
                        router 
                        :to="{ name: 'Product' }"
                    >
                       <v-list-item-icon>
                           <v-icon>mdi-cart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Products</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

                <v-list-item-group>
                    <v-list-item
                        router 
                    >
                       <v-list-item-icon>
                           <v-icon>mdi-file-document-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Reports</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <template v-slot:append>
                <div class="d-flex pa-4">
                    <v-icon>mdi-headset</v-icon>
                    <div class="d-flex flex-column pl-2 justify-center">
                        <p class="caption ma-0">karlmarxmanzano@gmail.com</p>
                    </div>
                </div>
            </template>

        </v-navigation-drawer>
    </v-container>
    <!-- <div id="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <router-link
                    class="navbar-brand"
                    tag="a"
                    :to="{ name: 'home' }"
                    active-class="active"
                    exact>Laravel</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                tag="a"
                                :to="{ name: 'home' }"
                                active-class="active"
                                exact>Home</router-link>
                        </li>
                        <li class="nav-item" v-if="authenticated">
                            <router-link
                                class="nav-link"
                                tag="a"
                                :to="{ name: 'dashboard' }"
                                active-class="active">Dashboard</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Users
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link
                                    class="dropdown-item"
                                    tag="a"
                                    :to="{ name: 'User' }">List</router-link>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Permissions
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link
                                    class="dropdown-item"
                                    tag="a"
                                    :to="{ name: 'Permission' }">List</router-link>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Roles
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link
                                    class="dropdown-item"
                                    tag="a"
                                    :to="{ name: 'Role' }">List</router-link>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link
                                    class="dropdown-item"
                                    tag="a"
                                    :to="{ name: 'ProductIndex' }">List</router-link>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <template v-if="!authenticated">
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    tag="a"
                                    :to="{ name: 'signin' }"
                                    active-class="active">Sign In</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    tag="a"
                                    :to="{ name: 'signup' }"
                                    active-class="active">Sign Up</router-link>
                            </li>
                        </template>
                        <li class="nav-item" v-else>
                            <a class="nav-link" @click.prevent="onSignOut" style="cursor: pointer;">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div> -->
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { VListItem } from 'vuetify/lib'

    export default {
        name: 'TheHeader',
        data() {
            return {
                drawer: true,
                notifications: [
                    'Mike John Responded to your email',
                    'You have 5 new tasks',
                    'You\'re now friends with Andrew',
                    'Another Notification',
                    'Another one',
                ],
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
        methods: {
            ...mapActions({
                signOut: 'auth/signOut'
            }),
            onSignOut() {
                this.signOut().then(() => {
                    this.$router.replace({ name: 'home'})
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-text-field {
        max-width: 300px;
    }
</style>