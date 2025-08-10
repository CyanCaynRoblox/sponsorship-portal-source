function base32Encode(input) {
  const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let binaryString = '';
  let base32String = '';

  // Convert input string to a binary string representation
  for (let i = 0; i < input.length; i++) {
    binaryString += input.charCodeAt(i).toString(2).padStart(8, '0');
  }

  // Pad the binary string with zeros to ensure its length is a multiple of 5
  // This is crucial for grouping bits into 5-bit chunks
  while (binaryString.length % 5 !== 0) {
    binaryString += '0';
  }

  // Iterate through the binary string, taking 5 bits at a time
  // Convert each 5-bit chunk to its decimal equivalent and map it to the Base32 character
  for (let i = 0; i < binaryString.length; i += 5) {
    const fiveBitChunk = binaryString.substring(i, i + 5);
    const charIndex = parseInt(fiveBitChunk, 2);
    base32String += base32Chars[charIndex];
  }

  // Add padding characters ('=') to the end of the Base32 string
  // This ensures the encoded string length is a multiple of 8
  const paddingNeeded = (8 - (base32String.length % 8)) % 8;
  for (let i = 0; i < paddingNeeded; i++) {
    base32String += '=';
  }

  return base32String;
}

/* Example usage
const dataToEncode = "Hello, Base32!";
const encodedData = base32Encode(dataToEncode);
console.log(`Original: "${dataToEncode}"`);
console.log(`Encoded: "${encodedData}"`); */
