# Replaceholder (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/replaceholder-es](https://img.shields.io/github/v/release/hugoalh-studio/replaceholder-es?label=hugoalh-studio/replaceholder-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/replaceholder-es")](https://github.com/hugoalh-studio/replaceholder-es)
[![JSR: @hugoalh/replaceholder](https://img.shields.io/jsr/v/@hugoalh/replaceholder?label=JSR%20@hugoalh/replaceholder&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/replaceholder")](https://jsr.io/@hugoalh/replaceholder)
[![NPM: @hugoalh/replaceholder](https://img.shields.io/npm/v/@hugoalh/replaceholder?label=@hugoalh/replaceholder&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/replaceholder")](https://www.npmjs.com/package/@hugoalh/replaceholder)

An ES (JavaScript & TypeScript) module for literal string template.

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0 / >= v1.41.1 (For JSR Only)
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via JSR With `node_modules`

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - Bun
      ```sh
      bunx jsr add @hugoalh/replaceholder[@${Tag}]
      ```
    - NPM
      ```sh
      npx jsr add @hugoalh/replaceholder[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/replaceholder[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn dlx jsr add @hugoalh/replaceholder[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/replaceholder";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via JSR With Specifier

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    import ... from "jsr:@hugoalh/replaceholder[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With `node_modules`

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - NPM
      ```sh
      npm install @hugoalh/replaceholder[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm add @hugoalh/replaceholder[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn add @hugoalh/replaceholder[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/replaceholder";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script:
    ```ts
    import ... from "npm:@hugoalh/replaceholder[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via Remote Import

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    /* Via GitHub Raw (Require Tag) */
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/replaceholder-es/${Tag}/mod.ts";
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

## 🧩 API

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

## ✍️ Example

- ```ts
  new Replaceholder().handle("This is {{name}}, {{age}} years old, and likes to use \"\\{{replaceholder}}\"!", {
    age: "18",
    name: "Bob"
  });
  //=> "This is Bob, 18 years old, and likes to use \"{{replaceholder}}\"!"
  ```
