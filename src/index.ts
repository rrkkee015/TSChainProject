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
interface Human {
  name: string,
  age: number,
  gender: string
}

const person = {
  name: "Donghun",
  gender: "male",
  age: 28
};

// insertFace는 여기서 사용함
const objectSayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!.`;
}

console.log(objectSayHi(person));

// 이 파일이 모듈이 된다는걸 알려줄 수 있다.
export { };