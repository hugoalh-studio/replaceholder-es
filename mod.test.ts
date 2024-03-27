import { assertEquals } from "TEST/assert_equals.ts";
import { Replaceholder } from "./mod.ts";
Deno.test("Main", { permissions: "none" }, () => {
	assertEquals(new Replaceholder().handle("abc{{age}}{{name}}\\{{name2}}def", {
		age: "30",
		name: "def"
	}), "abc30def{{name2}}def");
});
