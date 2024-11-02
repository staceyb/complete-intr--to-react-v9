import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text renders on image", async () => {
    const name = "My Favorite Pizza";
    const src = "/public/pizzas/soppressata.webp";
    const screen = render(
        <Pizza name={ name } description="super cool pizza" image={ src } />
    );

    const img = await screen.getByRole("img");

    await expect.element(img).toBeInTheDocument();
    await expect.element(img).toHaveAttribute("src", src);
    await expect.element(img).toHaveAttribute("alt", name);
});

test("to have default image if none is provided", async () => {
    const screen = render(
        <Pizza name={ "Cool Pizza" } description="super cool pizza" />,
    );

    const img = screen.getByRole("img");
    expect(img.src).not.toBe("");
});
