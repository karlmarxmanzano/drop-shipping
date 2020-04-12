<template>
    <!-- <div>
        <UserList></UserList>
    </div> -->
    <v-container>
        <v-row>
            <v-col
                cols="4"
            >
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
                        <p class="white--text display-2 mb-0">38</p>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Current Sellers</div>
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
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            color="white"
                            line-width="2"
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
            <v-col>
                <UserList></UserList>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import UserList from './UserList'
    
    export default {
        name: 'Role',
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
            }
        },
        components: {
            UserList
        }
    }
</script>

<style lang="scss" scoped>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }
</style>