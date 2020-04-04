<template>
    <div class="container">
        <div class="row justify-content-center">
            
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        New Product
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="onFormSubmit">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="name"
                                    v-model="form.name">
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="description"
                                    v-model="form.description">
                            </div>
                            <div class="form-group">
                                <label for="quantity">Quantity</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="quantity"
                                    v-model="form.quantity">
                            </div>
                            <div class="form-group">
                                <label for="amount">Amount</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="amount"
                                    v-model="form.amount">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Create</button>
                            </div>
                        </form>
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
                                    <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
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
        name: 'ProductIndex',
        data () {
            return {
                form: {
                    name: '',
                    description: '',
                    quantity: 0,
                    amount: 0
                }
            }
        },
        methods: {
            ...mapActions({
                addProduct: 'product/createProduct'
            }),
            loadList () {
                return this.$store.dispatch('product/allProducts')
            },
            onFormSubmit () {
                return this.addProduct(this.form)
            },
        },
        computed: {
            ...mapGetters({
                list: 'product/productList'
            })
        },
        mounted () {
            this.loadList()
        }
    }
</script>
