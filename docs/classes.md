# Classes and Objects

## Object Oriented Programming

Object Oriented Programming (OOP) is a programming paradigm that uses objects
and their interactions to design and program applications. It is based on the
concept of objects rather than just functions and procedures. These objects
are organized into classes, which allow individual objects to be grouped
together. Most modern programming languages including Java, C++, and Python
are object-oriented languages, and many older programming languages now have
object-oriented versions.

In Radon, we also have support for OOP. We can create classes and objects.
We can also create methods and fields.

## Classes

Let's start by creating a class. We can create a class using the `class`
keyword. It is followed by the name of the class and the body of the class.
The body of the class is enclosed in curly braces.

```rn linenums="1" title="classes.rn"
class Person {
    # Class body
}
```

## Objects

Now that we have created a class, we can create an object. We can create an
object by simply calling the class like as a function. It is followed by the
name of the class and the arguments in parentheses. The arguments are optional.

```rn linenums="1" title="objects.rn"
const person = Person()
```

## Fields

Fields are the variables that are declared inside a class. They are used to
store data. They are also called instance variables because they are unique
to each instance of the class. They are declared like any variable.

```rn linenums="1" title="fields.rn"
class Person {
    var name = "John"
    var age = 20
}
```

## Methods

Methods are the functions that are declared inside a class. They are used to
define the behavior of the class. They are declared using the `fun` keyword.
It is followed by the name of the method, the parameters in parentheses, and
the return type. The parameters and the return type are optional.

```rn linenums="1" title="methods.rn"
class Person {
    fun __constructor__(name, age) {
        this.name = name
        this.age = age
    }

    fun say_hello() {
        print("Hello, " + this.name + "!")
    }
}

const person = Person("John", 20)
person.say_hello() # Output: Hello, John!
```

## Inheritance

A class can inherit from one or more parent classes by listing them in
parentheses after the class name. The child class gets access to every
method the parent(s) define, and can override any of them.

```rn linenums="1" title="inheritance.rn"
class Animal {
    fun __constructor__(name) {
        this.name = name
    }

    fun speak() -> this.name + " makes a sound."
}

class Dog(Animal) {
    fun speak() -> this.name + " barks."
}

const dog = Dog("Rex")
print(dog.speak()) # Rex barks.
```

### `super()`

Inside a method, `super()` gives you access to the parent's version of a
method — most commonly used in a constructor to let the parent initialize
its own fields before the child adds its own.

```rn linenums="1" title="super.rn"
class Vehicle {
    fun __constructor__(wheels) {
        this.wheels = wheels
    }
}

class Car(Vehicle) {
    fun __constructor__(brand) {
        super().__constructor__(4)
        this.brand = brand
    }
}

const car = Car("Toyota")
print(car.wheels) # 4
print(car.brand)  # Toyota
```

### Multiple, multilevel, and hybrid inheritance

Radon supports every common shape of inheritance:

```rn linenums="1" title="inheritance_shapes.rn"
# Multiple: one class, several direct parents
class Flyer {
    fun move() -> "flies"
}
class Swimmer {
    fun dive() -> "dives"
}
class Duck(Flyer, Swimmer) {}

# Multilevel: a chain of classes
class Grandparent {
    fun greet() -> "Hello from Grandparent"
}
class Parent(Grandparent) {}
class Child(Parent) {}

print(Duck().move())          # flies
print(Child().greet())        # Hello from Grandparent
```

When a class inherits from multiple parents that share a common ancestor
(hybrid inheritance), Radon resolves method lookup and `super()` chains
using a C3-style linearization of the class hierarchy (the same technique
Python uses), so method resolution order stays consistent and predictable
even in diamond-shaped hierarchies.

---

## Access Modifiers

Methods can be marked `public`, `private`, or `protected`. These aren't
just documentation — they're enforced at runtime:

- **`public`** (the default when no modifier is given) — accessible from
  anywhere.
- **`private`** — accessible only from code running inside the exact class
  that declared the method. Not even subclasses can call it, including
  through `super()`.
