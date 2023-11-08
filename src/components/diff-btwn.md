# Difference between useCallback & useMemo

- useCallback caches the provided function instance itself
- whereas, useMemo invokes the provided function & caches its result.

* So, if u need to cache a function use - useCallback
* When u need to cache the result of an invoked function use - useMemo

-------------------------------------

const isEven = useMemo(() => {
    // To induce some slowness into our function 
    let i=0
    while (i < 200000000) 
        i++
    return counterOne % 2 === 0
})


-------------------------------------

// So, in both the cases, we return the cached function,
// then passing as prop to the child components.

const incrementAge = useCallback(() => {
    setAge(age + 1)
},[age]) 

const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
}, [salary])

-------------------------------------