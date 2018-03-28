import Vue from "vue";

new Vue({
    el: "#main",
    template: `
    <div>
        <h1>Hello World</h1>
    </div>`,
    components: {

    },
    created() {
        console.warn("Vue is working!")
    },

});