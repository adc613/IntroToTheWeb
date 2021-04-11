# Week 1: Setup and into to TypeScript

## Install steps

1. Make a GitHub account [create account link](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).
2. Install Visual Studio (VS) Code [download link](https://code.visualstudio.com/download)
3. Install git 
   *  On Windows [download link](https://git-scm.com/download/win).
   *  On MacOs open the Terminal app and type `xcode-select --install` then press enter.
   *  On Linux follow [instructions here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Verify installation

### GitHub

Login at [https://github.com/login](https://github.com/login)

### git

```
git config --global user.email "<your email address>"
```

```
git config --global user.name "<your name>"
```

### VS Code

Look for Visual Studio in your application folder or application launcher. If
it's not there talk to Coach Peter/Adam.

## Our first Website

### Create our first website

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

### Hosting our Website

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




## At home challenge

VS Code is highly customizable and you can add all sorts of themes. Try
personalizing your VS Code setup by googling ["best vscode  themes"](https://www.google.com/search?q=best+vscode+themes&rlz=1C5CHFA_enUS947US947&sxsrf=ALeKk02w2FX2inb7S4ZIXX5j2XBhjoaa-Q%3A1617329832091&ei=qH5mYOaCBcG4tAa5rJCYDw&oq=best+vscode+themes&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBQgAELEDMgIIADICCAAyBwgAEIcCEBQyAggAMgIIADICCAAyAggAOgcIABBHELADUJ0JWJ0JYPwPaAJwAngAgAE6iAFokgEBMpgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwjm9oCRv97vAhVBHM0KHTkWBPMQ4dUDCA0&uact=5)
