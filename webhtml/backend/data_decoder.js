function base32Decode(input) {
  const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let binaryString = '';
  let output = '';

  // Remove padding characters and convert to uppercase for case-insensitivity
  input = input.replace(/=+$/, '').toUpperCase();

  // Convert each Base32 character to its 5-bit binary representation
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const index = base32Chars.indexOf(char);

    if (index === -1) {
      // Handle invalid characters if necessary, or throw an error
      console.warn(`Invalid Base32 character: ${char}`);
      continue;
    }
    binaryString += index.toString(2).padStart(5, '0');
  }

  // Convert the concatenated binary string into 8-bit bytes
  for (let i = 0; i < binaryString.length; i += 8) {
    const byte = binaryString.substring(i, i + 8);
    // Only convert if a full 8-bit byte is available
    if (byte.length === 8) {
      output += String.fromCharCode(parseInt(byte, 2));
    }
  }

  return output;
}
