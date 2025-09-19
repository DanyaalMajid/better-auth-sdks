// src\index.ts
import { Hono } from "hono";
import { pinoLogger } from "hono-pino";
import pino from "pino";
import type { AuthType } from "./lib/auth";
import auth from "./routes/auth";

const app = new Hono<{ Variables: AuthType }>({
	strict: false,
}).use(
	pinoLogger({
		pino: pino({
			base: null,
			level: "trace",
			transport: {
				target: "hono-pino/debug-log",
			},
			timestamp: pino.stdTimeFunctions.unixTime, // hh:mm:ss
		}),
	}),
);

const routes = [auth] as const;

routes.forEach((route) => {
	app.basePath("/api").route("/", route);
});

export default {
	port: process.env.BETTER_AUTH_SERVER_PORT || 3000,
	fetch: app.fetch,
};
