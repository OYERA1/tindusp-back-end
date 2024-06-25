import { describe, beforeEach, it, expect } from "bun:test";
import { InMemoryUserRepository } from "../../repositorys/in-memory/memory-user-repository";
import { RegisterService } from "./register-user";

let usersRepository: InMemoryUserRepository;
let sut: RegisterService;

describe("Register use case", () => {
	beforeEach(() => {
		usersRepository = new InMemoryUserRepository();
		sut = new RegisterService(usersRepository);
	});

	it("should register a user", async () => {
		const { user } = await sut.execute({
			email: "oyera@usp.br",
			name: "luan",
			password: "ludeca07",
			school: "FFLCH",
		});

		console.log(user);
		expect(user.id).toEqual(expect.any(String));
	});
});
