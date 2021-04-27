const obj1 = {
    a: 1,
    b: 24,
    c: 30
}

console.log(JSON.stringify(obj1)) //converte um objeto em JSON

const obj2 = '{"a": 455, "b": 130, "c": 22}'

console.log(JSON.parse(obj2)) //converte um JSON em objeto