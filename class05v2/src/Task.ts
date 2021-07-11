class Task{
    public constructor(public taskId: number, public task: string, public done: boolean = true) {

    }

    printTask(): void {
        console.log(`The ID is: ${this.id} /n The task is ${this.task} /n The email is ${this.email}`);
    }

}

export class Task;