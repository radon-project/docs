# File handling

File handling is an essential part of any programming language. Radon provides
a simple way to read and write files. In this section, we will learn how to
read and write files in Radon.

> ### **SECURITY NOTICE:** Executing any file operations will prompt the user for confirmation before proceeding, for example:
```
[DISK_ACCESS] This program is attempting to access the disk. Continue execution?
[Y/n] -> _
```

## File modes

When opening a file, we can specify the mode in which we want to open the file.

The modes are:

- `r`: Read mode. Opens the file for reading. The file must exist.
- `w`: Write mode. Opens the file for writing. If the file does not exist,
  it creates a new file. If the file exists, it truncates the file.
- `a`: Append mode. Opens the file for writing. If the file does not exist,
  it creates a new file. If the file exists, it appends the content to the file.
- `r+`: Read and write mode. Opens the file for reading and writing.
  The file must exist.
- `w+`: Write and read mode. Opens the file for reading and writing.
  If the file does not exist, it creates a new file. If the file exists,
  it truncates the file.
- `a+`: Append and read mode. Opens the file for reading and writing.
  If the file does not exist, it creates a new file. If the file exists,
  it appends the content to the file.

By default, the file is opened in read mode.

## Reading from a file

To manipulate files in Radon, we use built-in `File` class. We can create a new
instance of `File` class by passing the file path to the constructor. We can
then use the `read` method to read the contents of the file.

```py linenums="1" title="file-handling.rn"
file = File("file.txt")
content = file.read()
print(content)
```

You can also read the file line by line using the `readline` method.

```py linenums="1" title="file-handling.rn"
file = File("file.txt")
line = file.readline()
print(line)
```

You can also read all the lines of the file using the `readlines` method.

```py linenums="1" title="file-handling.rn"
file = File("file.txt")
lines = file.readlines()
print(lines)
```

## Writing to a file

To write to a file, we use the `write` method. We can pass the content to the
`write` method to write to the file.

```py linenums="1" title="file-handling.rn"
file = File("file.txt")
file.write("Hello, World!")
```

## Closing a file

After reading or writing to a file, it is important to close the file. We can
use the `close` method to close the file.

```py linenums="1" title="file-handling.rn"
file = File("file.txt")
# code that reads or writes to the file
file.close()
```

Check the file is closed or not using the `is_closed` method.

```py linenums="1" title="file-handling.rn"
file.is_closed()
```

That's it! You now know how to read and write files in Radon.
