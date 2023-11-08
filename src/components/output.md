# Initial output

Title.js:4 Rendering Title
Count.js:4 Rendering Age
Button.js:4 Rendering button -  Increment Age
Count.js:4 Rendering Salary
Button.js:4 Rendering button -  Increment Salary

-----------------------------------------------------------

# using React.memo
# After clicking Increment Salary button: 
Button.js:4 Rendering button -  Increment Age
Count.js:4 Rendering Salary
Button.js:4 Rendering button -  Increment Salary

- After clicking Increment Salary button Increment Salary button also re-rendered, 
* Rendering button -  Increment Age
* Rendering button -  Increment Salary

- this is bcz, 
- a new increment salary function is created each time, 
- the parent component re-renders.

- & while dealing with functions, we also have to consider reference equality
- Even though the 2 functions have same behavior, it does not mean they r equal to each other.
- So the function before the re-render is different to the function after the re-render.
- Since the function is a prop,
- React.memo sees that the prop has changed and will not prevent the re-render.

- this is the same case for age as well.

-----------------------------------------------------------

# using callBack: it is used optimize performance
# After clicking Increment Age button: 

Count.js:4 Rendering Age
Button.js:4 Rendering button -  Increment Age

# After clicking Increment Salary button: 
Count.js:4 Rendering Salary
Button.js:4 Rendering button -  Increment Salary

-----------------------------------------------------------

#


#


#


#

