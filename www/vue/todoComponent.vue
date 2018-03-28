/**
* Purpose of this file is to render a vue component containing a to-do app
* Written by Rebecca Fransson on 2018-03-05
*/
<template>
    <div class="todoMain">
        <div class="list">
            <div class="title">todo-app</div>
            <todoList :list="list"
                      :delete-todo="deleteTodo"
                      :update-todo-done="updateTodoDone"></todoList>
        </div>
        <div class="addContainer">
            <input id="inputNewTodo" v-model="newTodo" type="text">
            <button @click="addTodo">add</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import TodoList from "./TodoListComponent.vue"
    import TodoObject from "../ts/objects/TodoObject";

    @Component({
        // Which properties that is passed to the component
        props: {
            list: Array,
            saveTodo: Function,
            deleteTodo: Function,
            updateTodoDone: Function
        },
        // Which components that will be used in this component
        components: {
            TodoList
        }
    })
    export default class Todo extends Vue {
        // Declare properties again for TypeScript
        list: Array<TodoObject>;
        saveTodo: Function;
        deleteTodo: Function;
        updateTodoDone: Function;
        // Declare other data variables
        newTodo: string = "";

        // Method for adding a new item to list
        addTodo() {
            const todo = new TodoObject(this.newTodo);
            this.newTodo = "";
            this.saveTodo(todo)
        }
    }
</script>

<style scoped>
    .todoMain {
        font-family: monospace;
        max-width: 500px;
        height: 100%;
        background-color: #7ca06e;
        border: 1px solid black;
        margin: auto;
    }

    .todoMain .title {
        background-color: #91bb81;
        font-size: 35px;
        text-align: center;
    }

    .todoMain .list{
        height: 87%;
    }

    .addContainer {
        background-color: #91bb81;
        padding: 10px;
    }

    .addContainer input {
        font-family: monospace;
        font-size: 25px;
        height: 30px;
        width: 98%;
    }

    .addContainer button {
        float: right;
        font-family: monospace;
        font-size: 20px;
        border-radius: 5px;
        height: 45px;
        border: none;
    }

    .addContainer button:hover {
        background-color: #3e6a37;
        color: whitesmoke;
    }

</style>