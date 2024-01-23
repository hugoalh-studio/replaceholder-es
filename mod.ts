import escapeRegExpPattern from "https://esm.sh/escape-string-regexp@5.0.0";
/**
 * Escape HTML characters.
 * @access private
 * @param {string} item 
 * @returns {string}
 */
function escapeHTML(item: string): string {
	return item.replace(/&(?!\w+;)/gu, "&amp;").replace(/</gu, "&lt;").replace(/>/gu, "&gt;").replace(/"/gu, "&quot;").replace(/'/gu, "&#039;");
}
export type ReplaceholderData = { [key: string]: string; } | Map<string, string> | Record<string, string>;
export interface ReplaceholderOptions {
	/**
	 * Pattern for the tag close.
	 * @default "}}"
	 */
	close?: string;
	/**
	 * Whether to also escape HTML characters.
	 * @default false
	 */
	htmlEscape?: boolean;
	/**
	 * Pattern for the tag open.
	 * @default "{{"
	 */
	open?: string;
}
export class Replaceholder {
	#closeEscape: string;
	#closeRaw: string;
	#htmlEscape: boolean;
	#openEscape: string;
	#openRaw: string;
	/**
	 * Initialize.
	 * @param {ReplaceholderOptions} [options={}] Options.
	 */
	constructor(options: ReplaceholderOptions = {}) {
		this.#closeRaw = options.close ?? "}}";
		this.#closeEscape = escapeRegExpPattern(this.#closeRaw);
		this.#htmlEscape = options.htmlEscape ?? false;
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
		return (this.#htmlEscape ? escapeHTML(content) : content);
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
