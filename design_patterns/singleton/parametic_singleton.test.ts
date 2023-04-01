import { ParametricSingleton } from "./parametric_singleton";

test("parametric singleton creates unique and single singleton per parameter", () => {
    expect(ParametricSingleton.getInstance('hello')).toBe(ParametricSingleton.getInstance('hello'))
})