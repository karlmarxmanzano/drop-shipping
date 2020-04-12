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
                    >Sign <span class="blue--text pl-2">Up</span></v-card-title>

                    <v-card-text>

                        <v-alert 
                            type="error"
                            dismissible
                        >
                            I'm an error alert.
                        </v-alert>
                        
                        <!-- <ValidationObserver ref="observer" v-slot="{ validate, reset }"> -->
                            <v-form>
                                <ValidationProvider 
                                    v-slot="{ errors }" 
                                    name="First Name" 
                                    rules="required|min:2"
                                >
                                    <v-text-field
                                        v-model="firstName"
                                        :error-messages="errors"
                                        label="First Name"
                                        required
                                    ></v-text-field>
                                </ValidationProvider>

                                <ValidationProvider 
                                    v-slot="{ errors }" 
                                    name="Last Name" 
                                    rules="required|min:2"
                                >
                                    <v-text-field
                                        v-model="lastName"
                                        :error-messages="errors"
                                        label="Last Name"
                                        required
                                    >
                                    </v-text-field>
                                </ValidationProvider>

                                <ValidationProvider 
                                    v-slot="{ errors }" 
                                    name="E-mail" 
                                    rules="required|email"
                                >
                                    <v-text-field
                                        v-model="email"
                                        :error-messages="errors"
                                        label="E-mail"
                                        required
                                    >
                                    </v-text-field>
                                </ValidationProvider>

                                <ValidationObserver>
                                    <ValidationProvider 
                                        v-slot="{ errors }" 
                                        name="Password" 
                                        rules="required|min:6"
                                    >
                                        <v-text-field
                                            v-model="password"
                                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            :error-messages="errors"
                                            :type="showPassword ? 'text' : 'password'"
                                            label="Password"
                                            required
                                        >
                                        </v-text-field>
                                    </ValidationProvider>

                                    <ValidationProvider 
                                        v-slot="{ errors }" 
                                        vid="confirmPassword"
                                        name="Confirm Password" 
                                        rules="required|min:6|password:@password"
                                    >
                                        <v-text-field
                                            v-model="confirmPassword"
                                            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            :error-messages="errors"
                                            :type="showConfirmPassword ? 'text' : 'password'"
                                            label="Confirm Password"
                                            required
                                        >
                                        </v-text-field>
                                    </ValidationProvider>
                                </ValidationObserver>

                            </v-form>
                        <!-- </ValidationObserver> -->
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
                                >Sign up</v-btn>
                            </v-col>

                            <v-col 
                                cols="12"
                            >
                                <p class="signup">Already have an account? <a href="#">Sign in</a> here.</p>
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
                        Register
                    </div>
                    <div class="card-body"> -->
                        <!-- <div 
                            class="alert alert-danger" 
                            role="alert"
                            v-if="error">
                            {{ error }}
                        </div> -->
                        <!-- <form @submit.prevent="">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    class="form-control" 
                                    placeholder="Name"
                                    v-model="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    class="form-control" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"
                                    v-model="email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    class="form-control" 
                                    placeholder="Password"
                                    v-model="password">
                            </div> -->
                            <!-- <div class="form-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input type="password" name="confirmPassword" class="form-control" placeholder="Password">
                            </div> -->
                            <!-- <div class="form-group">
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
    import { required, email, min, max } from 'vee-validate/dist/rules'
    import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

    extend('required', {
        ...required,
        message: 'This {_field_} is required',
    })

    extend('min', {
        ...min,
        message: '{_field_} may not be lesser than {length} characters',
    })

    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })

    extend('email', {
        ...email,
        message: 'Email must be valid',
    })

    extend('password', {
        params: ['target'],
        validate(value, { target }) {
            return value === target;
        },
        message: 'Passwords confirmation does not match'
    });

    export default {
        name: 'SignUp',
        data () {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                showPassword: false,
                showConfirmPassword: false
            }
        },
        components: {
            ValidationProvider
        }
    }
</script>