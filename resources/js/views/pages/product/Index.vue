<template>
    <div class="container">
        <div class="row justify-content-center">
            
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        New Product
                    </div>
                    <div class="card-body">
                        <ProductFrom 
                            :isEdit="isEdit"
                            :productId="productId"
                            ></ProductFrom>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Product List
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Quantity</th>
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
                                <tr v-for="(product, key) in list" v-bind:key="key">
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.description }}</td>
                                    <td>{{ product.quantity }}</td>
                                    <td>{{ product.amount }}</td>
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

    import ProductFrom from './Form'

    export default {
        name: 'ProductIndex',
        data () {
            return {
                isEdit: false,
                productId: null
            }
        },
        computed: {
            isEdit () {
                return this.isEdit
            }
        },
        methods: {
            ...mapActions({
                getProducts: 'product/allProducts'
            }),
            ...mapGetters({
                pinfo: 'product/productInfo'
            }),
            loadList () {
                return this.getProducts()
            },
            onGetProductInfo (payload) {
                this.productId = payload
            }
        },
        computed: {
            ...mapGetters({
                list: 'product/productList'
            })
        },
        components: {
            ProductFrom
        },
        mounted () {
            this.loadList()
        }
    }
</script>
