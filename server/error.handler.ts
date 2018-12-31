import * as restify from 'restify'

export const handleError = (req: restify.Request, res: restify.Request, err, done) => {
    err.toJSON = () => {
        return {
            message: err.message
        }
    }
    switch(err.name) {
        case 'MongoError':
            if(err.code === 1100) {
                err.statusCode = 400
            }
            break
        case 'ValidationError':
            err.statusCode = 400
            const messages: any = []
            for(let name in err.errors) {
                messages.push({message: err.errors[name].message})
            }
            err.toJSON = () => ({
                errors: messages
            })
            break
    }
    done()
}