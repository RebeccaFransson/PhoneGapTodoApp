import Vue from "vue";
import Todo from "../vue/todoComponent.vue";
import TodoObject from "./objects/TodoObject";
import {SocketHandler} from "./utils/SocketHandler";

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
            socketHandler: new SocketHandler(() => {}),
            list: [ new TodoObject("Eat")]
        }
    },
    computed: {
        
    },
    created() {
        this.socketHandler = new SocketHandler((newList: any) => {
            console.warn("Update function")
            console.warn(newList)
            console.warn(JSON.parse(newList))
            this.list = JSON.parse(newList)
        })
    },
    destroyed() {
    },
    methods: {
        saveTodo(todo: TodoObject) {
            console.log("Saved a todo" + JSON.stringify(todo))
            this.list.push(todo)
            this.socketHandler.saveTodo(todo);
        },
        deleteTodo(todo: TodoObject) {
            console.log("deleted a todo" + JSON.stringify(todo))
        },
        updateTodoDone(todo: TodoObject) {
            console.log("updated a todo" + JSON.stringify(todo))
        }
    }

});