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
                                <tr v-for="(permission, key) in list" v-bind:key="key">
                                    <td>{{ permission.name }}</td>
                                    <td>{{ permission.created_at }}</td>
                                    <td><a href="#" @click.prevent="onGetProductInfo(product.id)">Edit</a> | <a href="#">Delete</a></td>
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
        name: 'PermissionTable',
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {
            ...mapActions({
                getList: 'permission/getList'
            })
        },
        computed: {
            ...mapGetters({
                list: 'permission/getPermissionList'
            })
        },
        components: {

        },
        mounted () {
            this.getList()
        }
    }
</script>
