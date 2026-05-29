# Magic Methods

Magic methods (also known as dunder methods) allow you to define how your classes behave with built-in operators and language constructs. They enable operator overloading and customize object lifecycle.

---

## Object Lifecycle

### `__constructor__`

Called automatically when creating a new instance. Use it to initialize instance attributes.

```rn linenums="1" title="constructor.rn"
class Person {
    fun __constructor__(name, age) {
        this.name = name
        this.age = age
    }
    
    fun greet() {
        print("Hi, I'm " + this.name)
    }
}

var p = Person("Alice", 30)  # __constructor__ called here
p.greet()                     # Output: Hi, I'm Alice
```

### `__destructor__`

Called automatically when an object is deleted with `del`. Use it for cleanup operations like releasing resources or closing connections.

```rn linenums="1" title="destructor.rn"
var active_connections = 0

class Connection {
    fun __constructor__(host) {
        this.host = host
        active_connections = active_connections + 1
        print("Connected to " + host + " (active: " + str(active_connections) + ")")
    }
    
    fun __destructor__() {
        active_connections = active_connections - 1
        print("Disconnected from " + this.host + " (active: " + str(active_connections) + ")")
    }
}

var c1 = Connection("server1")  # Connected to server1 (active: 1)
var c2 = Connection("server2")  # Connected to server2 (active: 2)
del c1                           # Disconnected from server1 (active: 1)
del c2                           # Disconnected from server2 (active: 0)
```

---

## Arithmetic Operators

### `__add__`

Handles the `+` operator.

```rn linenums="1" title="add.rn"
class Vector {
    fun __constructor__(x, y) {
        this.x = x
        this.y = y
    }
    
    fun __add__(other) {
        return Vector(this.x + other.x, this.y + other.y)
    }
    
    fun to_string() {
        return "Vector(" + str(this.x) + ", " + str(this.y) + ")"
    }
}

var v1 = Vector(1, 2)
var v2 = Vector(3, 4)
var v3 = v1 + v2  # Calls v1.__add__(v2)
print(v3.to_string())  # Output: Vector(4, 6)
```

### `__sub__`

Handles the `-` operator.

```rn linenums="1" title="sub.rn"
class Vector {
    fun __constructor__(x, y) {
        this.x = x
        this.y = y
    }
    
    fun __sub__(other) {
        return Vector(this.x - other.x, this.y - other.y)
    }
}

var v1 = Vector(5, 10)
var v2 = Vector(2, 3)
var v3 = v1 - v2  # Calls v1.__sub__(v2)
# v3 is Vector(3, 7)
```

### `__mul__`

Handles the `*` operator.

```rn linenums="1" title="mul.rn"
class Vector {
    fun __constructor__(x, y) {
        this.x = x
        this.y = y
    }
    
    fun __mul__(scalar) {
        return Vector(this.x * scalar, this.y * scalar)
    }
}

var v = Vector(2, 3)
var scaled = v * 5  # Calls v.__mul__(5)
# scaled is Vector(10, 15)
```

### `__div__`

Handles the `/` operator.

```rn linenums="1" title="div.rn"
class Fraction {
    fun __constructor__(num, den) {
        this.num = num
        this.den = den
    }
    
    fun __div__(other) {
        # a/b ÷ c/d = a/b × d/c = (a×d)/(b×c)
        return Fraction(this.num * other.den, this.den * other.num)
    }
    
    fun to_string() {
        return str(this.num) + "/" + str(this.den)
    }
}

var f1 = Fraction(1, 2)
var f2 = Fraction(3, 4)
var result = f1 / f2  # Calls f1.__div__(f2)
print(result.to_string())  # Output: 4/6
```

### `__pow__`

Handles the `^` operator (exponentiation).

```rn linenums="1" title="pow.rn"
class Number {
    fun __constructor__(val) {
        this.val = val
    }
    
    fun __pow__(exp) {
        return Number(this.val ^ exp)
    }
}

var n = Number(2)
var result = n ^ 10  # Calls n.__pow__(10)
# result.val is 1024
```

---

## Comparison Operators

### `__eq__`

Handles the `==` operator.

```rn linenums="1" title="eq.rn"
class Point {
    fun __constructor__(x, y) {
        this.x = x
        this.y = y
    }
    
    fun __eq__(other) {
        return this.x == other.x and this.y == other.y
    }
}

var p1 = Point(1, 2)
var p2 = Point(1, 2)
var p3 = Point(3, 4)

print(p1 == p2)  # true (same coordinates)
print(p1 == p3)  # false
```

### `__ne__`

Handles the `!=` operator.

```rn linenums="1" title="ne.rn"
class Point {
    fun __constructor__(x, y) {
        this.x = x
        this.y = y
    }
    
    fun __ne__(other) {
        return this.x != other.x or this.y != other.y
    }
}

var p1 = Point(1, 2)
var p2 = Point(3, 4)
print(p1 != p2)  # true
```

---

## Callable Objects

### `__call__`

Makes an instance callable like a function.

```rn linenums="1" title="call.rn"
class Multiplier {
    fun __constructor__(factor) {
        this.factor = factor
    }
    
    fun __call__(value) {
        return value * this.factor
    }
}

var double = Multiplier(2)
var triple = Multiplier(3)

print(double(5))   # 10 - calls double.__call__(5)
print(triple(5))   # 15 - calls triple.__call__(5)
```

