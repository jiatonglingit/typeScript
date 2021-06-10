//类型别名配合泛型的使用
type lists<T> = { elements: T[] }
let attas: lists<number> = { elements: [222, 11, 33] }


interface Person {
  name: string
}
interface Contact {
  phone: string
}
function showPersonContact(pers: Person & Contact) {
  console.log(pers);

}

showPersonContact({ name: "sss", phone: "sssaa" })