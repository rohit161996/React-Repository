import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
    it('Should load the Heading in the Contact Us Component', () => {
        // To test the UI Component we will render the component first
        render(<Contact />);

        // Check wether the Heading is loaded or not.
        const heading = screen.getByRole("heading");

        // Asserting the Heading to be in the Document or not.
        expect(heading).toBeInTheDocument();
    });

    it('Should load the Button inside the Contact Component', () => {
        // To test the UI Component we will render the component first
        render(<Contact />);

        // Check wether the Button is loaded or not.
        const button = screen.getByRole("button");

        // Asserting the Heading to be in the Document or not.
        expect(button).toBeInTheDocument();
    });

    it('Should load the Button inside the Contact Component', () => {
        // To test the UI Component we will render the component first
        render(<Contact />);

        // Check wether the Submit is there on the Page or not.
        const buttonSubmit = screen.getByText("Submit");

        // Asserting the Heading to be in the Document or not.
        expect(buttonSubmit).toBeInTheDocument();
    });

    test('Should load the placeholder in the input text', () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    });

    test('Should load two input boxes', () => {
        render(<Contact />);
        const inputs = screen.getAllByPlaceholderText("Name");
        // console.log(inputs);
        expect(inputs.length).toBeGreaterThan(0);
    });

    test('Should load two input boxes', () => {
        render(<Contact />);
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBeGreaterThan(1);
    });
});
