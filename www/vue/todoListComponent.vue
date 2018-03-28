/**
* Purpose of this file is to display a table with the todos that is passed to this component
* Written by Rebecca Fransson on 2018-03-05
*/
<template>
    <div class="todoListMain">
        <table>
            <thead>
            <tr>
                <th width="5%">&nbsp;</th>
                <th>Item</th>
                <th width="5%">&nbsp;</th>
                <th width="40%">Created</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in list">
                <td>
                    <input type="checkbox" :checked="item.done" @click="updateTodoDone(item)" title="checkboxForDone">
                </td>
                <td>{{ item.thingTodo }}</td>
                <td><a @click="deleteTodo(item)" title="Ta bort">&#10062;</a></td>
                <td>{{createdAgo(item.created)}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import TodoObject from "../ts/objects/TodoObject";

    @Component({
        props: {
            list: Array,
            deleteTodo: Function,
            updateTodoDone: Function
        }
    })
    export default class TodoList extends Vue {
        // Declare properties again for TypeScript
        list: Array<TodoObject>;
        /**
         * Deletes a todoItem
         * @param {TodoObject} item
         */
        deleteTodo: Function;
        /**
         * Updates the property done on the todoItem
         * @param {TodoObject} item
         */
        updateTodoDone: Function;

        /**
         * Return a string that tells when the item was created
         * @param {string} created
         * @returns {string} tex: "3 days ago"
         */
        createdAgo(created: string): string {
            const today = new Date();
            const then = new Date(created);

            const milliDiff = Math.abs(then.getTime() - today.getTime());
            const secondsDiff = Math.floor(milliDiff / 1000);
            const minutesDiff = Math.floor(secondsDiff / 60);
            const hoursDiff = Math.floor(minutesDiff / 60);

            if (secondsDiff < 60) {
                return minutesDiff + " seconds ago"
            } else if (minutesDiff < 60) {
                return minutesDiff + " minutes ago"
            } else if (hoursDiff < 24) {
                return hoursDiff + " hours ago"
            } else {
                return Math.floor(hoursDiff / 24) + " days ago"
            }
        }
    }
</script>

<style scoped>
    .todoListMain {
        font-family: monospace;
        margin: auto;
        margin-top: 1px;
    }

    table {
        width: 100%;
        font-size: 22px;
    }

    table tr {
        background-color: #647f59;
        color: whitesmoke;
    }

    table tr td:nth-child(1) {
        width: 60px;
    }

    table tr input {
        font-size: inherit;
    }
</style>