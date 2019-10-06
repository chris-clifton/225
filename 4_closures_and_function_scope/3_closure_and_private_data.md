# Closures and Private Data
- Functions close over/enclose the context at their definition point, so we call them closures
- They always have access to that context, regardless of when/where program invokes the function
- Variables declared inside closures are private data for the function- it is impossible to access the value from outside itself