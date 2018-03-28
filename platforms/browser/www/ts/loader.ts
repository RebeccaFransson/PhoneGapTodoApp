import Vue from "vue";
import Todo from "../vue/todoComponent.vue";
import TodoObject from "./objects/TodoObject";
import {ServerCaller} from "./utils/ServerCaller";

new Vue({
    el: "#main",
    template: `
    <div>
        <todo :list="list"
              :save-todo="saveTodo" 
              :delete-todo="deleteTodo" 
              :update-todo-done="updateTodoDone"></todo>
    </div>`,
    components: {
        Todo
    },
    data: () => {
        return {
            serverCaller: new ServerCaller((message: any) => {
                console.warn("Update function")
                console.warn(message)
            }),
            list: [
                new TodoObject("Eat"),
                new TodoObject("Program"),
                new TodoObject("Sleep")
            ]
        }
    },
    created() {
        //this.serverCaller.connect();
    },
    destroyed() {
        //this.serverCaller.disconnect();
    },
    methods: {
        saveTodo(todo: TodoObject) {
            console.log("Saved a todo" + JSON.stringify(todo))
            this.list.push(todo)
            //this.serverCaller.saveTodo(todo);
        },
        deleteTodo(todo: TodoObject) {
            console.log("deleted a todo" + JSON.stringify(todo))
        },
        updateTodoDone(todo: TodoObject) {
            console.log("updated a todo" + JSON.stringify(todo))
        }
    }

});