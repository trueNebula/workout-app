export interface LooseObject {
  [key: string]: any;
}

/**
 * Generates a random ID for a database object
 *
 * @param identifier 2 letter uppercase string
 * @returns Randomized ID
 */
export const getRandomId = (identifier: string): string => {
  const now = new Date().valueOf();
  const timePart = (now + 144000000 + ((now / 1000) % 1000)).toString(36);
  const mathPart = Math.random().toString(36);
  return (
    timePart.substring(0, 8) +
    identifier.substring(0, 2) +
    mathPart.substring(2, 8)
  );
};
