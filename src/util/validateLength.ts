export default (input: string, field: string): string => {
    const minLength: number = parseInt(process.env.MIN_LENGTH as string , 10) || 4;
    const maxLength: number = parseInt(process.env.MAX_LENGTH as string, 10) || 18;
    // Validate length
    if (field !== 'password' && input.length >= minLength && input.length <= maxLength) {
        return input;
    }
    // If length is invalid, throw error
    throw new Error(`${field} must be 4 to 18 characters long.`);
}