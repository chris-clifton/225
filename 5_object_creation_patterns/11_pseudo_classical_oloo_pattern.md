# The Pseudo-Classical Pattern and the OLOO Pattern
- The two best practices for creating objects are
  - Pseudo-Classical Pattern
  - Object Linking to Other Object Pattern (OLOO Pattern)

## Object Creation Considerations
- Use of object literal form is good if all we need is one object
- If we want to have many objects in our program, we want them to be able to have their own states and share behaviors

## Pseudo-Classical Pattern
- A combination of the constructor pattern and the prototype pattern
- Use a constructor to set object states and put shared methods on the constructor function's prototype

## The Object Linking to Other Objects Pattern (OLOO)
- Define the shared behaviors on a prototype object, then use `Object.create` to create objects that inherit directly from that object, without going through the roundabout way that involves constructors and their prototype properties