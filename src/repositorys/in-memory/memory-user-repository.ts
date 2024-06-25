import type { Prisma, User } from "@prisma/client";
import type { UserService } from "../prisma/prisma-users-repository";

export class InMemoryUserRepository implements UserService {
	item: User[] = [];

	async create(data: Prisma.UserCreateInput) {
		const user: User = {
			id: crypto.randomUUID(),
			cpf: data.cpf || null,
			email: data.email,
			latidude: data.latidude || null,
			longitude: data.latidude || null,
			name: data.name,
			nusp: data.nusp || null,
			password: Bun.password.hashSync(data.password, { algorithm: "bcrypt" }),
			phone: data.phone || null,
			school: data.school || null,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		this.item.push(user);

		return user;
	}

	async findAll() {
		return this.item;
	}

	async getByEmail(email: string) {
		const user = this.item.find((item) => item.email === email);
		if (!user) return null;
		return user;
	}

	async getById(id: string) {
		const user = this.item.find((item) => item.id === id);
		if (!user) return null;
		return user;
	}
}
