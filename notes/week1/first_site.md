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
3. In the top menu click `Terminal > New Terminal` and a new terminal pane
   should appear on the bottom on your window.
4. If you're on windows, Open the dropdown and select `git bash`
5. In the Terminal type

```bash
git config --global user.email "<your email address>"
```

6. Press Enter
7. In the Terminal type

```bash
git config --global user.name "<your name>"
```

8. Press Enter
9. Open the `Source Control` tab in VS Code
10. Click "initialize respository"
11. Type "My first commit" in the Message input.
12. Click the check to commit your changes
13. Open your browser and go to the GitHub respository taht you created in step 1.
    Under Quick setup make sure `HTTPS` is selected and then copy the URL
14. In the 3 dot menu click `Remote > Add Remote...`
15. Paste in the URL into the VS Code prompt and press Enter
16. Name the remote branch "Origin" then press Enter
17. In the 3 dot menu click `Push` (if prompted, authorize any GitHub logins in VS Code)
18. Go back to Chrome and refresh the page. You should now see index.html.
19. Navigate to <username>.github.io and look at your beatiful new website!
