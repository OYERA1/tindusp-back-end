import { Elysia } from "elysia";
import { env } from "../env";

const app = new Elysia().get("/", () => "Hello Elysia").post('/user', ({body}) => body)




app.listen(env.PORT);


console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
