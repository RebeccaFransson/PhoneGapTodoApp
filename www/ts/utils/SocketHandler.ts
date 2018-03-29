import TodoObject from "../objects/TodoObject";

declare const WEBSOCKET_TODO: any;

export class SocketHandler {
    private socket = WEBSOCKET_TODO;
    private update: Function;

    constructor(update: Function) {
        this.update = update;
        this.socket.onopen = (evt:any) => {
            console.log("onopen")
            this.onOpen(evt)
        };
        this.socket.onclose = (evt:any) => {
            console.log("onclose")
            this.onClose(evt)
        };
        this.socket.onmessage = (evt:any) => {
            console.log("onmessage")
            this.onMessage(evt)
        };
        this.socket.onerror = (evt:any) => {
            this.onError(evt)
        };

    }

    onOpen(evt:any) {
        console.log("CONNECTED");
        //this.doSend("WebSocket rocks");
        console.log(evt);
    }

    onClose(evt:any) {
        console.log("DISCONNECTED");
        console.log(evt);
    }

    onMessage(evt:any) {
        console.log("RESPONSE: " + evt.data );
        // Update the TodoList
        this.update(evt.data);
        //this.socket.close();
    }

    onError(evt:any) {
        console.log("ERROR: " + evt.data);
    }

    doSend(message:any) {
        console.log("SENT: " + message);
        this.socket.send(message);
    }


    /*
    public connect() {
        console.log(this.socket)
        this.socket.CONNECTING
    }
    public disconnect() {
        this.socket.CLOSED
    }*/
    public saveTodo(todo: TodoObject) {
        console.log("save todo " + todo)
    }
}