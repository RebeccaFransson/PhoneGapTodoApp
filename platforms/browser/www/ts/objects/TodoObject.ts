export default class TodoObject {
    constructor(public thingTodo: string, public done: boolean = false, public created: Date = new Date()) {
    }
}