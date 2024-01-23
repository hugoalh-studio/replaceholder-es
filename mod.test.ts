import { assertEquals } from "https://deno.land/std@0.212.0/assert/assert_equals.ts";
import { replaceholder } from "./mod.ts";
Deno.test("Empty", { permissions: "none" }, () => {
	assertEquals(replaceholder("abc{{age}}{{name}}\\{{name2}}def", {
		age: "30",
		name: "def"
	}), "abc30def{{name2}}def");
});
