/**
 * Decodes a JSON string into a JavaScript object.
 * This function utilizes the built-in JSON.parse() method,
 * which is available globally in JavaScript environments
 * and does not require any external libraries.
 *
 * @param {string} jsonString The JSON string to be parsed.
 * @returns {object|array|null} The JavaScript value or object described by the JSON string.
 * @throws {SyntaxError} If the string to parse is not valid JSON.
 */
function decodeJson(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

/* Example Usage:
const jsonString1 = '{"name": "Alice", "age": 30, "city": "New York"}';
const decodedObject1 = decodeJson(jsonString1);
console.log("Decoded Object 1:", decodedObject1);
console.log("Name:", decodedObject1.name);

const jsonString2 = '[{"id": 1, "item": "apple"}, {"id": 2, "item": "banana"}]';
const decodedArray = decodeJson(jsonString2);
console.log("Decoded Array:", decodedArray);
console.log("First item:", decodedArray[0].item);

const invalidJsonString = '{"name": "Bob", "age": }'; // Invalid JSON
const decodedInvalid = decodeJson(invalidJsonString);
console.log("Decoded Invalid JSON:", decodedInvalid); */
