import User from "../../../domain/user/user";
import UserRepositoryInterface from "../../../domain/user/user_repository_interface";

export default class UserRepository implements UserRepositoryInterface {

	findById(id: string): void {
		throw new Error("Method not implemented.");
	}

	findByEmail(email: string): void {
		throw new Error("Method not implemented.");
	}

	findAll(): void {
		throw new Error("Method not implemented.");
	}

	save(user: User): void {
		throw new Error("Method not implemented.");
	}

	update(user: User): void {
		throw new Error("Method not implemented.");
	}

	delete(user: User): void {
		throw new Error("Method not implemented.");
	}

}