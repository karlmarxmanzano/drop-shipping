<template>
    <v-card>
        <v-app-bar
            app
            flat
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Drop Shipping</span>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <!-- <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                        text
                        v-on="on"
                    >
                        Dropdown
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>Menu 1</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->

            <v-btn icon @click.prevent="onSignOut">
                <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            width="220"
            app
        >
            <v-list 
                dense
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
                        :to="{ name: 'Product' }"
                    >
                       <v-list-item-icon>
                           <v-icon>mdi-file-document-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Products</v-list-item-title>
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
    </v-card>
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
    export default {
        name: 'TheHeader',
        data() {
            return {
                drawer: true,
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
