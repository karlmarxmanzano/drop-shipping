<template>
    <!-- <div class="container">
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
    </div> -->
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-card>
                    <v-card-text>
                        <ProductForm></ProductForm>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card>
                    <v-card-title center class="text-uppercase">Product List</v-card-title>
                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="list"
                            :items-per-page="5"
                            class="elevation-1"
                        ></v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    import ProductForm from './Form'

    export default {
        name: 'ProductIndex',
        data () {
            return {
                isEdit: false,
                productId: null,
                headers: [
                    {
                        text: 'Name',
                        align: 'start',
                        value: 'name',
                    },
                    { text: 'Description', value: 'description' },
                    { text: 'Quantity', value: 'quantity' },
                    { text: 'Amount', value: 'amount' },
                ],
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
            ProductForm
        },
        mounted () {
            this.loadList()
        }
    }
</script>
