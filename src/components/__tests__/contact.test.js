import Contact from "../Contact";

//describe can be used to group tests
//it can be used in place of test 
test("renders contact form correctly", ()=> {
    //Arrange
     render(<Contact />);
    //Act
    const heading = screen.getByRole("heading");
    //Assert
    expect(heading).toBeInTheDocument();
});