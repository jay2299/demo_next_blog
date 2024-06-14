export default async function grtUser(){
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json()
}