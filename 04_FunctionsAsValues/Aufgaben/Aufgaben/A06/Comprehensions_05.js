class User {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
}
const users = [
    new User("Alice", ["Task 1", "Task 2", "Task 3"]),
    new User("Bob", ["Task 1", "Task 4", "Task 5"]),
    new User("Charlie", ["Task 2", "Task 3", "Task 6"])
];
const tasksCompleted = ["Task 1", "Task 3", "Task 5"];
const pendingTasks = users.flatMap(user =>
    user.tasks
        .filter(task => !tasksCompleted.includes(task))
        .map(task => ({ user: user.name, task }))
);
console.log(pendingTasks);
