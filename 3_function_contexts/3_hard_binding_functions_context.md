# Hard Binding Functions with Contexts
- The `Function` method `bind`
- `bind` allows us to bind a function to a context object permanently
- Unlike `call` and `apply`, `bind` doesn't execute a function- it creates and returns a new function, and permanently binds it to a given object
  - Can pass without worrying that its context will change
- `bind` doesn't automatically invoke the receiver function, it just returns a new function permanently bound to the context argument
  - You still need to invoke it
- Once a function has been bound to an execution context with `bind`, it cannot be changed, even explicitly
- You cant use bind in a regular function declaration but you can use it in function expression 

## Implementation
- `someObject.someMethod.bind(context)`

# Changing Function Context
