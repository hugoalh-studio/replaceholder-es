import { escape as escapeRegExpPattern } from "https://deno.land/std@0.214.0/regexp/escape.ts";
export type ReplaceholderData = { [key: string]: string; } | Map<string, string> | Record<string, string>;
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
		this.#closeEscape = escapeRegExpPattern(this.#closeRaw);
		this.#openRaw = options.open ?? "{{";
		this.#openEscape = escapeRegExpPattern(this.#openRaw);
	}
	/**
	 * @param {string} item Item.
	 * @param {ReplaceholderData} data Data.
	 * @returns {string}
	 */
	handle(item: string, data: ReplaceholderData): string {
		let content: string = item;
		for (const [key, value] of ((data instanceof Map) ? data.entries() : Object.entries(data))) {
			content = content.replace(new RegExp(`(?<!\\\\)${this.#openEscape}${escapeRegExpPattern(key)}${this.#closeEscape}`, "gv"), value);
		}
		content = content.replace(new RegExp(`\\\\${this.#openEscape}(?<key>.+?)${this.#closeEscape}`, "gv"), `${this.#openRaw}$<key>${this.#closeRaw}`);
		return content;
	}
	/**
	 * @param {string} item Item.
	 * @param {ReplaceholderData} data Data.
	 * @param {ReplaceholderOptions} [options={}] Options.
	 * @returns {string}
	 */
	static handle(item: string, data: ReplaceholderData, options: ReplaceholderOptions = {}): string {
		return new this(options).handle(item, data);
	}
}
export default Replaceholder;
/**
 * @param {string} item Item.
 * @param {ReplaceholderData} data Data.
 * @param {ReplaceholderOptions} [options={}] Options.
 * @returns {string}
 */
export function replaceholder(item: string, data: ReplaceholderData, options: ReplaceholderOptions = {}): string {
	return new Replaceholder(options).handle(item, data);
}
