import type { Schools, User } from "@prisma/client";
import type { UserServiceInterface } from "../../repositorys/users-repository";

interface RegisterServiceRequest {
	name: string;
	email: string;
	password: string;
	school: Schools;
}

interface RegisterServiceResponse {
	user: User;
}

export class RegisterService {
	constructor(private usersRepository: UserServiceInterface) {}

	async execute({
		email,
		name,
		password,
		school,
	}: RegisterServiceRequest): Promise<RegisterServiceResponse> {
		const hashedPass = Bun.password.hashSync(password, { algorithm: "bcrypt" });

		const userExist = await this.usersRepository.getByEmail(email);
		if (userExist) throw new Error("Usuário já criado");

		const user = await this.usersRepository.create({
			email,
			name,
			password: hashedPass,
			school,
		});

		return { user };
	}
}
