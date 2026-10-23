import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import "@testing-library/jest-dom/vitest"

describe("Counter", () => {
    it("Incremenets count when button Increase is clicked", async () => {
        const user = userEvent.setup();

        render(<Counter/>);

        expect(screen.getByText("Count: 0")).toBeInTheDocument();

        const button = screen.getByRole("button", {
            name: "Increase"
        });

        await user.click(button);

        expect(screen.getByText("Count: 1")).toBeInTheDocument();
    })
})