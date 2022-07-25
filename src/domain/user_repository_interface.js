export default class UserRepositoryInterface {

    constructor() {
        throw new Error('This is an interface');
    }

    findById(id) {
        throw new Error('This is an interface');
    }

    findByEmail(email) {
        throw new Error('This is an interface');
    }

    findAll() {
        throw new Error('This is an interface');
    }

    save(user) {
        throw new Error('This is an interface');
    }

    update(user) {
        throw new Error('This is an interface');
    }

    delete(user) {
        throw new Error('This is an interface');
    }
}