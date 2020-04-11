<template>
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Permission
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Permission</th>
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
                                <tr v-for="(role, key) in list" v-bind:key="key">
                                    <td>{{ role.name }}</td>
                                    <td>
                                        <span class="" v-for="(permission, permissionKey) in role.permissions" v-bind:key="permissionKey">
                                            {{ permission.name }}
                                        </span>
                                    </td>
                                    <td>{{ role.created_at }}</td>
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
        name: 'Role',
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {
            ...mapActions({
                getList: 'role/getList'
            })
        },
        computed: {
            ...mapGetters({
                list: 'role/getRolesList'
            })
        },
        components: {

        },
        mounted () {
            this.getList()
        }
    }
</script>
