declare const WEBSOCKET_TODO: any;

export class ServerCaller {
    private socket = WEBSOCKET_TODO;

    constructor(update: Function) {
        this.socket.onmessage = update;
        this.socket.onopen = (evt:any) => {
            this.onOpen(evt)
        };
        this.socket.onclose = (evt:any) => {
            this.onClose(evt)
        };
        this.socket.onmessage = (evt:any) => {
            this.onMessage(evt)
        };
        this.socket.onerror = (evt:any) => {
            this.onError(evt)
        };

    }

    onOpen(evt:any) {
        console.log("CONNECTED");
        this.doSend("WebSocket rocks");
        console.log(evt);
    }

    onClose(evt:any) {
        console.log("DISCONNECTED");
        console.log(evt);
    }

    onMessage(evt:any) {
        console.log("RESPONSE: " + evt.data );
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
    }
    public saveTodo(message: TodoObject) {
        this.socket.send(message)
    }*/
}