import {Task} from "./Task";
import {TaskCollection} from "./TaskCollection";

let task01: TaskCollection = new TaskCollection();
task01.addTodo("Aam Ley Aao");
task01.addTodo("Battery Terminal Ley Aao");
task01.printAll();

task01.taskDone(2);
task01.printAll();

task01.addTodo("Aam 2 Ley Aao");
task01.addTodo("Battery 4 Terminal Ley Aao");
task01.getTodoById(3);

