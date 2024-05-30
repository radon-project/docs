# Installation

It's easy to install Radon on your computer. Just go to the [downloads page](https://radon-project.github.io "Downloads") and download the latest version for your operating system. Then, follow the instructions below for your operating system. If you have any problems, please [contact us](https://github.com/radon-project/radon/issues "Issues") and we'll help you out.

## Windows

To install Radon on Windows, just download the installer from the [downloads page](https://radon-project.github.io/#download "Downloads") and run it. Then, follow the instructions on the screen to install Radon on your computer.

After setup you need to manually configure the PATH environment variable. To do this, open the Control Panel and go to System and Security > System > Advanced system settings > Environment Variables. Then, select the PATH variable and click Edit. Add the path to the Radon bin directory to the end of the variable value. For example, if you installed Radon in **C:\Program Files (x86)\Radon**, you would add **C:\Program Files (x86)\Radon** to the end of the variable value. Then, click OK to save the changes.

**Quick tip:** You can also set the PATH variable from the command line. Just open a command prompt and type the following command:

```bat linenums="1" title="Command prompt (Windows)"
setx PATH "%PATH%;C:\Program Files (x86)\Radon"
```

Now, you can open a command prompt and type **radon** to run Radon. If you get an error message, try restarting your computer and trying again.

## macOS

Mac installer is not available yet. You can download the source code and build it yourself.

## Linux

Linux installer is not available yet. You can download the source code and build it yourself.

<center>
***Linux users don't need any instructions!!***
</center>
