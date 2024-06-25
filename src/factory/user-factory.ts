import { PrismaUserService } from "../repositorys/prisma/prisma-users-repository";
import { RegisterService } from "../services/register-user/register-user";

export const makeRegisterService = () => {
	const usersRepository = new PrismaUserService();
	const registerService = new RegisterService(usersRepository);

	return registerService;
};