- **`protected`** — accessible from the declaring class and anywhere in
  its subclass hierarchy (in both directions: a subclass can call an
  inherited protected method, and a base class's own method can call a
  subclass's protected override — the standard Template Method pattern).

```rn linenums="1" title="access_modifiers.rn"
class Account {
    fun __constructor__(balance) {
        this.balance = balance
    }

    public fun display() -> "Balance: " + str(this.balance)
    private fun pin() -> 1234
    protected fun apply_interest(rate) -> this.balance * rate
}

class Savings(Account) {
    public fun bonus_interest() -> this.apply_interest(0.05) # OK: protected, inherited
}

const account = Savings(1000)
print(account.display())          # Balance: 1000
print(account.bonus_interest())   # 50.0

account.pin() # RuntimeError: Cannot access private member 'pin' of class 'Account' ...
```

Attempting to access a `private` or `protected` member from outside its
allowed hierarchy raises a `RuntimeError` immediately — the same as any
other runtime error, so you can catch it with `try`/`catch` if needed.

---

## Abstract Classes

An `abstract class` cannot be instantiated directly — it exists to be
subclassed. A method with no body (no `{ }` block and no `->` expression)
declares an abstract method: a contract that every concrete (non-abstract)
subclass must implement.

```rn linenums="1" title="abstract_classes.rn"
abstract class Shape {
    fun area()      # no body -- this is abstract
    fun perimeter() # also abstract

    fun describe() -> "This shape has an area of " + str(this.area())
}

class Circle(Shape) {
    fun __constructor__(radius) {
        this.radius = radius
    }

    fun area() -> this.radius * this.radius * 3.14159
    fun perimeter() -> 2 * 3.14159 * this.radius
}

print(Circle(2).describe()) # This shape has an area of 12.56636

Shape() # RuntimeError: Cannot instantiate abstract class 'Shape'
```

If a subclass doesn't implement every abstract method it inherits, that's
caught immediately when the subclass is defined — not later when you try
to use it:

```rn linenums="1" title="incomplete_subclass.rn"
class Broken(Shape) {
    fun area() -> 0
    # perimeter() is still missing
}
# RuntimeError: Class 'Broken' must implement abstract method(s): perimeter
```

An abstract class can itself inherit from another abstract class without
implementing its methods — only the first *concrete* class in the chain
needs to fill in every abstract method. Abstract classes can also mix
regular methods, `static` methods, and access modifiers freely alongside
abstract method declarations.

---

## Magic Methods/Operator Overloading
You may have noticed we declared a method called `__constructor__` in the above example. This is an example of a magic method. Magic methods are used for operator overloading. Here is an incomplete list:

| Method Name | Operator | Example | Example if we used regular function calls instead of operators |
|-------------|----------|---------|----------------------------------------------------------------|
`__constructor__` | Class instantiation | `var foo = Foo(1, 2, 3)` | `var foo = create(Foo); foo.__constructor(1, 2, 3)`[^create_func] |
`__destructor__` | Object deletion | `del foo` | `foo.__destructor__(); delete(foo)`[^delete_func] |
`__add__` | Addition | `a + b` | `a.__add__(b)` |
`__sub__` | Subtraction | `a - b` | `a.__sub__(b)` |
`__mul__` | Multiplication | `a * b` | `a.__mul__(b)` |
`__div__` | Division | `a / b` | `a.__div__(b)` |
`__pow__` | Exponentiation | `a ^ b` | `a.__pow__(b)` |
`__eq__` | Equality | `a == b` | `a.__eq__(b)` |
`__ne__` | Non-equality | `a != b` | `a.__ne__(b)` |
`__call__` | Calling | `f(1, 2, 3)` | `f.__call__(1, 2, 3)` |
`__getitem__` | Subscripting | `a[b]` | `a.__getitem__(b)` |
`__setitem__` | Subscripting | `a[b] = c` | `a.__setitem__(b, c)` |
`__contains__` | `in` | `a in b` | `b.__contains__(a)` |
`__truthy__` | Implicit conversions to bool | `if x { ... }` | `if x.__truthy__() { ... }`[^truthy_errors][^truthy_recursion]


[^create_func]: `create` doesn't actually exist. It's just pseudocode
[^delete_func]: `delete` doesn't actually exist. It's just pseudocode showing the destructor is called before the variable is removed
[^truthy_errors]: If `__truthy__` throws an error, it is ignored and treated as if it returned `false`
[^truthy_recursion]: The `__truthy__` operator of the returned object will be called recursively until it is a `bool`
