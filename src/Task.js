export default class Task{
    id = 0;
    name = ''
    dueDate = ''
    state = false

    constructor(id, name, dueDate){
        this.id = id
        this.name = name
        this.dueDate = dueDate
    }

    static create(id, name, dueDate){
        const newTask = new Task(id, name, dueDate)
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