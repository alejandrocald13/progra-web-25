export default class Task{
    id = 0;
    name = ''
    dueDate = ''
    state = false

    constructor(id, name, dueDate, state = false){
        this.id = id
        this.name = name
        this.dueDate = dueDate
        this.state = state
    }

    static create(id, name, dueDate, state = false){
        const newTask = new Task(id, name, dueDate, state)
        return newTask
    }

    checkTask(){
        if (this.state === false){
            this.state = true
            console.log("Changing State...")
        }
    }

    jsonTask(){
        return {"id": this.id, "name": this.name, "dueDate": this.dueDate, "state": this.state}
    }
}