<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>Exercise 1</p>
                <div>
                    <input type="text"
                           v-model="word">
                    <p>{{ word | reverse }}</p>

                    <p>{{ computedReverse }}</p>
                </div>



                <p>Exercise 2</p>
                <div>
                    <input type="text"
                           v-model="word">
                    <p>{{ word | length }}</p>

                    <p>{{ computedLength }}</p>
                </div>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                word: ""
            }
        },
        filters: {
            reverse(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            computedReverse() {
                return this.word.split("").reverse().join("");
            },
            computedLength() {
                return this.word + " (" + this.word.length + ")";
            }
        }
    }
</script>

<style>
</style>
