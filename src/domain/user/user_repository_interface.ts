import User from "./user";

export default class UserRepositoryInterface {

	constructor() {
		throw new Error('This is an interface');
	}

	findById(id: string) {
		throw new Error('This is an interface');
	}

	findByEmail(email: string) {
		throw new Error('This is an interface');
	}

	findAll() {
		throw new Error('This is an interface');
	}

	save(user: User) {
		throw new Error('This is an interface');
	}

	update(user: User) {
		throw new Error('This is an interface');
	}

	delete(user: User) {
		throw new Error('This is an interface');
	}
}