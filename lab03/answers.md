ls # Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
# paste code here
total 16
drwxr-xr-x 3 jforres1 jforres1 4096 Sep  5 10:27 .
drwxr-xr-x 7 jforres1 jforres1 4096 Sep  5 10:21 ..
drwxr-xr-x 7 jforres1 jforres1 4096 Sep  5 10:27 .git
-rw-r--r-- 1 jforres1 jforres1   71 Sep  5 10:23 README.md
```

### 1.2. Paste the output of your `git status` command
```
# paste code here
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
# paste code here
On branch master
nothing to commit, working tree clean
```

### 1.4. Copy your `git log` output
```
# paste code here
commit 7f74f448f8a88f0149a4442afbd66341d9f01b2c (HEAD -> master)
Author: jforres1 <jforres1@unca.edu>
Date:   Thu Sep 5 10:34:06 2024 -0400

    Added README.md to the repository
```

### 1.5. Copy your `git diff` output
```
# paste code here
diff --git a/README.md b/README.md
index 33a24d2..be66280 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,7 @@
diff --git a/README.md b/README.md
index 33a24d2..be66280 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,7 @@
 #Jacob Forrest
 #Lab03 - Version control and branch management exercise
-#Collaborating with Brian Mungal 
\ No newline at end of file
+#Collaborating with Brian Mungal
+
+Find All Duplicates
+
+Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than on
ce.
\ No newline at end of file
(END)
```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init - Create a new repository out of the current directory.
* git status - Display information about the repository. Shows staged, unstaged changes and uncommitted changes.
* git add - Stage a file so it can be committed.
* git commit - Adds the staged files to the repository, usually with a given message to describe the changes.
* git log - Shows information about the commits of a repository, particularly the authors, date and description of each commit.
* git diff - Shows the differences between the last commit and the state of the repository before the commit.


### 1.7. Practice: Find All Duplicates (Java)
Make sure you implement the `FindDuplicates.java` class as specified in the instructions (with the nested loops implementation).

## Part 2: GitHub

### 2.1. Practice: Find All Duplicates (Python)
Make sure you implement the `find_duplicates.py` file as specified in the instructions (with the nested loops implementation).


## Part 3: Branching

### 3.1. Implement the More Efficient Version of the "Find Duplicates" problem
Implement the more efficient Version of the "Find Duplicates" problem using a dictionary (or hashmap) data structure instead of nested loops. You may do this in either your Python file or in the Java file that you’ve already made. Do this by adding a second function/method to your Java/Python file with a slightly different name.


### 3.2. Link to Repo
Please make sure that the new repo that you made today on GitHub is public, and paste a link to it below.

```bash
# paste your new repo link here...
https://github.com/jforres1/lab03-exercises/
```

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.
-Create Merge Commit
  This option adds all of the commits, but keeps them separate.
-Squash and Merge
  This option condenses all of the changes into a single commit, and pushes it to the main branch.
-Rebase and Merge
  This option adds each commit onto the main branch one at a time, resolving any conflict before moving to the next commit, until all changes have been added to the main branch.
