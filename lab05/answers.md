# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?
    Apt is a package manager for the operating system. It keeps track of the packages and versions of those packages that are installed on the computer.
2. What does the `update` command do (either `brew update` or `apt-get update`)?
    Update will check if there is a more recent version of a package available for installation and if there is, it installs the more recent version. This can be really helpful because the base versions of many packages can be very out of date.
3. Where are the packages that are managed by Homebrew / apt stored on your local computer?
    Packages are stored in the ~/.local/bin/ directory. 

## Part 2.
1. What is a python virtual environment?
    A python virtual environment is a space in system where you can isolate dependencies while developing. This lets the developer keep different projects with different dependencies seperate so they can't contaminate each other.
2. What is Poetry, and how is it different from other Python package managers like pip?
    Poetry is a type of dependency manager that also works as a virtual environment to keep packages added in the Poetry environment seperate from the rest of the machine.
3. What happened when you issued the `poetry new poetry-demo` command?
    This created a new folder with a few different files in it. These were the README, poetry.lock, pyproject.toml and tests files.
4. How do you run a python file using the poetry virtual environment?
    Using the `poetry run python3` command and then specifying the .py file to run.
5. What is the purpose of the `poetry.lock` file?
    The lock file keeps the exact versions of the dependencies used, so that older or newer packages aren't installed later, which could conflict with the code that uses these dependencies.

## Part 3.
1. What are some of the things that `package.json` is used for?
    The package.json file contains a lot of information about the project, including a list of the dependencies and their versions. It stores this information in a declarative way.
2. Why wouldn't you want to check in the `node_modules` directory into GitHub?
    This is because the node_modules folder contains a large number of files that are not actually written by the coder. It is also possible that if a dependency is changed it could modify a lot of these files, requiring even more changed to be added to the repository. This both creates a lot of clutter and very large and difficult to manage files.
