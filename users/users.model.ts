
const users = [
    {name: 'Peter Parker', email: 'parker@marvel.com'},
    {name: 'Bruce', email: 'bruce@dc.com'}
]

export class User {
    static findAll(): Promise<any> {
        return Promise.resolve(users)
    }
}