import 'jest'
import * as request from 'supertest'

let address: string = (<any>global).address

test('get /users', () => {
    return request(address)
        .get('/users')
        .then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.items).toBeInstanceOf(Array)
        }).catch(fail)
})