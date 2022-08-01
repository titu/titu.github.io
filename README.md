<p align="center">
  <h1 align="center">Personal Portfolio</h1>
  <div align="center">
    URL: <strong><a href="https://titu.github.io" target="_blank">titu.github.io</a></strong>
  </div>
  <br/>

  <p align="center">
    A personal profession portfolio website provides information about what I do, what services I offer, and how to contact with me.
  </p>
</p>
<br />
<p>

[![GitHub forks](https://img.shields.io/github/forks/titu/titu.github.io?style=for-the-badge)](https://github.com/titu/titu.github.io/network)
[![GitHub stars](https://img.shields.io/github/stars/titu/titu.github.io?style=for-the-badge)](https://github.com/titu/titu.github.io/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/titu/titu.github.io?style=for-the-badge)](https://github.com/titu/titu.github.io/issues)
[![GitHub license](https://img.shields.io/github/license/titu/titu.github.io?style=for-the-badge)](https://github.com/titu/titu.github.io/blob/main/LICENSE)
[![Report Bug](https://img.shields.io/badge/Report-Bug-red?style=for-the-badge)](https://github.com/titu/titu.github.io/issues)
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-details">Project Details</a>
    </li>
    <li>
      <a href="#prerequisites">Prerequisites</a>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#run">Run</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


# Project Details

<!--[![titu.github.io](/assets/screenshot.gif)](https://titu.github.io)-->
I was looking into creating a portfolio app which can be easily configured just only providing the data. I ended up creating this application which needs zero configuration and data in JSON format. That is really user friendly as no need to worry about the UI, style or anything. User can place his/her data as text and their images/screenshots for portfolio in proper directory and the app is ready!

I will continuously furnish this application by adding new features and fixing issues. It would be highly appreciated if you fork this repo, report an issue if found, suggesting new features or send a pull request.

I've deployed this portfolio app to Github Page. GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations.

**Technical Stack**
- React
- Tailwind CSS

# Prerequisites

You should have [Nodejs](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) installed on your computer.

# Setup

1. Fork this repoistory and clone it to your local machine.
    ```sh
      git clone https://github.com/titu/titu.github.io.git
    ``` 

2. To install the dependencies cd into the project root and run the following commands in your terminal/command prompt.
    ```sh
      npm install
    ```

3. Add your own data
 - **Data Directory:**
There is a data directory under `./src/data`. This data directory contains the data files for each of the sections like `home.js`, `about.js` and so on. You just need to fill those out with your own data.
 - **Profile Picture:**
Create your profile image named `profile.png` and place it under `./public/assets/images/` directory.
 - **Portfolio Project Pictures:**
For each of the projects which you've pictures, create a directory under `./public/assets/projects/` and put those pictures inside your new project directory. You can easily configure the `./src/data/projects.js` data file with the projects and pictures of those.

# Run

1. To start running the app, run the following command in a new terminal:
    ```sh
      npm run start
    ```
2. Open the browser to http://localhost:3000

# Deployment

1. To build the app, run the following command:
    ```sh
      npm run build
    ```
2. After successful build, you can deploy to your preferred hosting.
3. To use the Github Pages, you can see [their doc](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), and in that case you can run the following command to publish to your Github Page:
    ```sh
      npm run deploy
    ```

# Contributing

🤝 Contributions help in making the open source community an amazing place to be learn, inspire, and create awesome things. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/branchName)
3. Commit your Changes (git commit -m 'Added new feature')
4. Push to the Branch (git push origin feature/branchName)
5. Open a Pull Request

# Support
If you like this Portfolio app, I will be glad to have your support! It will help keeping the project alive.

💛 The sinplest form of support is to give a ⭐️ to this repo.

# Author

👤 **Abdullah Al Mohammad**
 - Website: https://titu.github.io
 - Github: [@titu](https://github.com/titu)

# License
📝 [MIT](https://github.com/titu/titu.github.io/blob/main/LICENSE)