**Use case: Memoization / Caching**

```rn linenums="1" title="memoize.rn"
class Memoize {
    fun __constructor__(func) {
        this.func = func
        this.cache = {}
    }
    
    fun __call__(arg) {
        var key = str(arg)
        if key in this.cache {
            return this.cache[key]
        }
        var result = this.func(arg)
        this.cache[key] = result
        return result
    }
}

fun expensive_calc(n) {
    print("Computing for " + str(n))
    return n * n
}

var cached_calc = Memoize(expensive_calc)
print(cached_calc(5))  # Computing for 5 → 25
print(cached_calc(5))  # 25 (cached, no "Computing" message)
print(cached_calc(10)) # Computing for 10 → 100
```

---

## Subscript Access

### `__getitem__`

Handles reading with `obj[key]`.

```rn linenums="1" title="getitem.rn"
class Matrix {
    fun __constructor__(rows) {
        this.rows = rows
    }
    
    fun __getitem__(index) {
        return this.rows[index]
    }
}

var m = Matrix([[1, 2], [3, 4], [5, 6]])
print(m[0])  # [1, 2]
print(m[1])  # [3, 4]
```

### `__setitem__`

Handles assignment with `obj[key] = value`.

```rn linenums="1" title="setitem.rn"
class DefaultDict {
    fun __constructor__(default_value) {
        this.data = {}
        this.default = default_value
    }
    
    fun __getitem__(key) {
        if key in this.data {
            return this.data[key]
        }
        return this.default
    }
    
    fun __setitem__(key, value) {
        this.data[key] = value
    }
}

var counts = DefaultDict(0)
counts["apples"] = 5
counts["oranges"] = 3

print(counts["apples"])   # 5
print(counts["oranges"])  # 3
print(counts["bananas"])  # 0 (default)
```

---

## Membership Testing

### `__contains__`

Handles the `in` operator.

```rn linenums="1" title="contains.rn"
class Range {
    fun __constructor__(start, end) {
        this.start = start
        this.end = end
    }
    
    fun __contains__(value) {
        return value >= this.start and value < this.end
    }
}

var r = Range(1, 10)
print(5 in r)   # true
print(10 in r)  # false (end is exclusive)
print(0 in r)   # false
```

---

## Boolean Conversion

### `__truthy__`

Defines how an object converts to boolean in conditions.

```rn linenums="1" title="truthy.rn"
class Container {
    fun __constructor__() {
        this.items = []
    }
    
    fun add(item) {
        this.items.append(item)
    }
    
    fun __truthy__() {
        return this.items.length() > 0
    }
}

var c = Container()

if c {
    print("Has items")
} else {
    print("Empty")  # Output: Empty
}

c.add("apple")

if c {
    print("Has items")  # Output: Has items
} else {
    print("Empty")
}
```

!!! note "Truthy behavior"
    - If `__truthy__` throws an error, it is treated as `false`
    - If `__truthy__` returns a non-boolean, its `__truthy__` is called recursively

---

## Complete Example

Here's a class that implements multiple magic methods:

```rn linenums="1" title="money.rn"
class Money {
    fun __constructor__(amount, currency) {
        this.amount = amount
        this.currency = currency
    }
    
    fun __add__(other) {
        if this.currency != other.currency {
            print("Currency mismatch!")
            return null
        }
        return Money(this.amount + other.amount, this.currency)
    }
    
    fun __sub__(other) {
        if this.currency != other.currency {
            print("Currency mismatch!")
            return null
        }
        return Money(this.amount - other.amount, this.currency)
    }
    
    fun __mul__(factor) {
        return Money(this.amount * factor, this.currency)
    }
    
    fun __eq__(other) {
        return this.amount == other.amount and this.currency == other.currency
    }
    
    fun __truthy__() {
        return this.amount > 0
    }
    
    fun to_string() {
        return this.currency + " " + str(this.amount)
    }
}

var wallet = Money(100, "USD")
var expense = Money(30, "USD")
var remaining = wallet - expense

print(remaining.to_string())  # USD 70

if remaining {
    print("Still have money!")  # Output: Still have money!
}

var doubled = remaining * 2
print(doubled.to_string())  # USD 140
```

---

## Quick Reference

| Method | Operator/Usage | When Called |
|--------|----------------|-------------|
| `__constructor__` | `Foo(args)` | Instance creation |
| `__destructor__` | `del obj` | Object deletion |
| `__add__` | `a + b` | Addition |
| `__sub__` | `a - b` | Subtraction |
| `__mul__` | `a * b` | Multiplication |
| `__div__` | `a / b` | Division |
| `__pow__` | `a ^ b` | Exponentiation |
| `__eq__` | `a == b` | Equality check |
| `__ne__` | `a != b` | Inequality check |
| `__call__` | `obj(args)` | Calling as function |
| `__getitem__` | `obj[key]` | Subscript read |
| `__setitem__` | `obj[key] = val` | Subscript write |
| `__contains__` | `x in obj` | Membership test |
| `__truthy__` | `if obj` | Boolean conversion |
