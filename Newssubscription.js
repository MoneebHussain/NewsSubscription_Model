class MobileApp {
    constructor() {
        this.subscribers = [];
    }
    subscribe(user) {
        if (!this.subscribers.includes(user)) {
            this.subscribers.push(user)
        }
    }
    unSubscribe(user) {
        const index = this.subscribers.indexOf(user);
        if (index != -1) {
            this.subscribers.splice(index, 1)
        }
    }
    notifySubscribers(update) {
        console.log(`New update published: ${update}`)
        for (const user of this.subscribers) {
            user.Update(update);
        }
    }
}
class user{
    constructor(name){
        this.name=name;
    }
   Update(update){
    console.log(`${this.name} received notification: ${update}`);
   }
}

const app = new MobileApp();
const user1 = new user("Apple");
const user2 = new user("Lemon");
const user3 = new user("Mango");

app.subscribe(user1);
app.subscribe(user2);
app.subscribe(user3);
app.unSubscribe(user1)
app.notifySubscribers("New feature added"); 