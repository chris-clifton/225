# Closures and Private Data
- Functions close over/enclose the context at their definition point, so we call them closures
- They always have access to that context, regardless of when/where program invokes the function
- Variables declared inside closures are private data for the function- it is impossible to access the value from outside itself

# Why use closers to make data private?
- Using closures to restrict data access is a good way to force other developers to use the intended interface and enforce access via the provided methods
- The restriction helps protect data integrity since developers must use the defined interfaces
- These benefits have a cost: making data private can make it harder to extend the code