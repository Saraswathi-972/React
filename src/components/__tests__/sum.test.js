import { sum } from "../sum";
test("adds 1 + 2 to equal 3", ()=> {
    //assertion
    expect(sum(1, 2)).toBe(3);
});