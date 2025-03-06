interface User {
    name: string;
    age: number;
    phoneNumber: number;
}

let obj: User = {
    name: 'Amar',
    age: 20,
    phoneNumber: 222222
}

abstract class Vehicle{
    abstract sound():void;
} 

class car extends Vehicle{
    sound(): void {
        console.log('sounddsdsd')
    }
}

interface vehicle{
    sound():void
}

class bike implements vehicle{
    sound(): void {
        console.log('sodundd')
    }
}

type User1 = {
    name:string;
    age: number
}

type Users<User1> = {
    [key in keyof User1] : User1[key]
}





















export{}