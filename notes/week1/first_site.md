# Our first Website

## Create our first website

1. Create a new Folder on your Desktop called "My First Website"
2. Open VS Code
3. Open a new file (ctrl+n or cmd+N)
4. Save file (ctrl+S or cmd+S) and name the file "index.html"
5. Copy:

```html
<html>
  <body>
    <h1>Hello World! My name's [insert name] and I'm now a web developer.</h1>
  </body>
</html>
```

6. Open Chrome or your favorite web browser. Press CTRL+O or CMD+O and navigate
   to Desktop/My First Website then open the index.html file.

If you did everything right you should now see a web page that says:
> Hello World! My name's [insert name] and I'm now a web developer.

## Hosting our Website

1. Create a [new GitHub repo](https://github.com/new).
  - Name the repo `<your user name>.github.io`
  - The repo should be Public
  - Leave `Add a README file` unchecked
  - Leave `Add a .gitignore` unchecked
  - Leave `Choose a license` unchecked
2. Open VS Code
3. Click the file explorer on the left, and open the folder "My First Website"
4. In the top menu click `Terminal > New Terminal` and a new terminal pane
   should appear on the bottom on your window.
5. If you're on windows, Open the dropdown and select `git bash`
6. In the Terminal type

```bash
git config --global user.email "<your email address>"
```

7. Press Enter
8. In the Terminal type

```bash
git config --global user.name "<your name>"
```

9. Press Enter
10. Open the `Source Control` tab in VS Code
11. Click "initialize respository"
12. Type "My first commit" in the Message input.
13. Click the check to commit your changes
14. Open your browser and go to the GitHub respository that you created in step 1.
    Under Quick setup make sure `HTTPS` is selected and then copy the URL
15. In the 3 dot menu click `Remote > Add Remote...`
16. Paste in the URL into the VS Code prompt and press Enter
17. Name the remote branch "origin" then press Enter
18. In the 3 dot menu click `Push` (if prompted, authorize any GitHub logins in VS Code)
19. Go back to Chrome and refresh the page. You should now see index.html.
20. Navigate to `<username>`.github.io and look at your beatiful new website!


[Next section: Learning HTML/CSS](/notes/week1/html_css.md)
