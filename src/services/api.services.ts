const getUsers = async () => {
    return     await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json());




}
    export {
    getUsers

    }