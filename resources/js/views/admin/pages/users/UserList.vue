<template>
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        User List
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Roles</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr>
                                    <th scope="row">1</th>
                                    <td>T-shirt</td>
                                    <td>Plain white</td>
                                    <td>1</td>
                                    <td>79.00</td>
                                    <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                                </tr> -->
                                <tr v-for="(user, key) in list" v-bind:key="key">
                                    <td>{{ user.first_name }}</td>
                                    <td>{{ user.last_name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>
                                        <span class="" v-for="(role, roleKey) in user.roles" v-bind:key="roleKey">
                                            {{ role.name }}
                                        </span>
                                    </td>
                                    <td>{{ user.created_at }}</td>
                                    <td><a href="#" @click.prevent="">Edit</a> | <a href="#">Delete</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'UserList',
        data () {
            return {

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
