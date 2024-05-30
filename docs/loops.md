# Loops

Loops are used to execute a block of code multiple times. The block of code will be executed until the condition is true. This help us to reduce the code and execute the same block of code multiple times.

In Radon we have 2 types of loops.

1. `for` loop.
2. `while` loop.

## For loop

In for loop we have 2 varients.

1. `for` loop with range.
2. `for` loop with sequence of elements.

### For loop with range

With range we can specify the start, end and step value. If step value is not provided then it will be 1.

```py
for i=0 to 10 {
    print(i)
}
```

**Output:**

```
0
1
2
3
4
5
6
7
8
9
```

With step value. Here we are printing the even numbers.

```py
for i=0 to 10 step 2 {
    print(i)
}
```

**Output:**

```
0
2
4
6
8
```

### For loop with sequence of elements

With sequence of elements we can specify the elements in the loop. The loop will run for each element.

Here we are using `Array` of elements. The loop will run for each element in the `Array`.

```py
for i in [1, 2, 3, 4, 5] {
    print(i)
}
```

**Output**

```
1
2
3
4
5
```

Here we are using `String`. The loop will run for each character in the `String`.

```py
for i in "Hello" {
    print(i)
}
```

**Output:**

```
H
e
l
l
o
```

Here we are using `HashMap`. The loop will run for each key in the `HashMap`.

```py
hash = {"name": "John", "age": 30}
for i in hash {
    print("Key: " + i)
    print("Value: " + hash[i])
}
```

**Output:**

```
Key: name
Value: John
Key: age
Value: 30
```

## While loop

With while loop we can specify the condition. The loop will run until the condition is true.

```py
i = 0
while i < 5 {
    print(i)
    nonlocal i += 1
}
```

**Output:**

```
0
1
2
3
4
```

We have used `nonlocal` keyword to update the value of `i` in the loop. If we don't use `nonlocal` then it will run into infinite loop.

## Loop control statements

In Radon we have 2 loop control statements.

1. `break`
2. `continue`

### Break

With `break` we can exit the loop.

For loop example:

```py
for i=0 to 10 {
    if i == 5 {
        break
    }
    print(i)
}
```

**Output:**

```
0
1
2
3
4
```

While loop example:

```py
i = 0
while i < 10 {
    if i == 5 {
        break
    }
    print(i)
    nonlocal i += 1
}
```

**Output:**

```
0
1
2
3
4
```

### Continue

With `continue` we can skip the current iteration and move to the next iteration.

For loop example:

```py
for i=0 to 5 {
    if i == 3 {
        continue
    }
    print(i)
}
```

**Output:**

```
0
1
2
4
```

While loop example:

```py
i = 0
while i < 5 {
    if i == 3 {
        nonlocal i += 1
        continue
    }
    print(i)
    nonlocal i += 1
}
```

**Output:**

```
0
1
2
4
```

That's all about loops in Radon.
