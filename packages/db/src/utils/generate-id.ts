import { customAlphabet } from "nanoid";

/**
 * Generates a unique alphanumeric ID
 * - Length: 10 characters
 * - Characters: 0-9, A-Z, a-z (62 total)
 * - Example: "aB3dE9fG2h"
 */
export const generateId = customAlphabet(
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	10,
);
