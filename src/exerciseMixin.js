export const exerciseMixin = {
    data() {
        return {
            word: "",
        }
    },
    computed: {
        computedReverse() {
            return this.word.split("").reverse().join("");
        },
        computedLength() {
            return this.word + " (" + this.word.length + ")";
        }
    },
    created() {
        console.log('Created');
    }
};