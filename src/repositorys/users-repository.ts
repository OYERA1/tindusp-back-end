import type { Prisma, Schools, User } from "@prisma/client";

interface UserCreateIput {
	name: string;
	email: string;
	password: string;
	school: Schools;
}

export interface UserServiceInterface {
	create(data: UserCreateIput): Promise<User>;
	getById(id: User["id"]): Promise<User | null>;
	getByEmail(email: User["email"]): Promise<User | null>;
	findAll(): Promise<User[]>;
}
