/**
This is just a modified version of confingured_data_32.js because i was scared that it wouldnt work for some reason
 */

const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

/**
 * Encodes a string into Base32.
 * @param {string} input - The string to encode.
 * @returns {string} The Base32 encoded string.
 */
function base32Encode(input) {
  let binaryString = '';
  let base32String = '';

  // Convert input string to a binary string representation
  for (let i = 0; i < input.length; i++) {
    binaryString += input.charCodeAt(i).toString(2).padStart(8, '0');
  }

  // Pad the binary string with zeros to ensure its length is a multiple of 5
  while (binaryString.length % 5 !== 0) {
    binaryString += '0';
  }

  for (let i = 0; i < binaryString.length; i += 5) {
    const fiveBitChunk = binaryString.substring(i, i + 5);
    const charIndex = parseInt(fiveBitChunk, 2);
    base32String += base32Chars[charIndex];
  }

  // Add padding characters ('=') to the end of the Base32 string
  const paddingNeeded = (8 - (base32String.length % 8)) % 8;
  for (let i = 0; i < paddingNeeded; i++) {
    base32String += '=';
  }

  return base32String;
}

/**
 * Decodes a Base32 encoded string.
 * @param {string} input - The Base32 string to decode.
 * @returns {string} The decoded string.
 */
function base32Decode(input) {
  let DECODINGbinaryString = '';
  let DECODEoutput = '';

  // Remove padding characters and convert to uppercase for case-insensitivity
  input = input.replace(/=+$/, '').toUpperCase();

  // Convert each Base32 character to its 5-bit binary representation
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const index = base32Chars.indexOf(char);

    if (index === -1) {
      // Handle invalid characters if necessary
      console.warn(`Invalid Base32 character: ${char}`);
      continue;
    }
    DECODINGbinaryString += index.toString(2).padStart(5, '0');
  }

  // Convert the concatenated binary string into 8-bit bytes
  for (let i = 0; i < DECODINGbinaryString.length; i += 8) {
    const byte = DECODINGbinaryString.substring(i, i + 8);
    // Only convert if a full 8-bit byte is available
    if (byte.length === 8) {
      DECODEoutput += String.fromCharCode(parseInt(byte, 2));
    }
  }

  return DECODEoutput;
}

