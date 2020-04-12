<template>
    <v-container>
        <v-row>
            <v-col
                cols="4"
            >
                <v-card
                    class="mt-4"
                >
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        color="blue"
                        elevation="3"
                        max-width="calc(100% - 32px)"
                        height="120px"
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            :smooth="16"
                            :line-width="3"
                            color="white"
                            auto-draw
                            stroke-linecap="round"
                            padding="16"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Sales</div>
                        <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col
                cols="4"
            >
                <v-card
                    class="mt-4"
                >
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        color="blue"
                        elevation="3"
                        max-width="calc(100% - 32px)"
                        height="120px"
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            :smooth="16"
                            :line-width="3"
                            color="white"
                            auto-draw
                            stroke-linecap="round"
                            padding="16"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">User Registrations</div>
                        <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col
                cols="4"
            >
                <v-card
                    class="mt-4"
                >
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        color="blue"
                        elevation="3"
                        max-width="calc(100% - 32px)"
                        height="120px"
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            :smooth="16"
                            :line-width="3"
                            color="white"
                            auto-draw
                            stroke-linecap="round"
                            padding="16"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">User Registrations</div>
                        <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-card
                    class="mt-4"
                 >
                    <v-sheet
                        class="v-sheet--offset ml-4 d-flex align-center justify-center"
                        color="cyan"
                        elevation="6"
                        max-width="100px"
                        height="80"
                    >
                        <p class="white--text display-2 mb-0">65</p>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Current Buyers</div>
                        <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <v-card-text>
                        <p class="text-uppercase overline">Users</p>
                        <p class="title font-weight-bold">214</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <v-card-text>
                        <p class="text-uppercase overline">Products</p>
                        <p class="title font-weight-bold">214</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <v-card-text>
                        <p class="text-uppercase overline">Products</p>
                        <p class="title font-weight-bold">214</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-sheet
                        class="v-sheet--offset mt-4 mx-4 d-flex align-center justify-center"
                        color="cyan"
                        elevation="6"
                        height="50"
                    >
                        <div class="white--text title text-uppercase">Recent Activities</div>
                    </v-sheet>
                    
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :search="search"
                        ></v-data-table>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-sheet
                        class="v-sheet--offset mt-4 mx-4 d-flex align-center justify-center"
                        color="cyan"
                        elevation="6"
                        height="50"
                    >
                        <div class="white--text title text-uppercase">Recent Orders</div>
                    </v-sheet>
                    
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :search="search"
                        ></v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'dashboard',
        data() {
            return {
                labels: [
                    '12am',
                    '3am',
                    '6am',
                    '9am',
                    '12pm',
                    '3pm',
                    '6pm',
                    '9pm',
                ],
                value: [
                    200,
                    675,
                    410,
                    390,
                    310,
                    460,
                    250,
                    240,
                ],
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Calories', value: 'calories' },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' },
                    ],
                    desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%',
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%',
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%',
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
                    },
                ],
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }

    .v-application {
        & .title {
            letter-spacing: 1.5px !important;
        }
    }
</style>
