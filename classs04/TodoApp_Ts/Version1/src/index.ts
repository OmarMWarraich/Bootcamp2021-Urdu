import { TodoItem } from "./todoItem";
import { ItemCollection } from "./itemCollection";

console.clear();

let col1: ItemCollection = new ItemCollection();

col1.addTodo("Purchase Mango");
col1.addTodo("Sell Mango");
col1.addTodo("Ande wala burger");

col1.printDetails();