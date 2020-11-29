const name = "Donghun",
  age = 28,
  gender = "male";


// const sayHi = (name, age, gender) => {
const sayHi = (name, age, gender?) => { // gender는 Optional이 된다.
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}.`);
};

// 만약 여기서 gender가 없으면 compile 에러가 뜬다. TS라서 가능
// JS에선 그냥 실행된다.
sayHi(name, age, gender);

// 이 파일이 모듈이 된다는걸 알려줄 수 있다.
export { };