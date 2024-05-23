# Replaceholder (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/replaceholder-es](https://img.shields.io/github/v/release/hugoalh-studio/replaceholder-es?label=hugoalh-studio/replaceholder-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/replaceholder-es")](https://github.com/hugoalh-studio/replaceholder-es)
[![JSR: @hugoalh/replaceholder](https://img.shields.io/jsr/v/@hugoalh/replaceholder?label=@hugoalh/replaceholder&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/replaceholder")](https://jsr.io/@hugoalh/replaceholder)
[![NPM: @hugoalh/replaceholder](https://img.shields.io/npm/v/@hugoalh/replaceholder?label=@hugoalh/replaceholder&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/replaceholder")](https://www.npmjs.com/package/@hugoalh/replaceholder)

An ES (JavaScript & TypeScript) module for literal string template.

## 🔰 Begin

### 🎯 Targets

|  | **Registry - JSR** | **Registry - NPM** | **Remote Import** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | [✔️ `node_modules`](https://jsr.io/docs/npm-compatibility) | [✔️ Specifier `npm:`](https://bun.sh/docs/runtime/autoimport) | ❌ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | [✔️ `node_modules`](https://jsr.io/docs/with/cloudflare-workers) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |
| **[Deno](https://deno.land/)** >= v1.42.0 | [✔️ Specifier `jsr:`](https://jsr.io/docs/with/deno) | [✔️ Specifier `npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) | [✔️](https://docs.deno.com/runtime/manual/basics/modules/#remote-import) |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | [✔️ `node_modules`](https://jsr.io/docs/with/node) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |

> **ℹ️ Note**
>
> It is possible to use this module in other methods/ways which not listed in here, however it is not officially supported.

### #️⃣ Registries Identifier

- **JSR:**
  ```
  @hugoalh/replaceholder
  ```
- **NPM:**
  ```
  @hugoalh/replaceholder
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to use this module with tag for immutability.

### #️⃣ Remote Import Paths

- **GitHub Raw:** (Require Tag)
  ```
  https://raw.githubusercontent.com/hugoalh-studio/replaceholder-es/${Tag}/mod.ts
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.

### 🛡️ Permissions

*This module does not require any permission.*

## 🧩 APIs

- ```ts
  class Replaceholder {
    constructor(options: ReplaceholderOptions = {}): Replaceholder;
    handle(item: string, data: KeyValueLike): string;
    static handle(item: string, data: KeyValueLike, options: ReplaceholderOptions = {}): string;
  }
  ```
- ```ts
  function replaceholder(item: string, data: KeyValueLike, options: ReplaceholderOptions = {}): string;
  ```
- ```ts
  interface ReplaceholderOptions {
    /**
     * Pattern for the tag close.
     * @default "}}"
     */
    close?: string;
    /**
     * Pattern for the tag open.
     * @default "{{"
     */
    open?: string;
  }
  ```
- ```ts
  type KeyValueLike = { [key: string]: string; } | Map<string, string> | Record<string, string>;
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [JSR](https://jsr.io/@hugoalh/replaceholder)

## ✍️ Examples

- ```ts
  new Replaceholder().handle("This is {{name}}, {{age}} years old, and likes to use \"\\{{replaceholder}}\"!", {
    age: "18",
    name: "Bob"
  });
  //=> "This is Bob, 18 years old, and likes to use \"{{replaceholder}}\"!"
  ```
