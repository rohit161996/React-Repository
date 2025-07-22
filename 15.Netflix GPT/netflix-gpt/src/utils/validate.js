export const checkValidData = (email, password, name) => {
    /* Email regex */
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    /* Password regex */
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    /* Name regex */
    const nameRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})+$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    const isNameValid = nameRegex.test(name);

    if (!isEmailValid) 
    {
        return "❌ Email is not valid!";
    }

    if (!isPasswordValid)
    {
        return "❌ Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.";
    }

    if (name !== null && !isNameValid) {
        return "❌ Full Name must include at least first and last name.";
    }

    return null;
}


