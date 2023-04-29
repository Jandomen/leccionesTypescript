// Aserciones 
let num: any = 42;
let string1  = <string>num;
let string2 = num as string;


// as const
const colors = <const> ['red', 'green', 'blue'];
const colores = ['amarillo', 'naranja','rosa','morado'] as const;
let z = <const> { text: "hello" };
let y = {text: "mundo"} as const;

export const Colors = {
    red: "RED",
    blue: "BLUE",
    green: "GREEN",
  } as const; 
 

// as [type]

let v = 42;
let str = v as string;

// as any
let anyValue: any = 15;
anyValue = 'Hello, world!';
anyValue = true;




// Asercion no nula

let name: string | null = null;
let nameLength = name!.length;

function validateEntity(e?: Entity) {}
function processEntity(e?: Entity) {
    validateEntity(e);
    let s = e!.name;
  }

// satisfies Keyword
type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];


const palette: Record<Colors, string | RGB> = {
    red: [255, 0, 0],
    green: '#00ff00',
    bleu: [0, 0, 255],
    // se detecta un error 
};

// TIPOS PRIMITIVOS

// tipo boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

//tipo numero
let intValue: number = 42;
let floatValue: number = 3.14;

//tipo string
let nombre: string = 'John Doe';

//tipo void 
function noop() {
    return;
  }

let k: void = undefined;
let l: void = null;

// tipo undefine

function doSomething(x: string | null) {
    if (x === null) {
      
    } else {
      console.log('Hello, ' + x.toUpperCase());
    }
  }

// TIPOS DE OBJETOS

// interface

interface Persona1 {
    nombre: string;
    edad: number;
  }
  
  function greet(person: Persona1) {
    return 'Hello ' + person.nombre;
  }

// class  

class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    drive() {
      console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
    }
  }

// enum

enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

 // arrays
 
 const numbers: number[] = [1, 2, 3];

 // tuples

 type StringNumberPair = [string, number];

const pair: StringNumberPair = ['hello', 42];

const first = pair[0];
const second = pair[1];
const third = pair[2];

// others types

       //any

let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

       
       //object

function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  
  printCoord({ x: 3, y: 7 });

      
  
        //unknown

  function f1(a: any) {
    a.b(); 
  }
  
  function f2(a: unknown) {
    a.b();
  }
    
  
          //never

  function error(message: string): never {
    throw new Error(message);
  }
  
  
  function fail() {
    return error('Something failed');
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }

// Type Inference

let x = 3;
   
let p = [0, 1, null];


// type compatibility

interface Point {
    x: number;
    y: number;
  }
  
  let p1: Point = { x: 10, y: 20 };
  let p2: { x: number; y: number } = p1;
  
// Tipo union

type stringOrNumber = string | number;
let value: stringOrNumber = 'hello';

value = 9;

// Tipo interseccion

interface A {
    a: string;
  }
  
  interface B {
    b: number;
  }
  
  type AB = A & B;
  let valor: AB = { a: 'hello', b: 42 };

// Combining Types

// tipos de union

function combine(input1: string | number, input2: string | number) {
    return input1 + input2;
  }

// Intersection Types

type typeAB = typeA & typeB;

interface Person {
    name: string;
    age: number;
  }
  
  interface Employee {
    companyId: string;
    position: string;
  }
  
  type PersonAndEmployee = Person & Employee;
  
  const johnDoe: PersonAndEmployee = {
    name: "John Doe",
    age: 30,
    companyId: "XYZ",
    position: "Manager",
  };

  // Type Aliases

type Name = string;
type Age = number;
type User = { name: Name; age: Age };

const user: User = { name: 'John', age: 30 };

// keyof operator

interface usuario {
    name: string;
    age: number;
    location: string;
  }
  
  type UserKeys = keyof usuario; 
  const key: UserKeys = 'name';


//typeof type guards

//typeof

let valor1: string | number = 'hello';

if (typeof valor1 === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}

// instanceof

class Bird {
    fly() {
      console.log('flying...');
    }
    layEggs() {
      console.log('laying eggs...');
    }
  }
  
  const pet = new Bird();
  
 
  if (pet instanceof Bird) {
    pet.fly();
  } else {
    console.log('pet is not a bird');
  }
  

  //equality

  function example(x: string | number, y: string | boolean) {
    if (x === y) {
      x.toUpperCase();
      y.toLowerCase();
    } else {
      console.log(x);
      console.log(y);
    }
  }
  
  //Truthiness

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
  }

     //Type Predicates

     function isString(value: unknown): value is string {
        return typeof value === 'string';
      }
      
      function ejemplo(x: unknown) {
        if (isString(x)) {
          x.toUpperCase();
        } else {
          console.log(x);
        }
      }    


//Functions


     //Typing Functions
            
         //Declaración de función con tipos:
    
         function add(a: number, b: number): number {
        return a + b;
      }
          
        //Función de flecha con tipos:

        const multiply = (a: number, b: number): number => {
            return a * b;
          };

          //Tipo de función:

          let divide: (a: number, b: number) => number;

          divide = (a, b) => {
            return a / b;
          };

     //Function Overloading

     function agregar(a: number, b: number): number;
     function agregar(a: string, b: string): string;
     
     function agregar(a: any, b: any): any {
       return a + b;
     }

 
//Interfaces

   //Types vs Interfaces


   type Person1 = {
    name: string;
    age: number;
  };

  const person1: Person1 = {
    name: 'John Doe',
    age: 30,
  };

  interface Person2 {
    name: string;
    age: number;
  }
  
  const person2: Person2 = {
    name: 'Mary Jackson',
    age: 22,
  };

  //Extending Interfaces

  interface Shape {
    width: number;
    height: number;
  }
  
  interface Square extends Shape {
    sideLength: number;
  }
  
  let square: Square = {
    width: 10,
    height: 10,
    sideLength: 10,
  };

  //Interface Declaration

  interface Person {
    firstName: string;
    lastName: string;
    age?: number;
  
    getFullName(): string;
  }

  //Hybrid Types

type StringOrNumber = string | number;


type Education = {
    degree: string;
    school: string;
    year: number;
  };
  
  type User3 = {
    name: string;
    age: number;
    email: string;
    education: Education;
  };




