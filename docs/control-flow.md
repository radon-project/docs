# Control flow

## Conditional statements

Conditional statements are used to execute code based on a condition. In Rain,
the `if` statement is used to execute code if a condition is true. The `else`
statement is used to execute code if the condition is false. The `elif`
statement is used to execute code if the condition is false and another
condition is true. The `else` statement is optional.

```rn linenums="1" title="conditional-statements.rn"
if true {
  print("true")

} else {
  print("false")
}
```

```rn linenums="1" title="conditional-statements.rn"
if true {
    print("true")

} elif false {
    print("false")

} else {
    print("neither")
}
```
