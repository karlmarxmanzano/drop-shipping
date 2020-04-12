<template>
    <!-- <form @submit.prevent="onFormSubmit">
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
            <button type="submit" class="btn btn-primary">{{ formStatus }}</button>
        </div>
    </form> -->

    <v-form>
        <v-text-field
            label="E-mail"
            required
        >
        </v-text-field>

        <v-text-field
            label="E-mail"
            required
        >
        </v-text-field>

        <v-text-field
            label="E-mail"
            required
        >
        </v-text-field>

        <v-text-field
            label="E-mail"
            required
        >
        </v-text-field>
    </v-form>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'ProductForm',
        props: {
            isEdit: Boolean,
            productId: Number
        },
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
        computed: {
            formStatus () {
                return this.isEdit == true ? 'Update' : 'Save';
            }
        },
        methods: {
            ...mapActions({
                addProduct: 'product/createProduct',
                getProducts: 'product/allProducts'
            }),
            loadList () {
                return this.getProducts()
            },
            onFormSubmit () {
                this.loadList()
                return this.addProduct(this.form)
            }
        }
    }
</script>
