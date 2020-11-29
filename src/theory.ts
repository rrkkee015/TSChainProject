const name = "Donghun",
  age = 28,
  gender = "male";


const sayHi = (name: string, age: number, gender: string): void => {
  // const sayHi = (name, age, gender?) => { // gender는 Optional이 된다.
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}!!.`);
};

// 만약 여기서 gender가 없으면 compile 에러가 뜬다. TS라서 가능
// JS에선 그냥 실행된다.
// 함수에서 선언한 type과 다르게 주면 에러 뜬다.
sayHi(name, age, gender);

// Object에 뭐가 들었는지 나열이 가능하다.
// 얘는 JS로 컴파일 되지 않는다.
// 그래도 넣고 싶으면 class를 집어넣는다.
interface inHuman {
  name: string,
  age: number,
  gender: string
}

// JS에서는 클래스의 속성(property)를 묘사할 필요가 없었다.
// TS에선 어떤 속성들을 가져야 하는지 선언해야한다.
class Human {
  // public, private이 있는데, JS에선 신경쓰지 않는다.
  // private의 경우엔 class 내에서만 사용할 수 있다.
  // 즉 objectSayHi에서 person.age를 하는 부분에서 에러가 출력된다.
  public name: string;
  public age: number;
  public gender: string;
  // 생성자를 만드는데, 클래스로 객체를 만들 때마다 호출된다.
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "femail");

const person = {
  name: "Donghun",
  gender: "male",
  age: 28
};

// insertFace는 여기서 사용함
// const objectSayHi = (person: inHuman): string => {
const objectSayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!.`;
}

console.log(objectSayHi(person));
console.log(objectSayHi(lynn));

// 이 파일이 모듈이 된다는걸 알려줄 수 있다.
export { };