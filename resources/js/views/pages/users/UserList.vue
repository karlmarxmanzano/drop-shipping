<template>
    <v-card>
        <v-card-title>
            Order Status
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>

        <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        ></v-data-table>
    </v-card>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'UserList',
        data () {
            return {
                search: '',
                headers: [
                    {
                        text: 'First Name',
                        align: 'start',
                        value: 'firstName',
                    },
                    {
                        text: 'Last Name',
                        value: 'lastName'
                    },
                    {
                        text: 'Role',
                        value: 'role'
                    },
                    {
                        text: 'Active Items',
                        value: 'activeItems'
                    },
                    {
                        text: 'Action',
                        value: ''
                    },
                ],
                users: [
                    {
                        firstName: 'John',
                        lastName: 'Doe',
                        role: 'Seller',
                        activeItems: '12'
                    },
                    {
                        firstName: 'Jane',
                        lastName: 'Doe',
                        role: 'Seller',
                        activeItems: '14'
                    },
                    {
                        firstName: 'Juan',
                        lastName: 'Dela Cruz',
                        role: 'Buyer',
                        activeItems: '11'
                    },
                    {
                        firstName: 'Tim',
                        lastName: 'Murphy',
                        role: 'Seller',
                        activeItems: '6'
                    },
                    {
                        firstName: 'John',
                        lastName: 'Snow',
                        role: 'Buyer',
                        activeItems: '4'
                    },
                    {
                        firstName: 'John',
                        lastName: 'Doe',
                        role: 'Seller',
                        activeItems: '12'
                    },

                ],
                
            }
        },
        computed: {

        },
        methods: {
            ...mapActions({
                getList: 'user/getList'
            })
        },
        computed: {
            ...mapGetters({
                list: 'user/getUserList'
            })
        },
        components: {

        },
        mounted () {
            this.getList()
        }
    }
</script>
