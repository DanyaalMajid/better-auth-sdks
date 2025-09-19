// src\routes\auth.ts
import { Hono } from "hono";
import type { AuthType } from "../lib/auth.js";
import { auth } from "../lib/auth.js";

const router = new Hono<{ Bindings: AuthType }>({
	strict: false,
});

router.on(["POST", "GET"], "/auth/*", (c) => {
	return auth.handler(c.req.raw);
});

export default router;
