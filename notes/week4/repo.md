# Initialize your Git Repo

Note: If you're working with a group only one person should do this.

## Create a new repository and upload your current React project

1. Create a [new GitHub repo](https://github.com/new).
  - Name the repo after your Website theme
  - The repo should be Public
  - Leave `Add a README file` unchecked
  - Leave `Add a .gitignore` unchecked
  - Leave `Choose a license` unchecked
1. Open your project folder in VS Code
1. Create a `.gitignore` and add:
```
node_modules/
```
1. Open the `Source Control` tab in VS Code
1. Navigate to the Version Control tab and click `Initialize Repository`
1. Type "My first commit" in the Message input.
1. Click the check to commit your changes
1. Open your browser and go to the GitHub respository that you created in step 1.
   Under Quick setup make sure `HTTPS` is selected and then copy the URL
1. In the 3 dot menu click `Remote > Add Remote...`
1. Paste in the URL into the VS Code prompt and press Enter
1. Name the remote branch "origin" then press Enter
1. In the 3 dot menu click `Push` (if prompted, authorize any GitHub logins in VS Code)
1. Go back to Chrome and refresh the page. You should now see index.html.

## Add collaborators


1. Navigate to your GitHub project on GitHub.com
1. Open the settings tab
1. Click `Manage access` in the left hand column
1. Click `Invite collaborator` and invite ptar104
1. Repeat the previous step for adc613 and every other partner in your group


## Optional: Group members 

If your a member of the group you can now clone the groups repository. 

1. Open VS Code and click `File > New window`
1. Open Version control tab
1. Click `Clone Respository`
1. Click `Clone from GitHub`
1. Search for your partners <username>/<repository name>
1. Save the repository to your `Desktop` folder so that it's easy to find

[Next Exercise: Landing page](/notes/week4/landing.md)
