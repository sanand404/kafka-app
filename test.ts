function add<T>(num1: T, num2: T) {
    if(typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    if(typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
}

console.log(add(1, 2));
console.log(add("1", "2"));
