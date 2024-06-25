import type { Prisma } from "@prisma/client";
import type { UserServiceInterface } from "../users-repository";
import { prisma } from "../../../prisma/prisma";

export class PrismaUserService implements UserServiceInterface {
	async create(data: Prisma.UserCreateInput) {
		return await prisma.user.create({
			data,
		});
	}
	async getById(id: string) {
		return await prisma.user.findUnique({
			where: { id },
		});
	}

	async findAll() {
		return await prisma.user.findMany();
	}

	async getByEmail(email: string) {
		return await prisma.user.findUnique({
			where: {
				email,
			},
		});
	}
}
