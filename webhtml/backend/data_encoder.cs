using System;
using System.Text;

public class Base32Encoder
{
    private const string Base32Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

    public static string Encode(byte[] data)
    {
        if (data == null || data.Length == 0)
        {
            return string.Empty;
        }

        StringBuilder result = new StringBuilder();
        int buffer = 0;
        int bitsInBuffer = 0;

        foreach (byte b in data)
        {
            // Shift the current byte into the buffer
            buffer = (buffer << 8) | b;
            bitsInBuffer += 8;

            // While there are enough bits (5 or more) to extract a Base32 character
            while (bitsInBuffer >= 5)
            {
                // Extract the most significant 5 bits from the buffer
                int index = (buffer >> (bitsInBuffer - 5)) & 0x1F; // 0x1F is 31 (binary 11111)
                result.Append(Base32Alphabet[index]);
                bitsInBuffer -= 5;
            }
        }

        // Handle any remaining bits
        if (bitsInBuffer > 0)
        {
            // Pad the remaining bits to 5 and extract the character
            int index = (buffer << (5 - bitsInBuffer)) & 0x1F;
            result.Append(Base32Alphabet[index]);
        }

        // Add padding characters if necessary (RFC 4648 requires padding)
        while (result.Length % 8 != 0)
        {
            result.Append('=');
        }

        return result.ToString();
    }

    public static void Main(string[] args)
    {
        string originalString = "Hello World!";
        byte[] dataToEncode = Encoding.UTF8.GetBytes(originalString);

        string encodedString = Encode(dataToEncode);
        Console.WriteLine($"Original: {originalString}");
        Console.WriteLine($"Encoded (Base32): {encodedString}");
    }
}
