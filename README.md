# Replaceholder (Deno)

[⚖️ MIT](./LICENSE.md)

|  | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/replaceholder-deno) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/replaceholder-deno?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/replaceholder-deno?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/replaceholder-deno?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/replaceholder-deno?label=&style=flat-square "GitHub Latest Pre-Release Date")) |

A Deno module for template.

## 🔰 Begin

### Deno

- **Target Version:** >= v1.35.0
- **Require Permission:**
  - **Network (`allow-net`):**
    - *Resources Domain*
- **Registry:**
  - DenoPKG
    ```ts
    import ... from "https://denopkg.com/hugoalh-studio/replaceholder-deno[@<Tag>]/mod.ts";
    ```
  - GitHub Raw *\[Require Tag\]*
    ```ts
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/replaceholder-deno/<Tag>/mod.ts";
    ```
  - Pax
    ```ts
    import ... from "https://pax.deno.dev/hugoalh-studio/replaceholder-deno[@<Tag>]/mod.ts";
    ```

> **ℹ️ Notice:** Although it is recommended to import main module with path `mod.ts` in general, it is also able to import part of the module with sub path if available, but do not import if:
>
> - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
> - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
> - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
> These elements are not considered part of the public API, thus no stability is guaranteed for them.

## 🧩 API

- ```ts
  class Replaceholder {
    constructor(options: ReplaceholderOptions = {}): Replaceholder;
    handle(item: string, data: ReplaceholderData): string;
    static handle(item: string, data: ReplaceholderData, options: ReplaceholderOptions = {}): string;
  }
  ```
- ```ts
  function replaceholder(item: string, data: ReplaceholderData, options: ReplaceholderOptions = {}): string;
  ```
- ```ts
  type ReplaceholderData = { [key: string]: string; } | Map<string, string> | Record<string, string>;
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

> **ℹ️ Notice:** Documentation is included inside the script file, can view it via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [Deno Doc Land](https://doc.deno.land)

## ✍️ Example

- ```ts
  import { replaceholder } from "https://raw.githubusercontent.com/hugoalh-studio/replaceholder-deno/main/mod.ts";

  replaceholder("abc{{age}}{{name}}\\{{name2}}def", {
    age: "30",
    name: "def"
  })
  //=> "abc30def{{name2}}def"
  ```
