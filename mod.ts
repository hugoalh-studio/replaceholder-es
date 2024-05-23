import { escape as escapeRegExpPattern } from "jsr:@std/regexp@0.224.1/escape";
/**
 * Type of the key-value like.
 */
export type KeyValueLike = { [key: string]: string; } | Map<string, string> | Record<string, string>;
/**
 * Options of the Replaceholder.
 */
export interface ReplaceholderOptions {
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
export class Replaceholder {
	#closeEscape: string;
	#closeRaw: string;
	#openEscape: string;
	#openRaw: string;
	/**
	 * Initialize.
	 * @param {ReplaceholderOptions} [options={}] Options.
	 */
	constructor(options: ReplaceholderOptions = {}) {
		this.#closeRaw = options.close ?? "}}";
		this.#openRaw = options.open ?? "{{";
		this.#closeEscape = escapeRegExpPattern(this.#closeRaw);
		this.#openEscape = escapeRegExpPattern(this.#openRaw);
	}
	/**
	 * Handle the placeholders.
	 * @param {string} item Item.
	 * @param {KeyValueLike} data Data.
	 * @returns {string}
	 */
	handle(item: string, data: KeyValueLike): string {
		let content: string = item;
		for (const [key, value] of ((data instanceof Map) ? data.entries() : Object.entries(data))) {
			content = content.replace(new RegExp(`(?<!\\\\)${this.#openEscape}${escapeRegExpPattern(key)}${this.#closeEscape}`, "gv"), value);
		}
		content = content.replace(new RegExp(`\\\\${this.#openEscape}(?<key>.+?)${this.#closeEscape}`, "gv"), `${this.#openRaw}$<key>${this.#closeRaw}`);
		return content;
	}
	/**
	 * Handle the placeholders.
	 * @param {string} item Item.
	 * @param {KeyValueLike} data Data.
	 * @param {ReplaceholderOptions} [options={}] Options.
	 * @returns {string}
	 */
	static handle(item: string, data: KeyValueLike, options: ReplaceholderOptions = {}): string {
		return new this(options).handle(item, data);
	}
}
export default Replaceholder;
/**
 * Handle the placeholders.
 * @param {string} item Item.
 * @param {KeyValueLike} data Data.
 * @param {ReplaceholderOptions} [options={}] Options.
 * @returns {string}
 */
export function replaceholder(item: string, data: KeyValueLike, options: ReplaceholderOptions = {}): string {
	return new Replaceholder(options).handle(item, data);
}
