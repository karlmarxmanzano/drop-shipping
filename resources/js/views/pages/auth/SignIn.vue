<template>
    <v-container
        class="grey lighten-4"
        fluid
        fill-height
    >
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                lg="4"
                md="4"
                sm="12"
            >
                <v-card
                    class="pa-8"
                >
                    <v-card-title 
                        class="text-uppercase
                        center 
                        grey--text 
                        justify-center"
                    >Drop <span class="blue--text pl-2">Shipping</span></v-card-title>

                    <v-card-text>
                        <v-alert 
                            type="error"
                            dismissible
                        >
                            I'm an error alert.
                        </v-alert>

                        <v-form>
                            <v-text-field
                                v-model="form.email"
                                :rules="[rules.required]"
                                label="E-mail"
                                required
                            >
                            </v-text-field>

                            <v-text-field
                                v-model="form.password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                name="input-10-1"
                                label="Password"
                                counter
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>

                            <v-checkbox
                                label="Remember Me"
                            ></v-checkbox>
                        </v-form>
                    </v-card-text>

                    <v-card-actions 
                        class="mx-2"
                    >
                        <v-row>
                            <v-col 
                                cols="12"
                            >
                                <v-btn 
                                    block 
                                    color="primary" 
                                    dark
                                    @click="onSignIn"
                                >Sign in</v-btn>
                            </v-col>

                            <v-col 
                                cols="12"
                            >
                                Not a member? <a href="#">Sign up</a> for free!
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Sign In
                    </div>
                    <div class="card-body"> -->
                        <!-- <div 
                            class="alert alert-danger" 
                            role="alert"
                            v-if="error">
                            {{ error }}
                        </div> -->
                        <!-- <form @submit.prevent="onSignIn">
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    class="form-control" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"
                                    v-model="form.email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    class="form-control" 
                                    placeholder="Password"
                                    v-model="form.password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'SignIn',
        data () {
            return {
                form: {
                    email: '',
                    password: ''
                },
                showPassword: false,
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                },
            }
        },
        methods: {
            ...mapActions({
                signIn: 'auth/signIn'
            }),
            onSignIn () {
                this.signIn(this.form)
                    .then(() => {
                        this.$router.push({ name: 'Dashboard' })
                    })
                    .catch(() => {
                        this.$router.replace({ name: 'home' })
                    })
            }
        },
        components: {

        }
    }
</script>