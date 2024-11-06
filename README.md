[![contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://play.google.com/store/apps/details?id=">
    <img src="https://img.freepik.com/premium-vector/cute-happy-egg-character-funny-jump-egg-cartoon-emoticon-flat-style-chick-emoji-vector_841552-285.jpg" alt="Logo" >
  </a>

<h2 align="center">Happy Egg Backend</h2>
  <p align="center">
    Happy Egg Backend is an Node js project containing all call services related happy egg organization. It includes configuration files for CI/CD pipelines (GitHub Actions).
    <br />
  </p>
</div>

## Getting Started

### Prerequisites

- Before you begin, ensure you have the following installed:

-Node.js (v16 or later)
-npm (comes with Node.js)
-Git for version control
-VS Code (or any other code editor)
-GitHub token (optional, for accessing private repositories)
 
 You can download and install Node.js from here. If you need Git, it can be installed from here.

### Installation
To get started with the Happy Egg project, follow these steps:

1. Clone the Repository: Open your terminal, navigate to the directory where you want to store the project, and run the following command:
```
    git clone https://github.com/kenny0412/HappyEggBackend.git
```
Then, navigate into the cloned directory:
```
    cd HappyEggBackend
```
2. Install Dependencies: Install the required packages and dependencies by running:
```
    npm install
```
3. Set up environment variables: Make a copy of the .env.example file and rename it to .env. Update the necessary configurations, such as database URLs or API keys, according to your local environment.

4. Run the Development Server: To start the development server, run:
```
    npm run dev
```
This will start the Node.js server in development mode. You should now be able to access the API locally, usually at http://localhost:3000.

### Project structure

The diagram displays the first three levels of folders within the project. For a detailed explanation of each folder's structure and significance, please refer to the section below titled 'HappyEgg Project Structure.

```
- src/
  - [features]                # Any feature designed
    - Featurecontroller       # Controllers for handling API requests
    - models/                 # Database models
    - FeatureRoutes           # API routes
    - FeatureServices         # Business logic and service layer
  - middlewares/              # Custom middleware functions
  - app.ts                    # Main application entry point
- tests/                      # Unit and integration tests
- node_modules/               # Installed dependencies
- .env                        # Environment configuration (not to be committed)
- .gitignore                  # Git ignore file
- package.json                # Project metadata and dependencies
- tsconfig.json               # TypeScript configuration
```
#### Dependencies
List the key dependencies here, especially shared libraries, such as:

- Express.js (web framework)
- TypeScript (for type safety)
- dotenv (for environment variable management)
- Mongoose (for MongoDB interactions)


### Version Control and Commit Standards

- We embrace the Gitflow workflow structure to effectively manage our branches. Gitflow, a widely adopted branching model, offers a robust framework for organizing and collaborating on projects. To delve deeper into Gitflow, you can explore it [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,by%20Vincent%20Driessen%20at%20nvie.). Additionally, we adhere to conventional commits for our commit messages, ensuring clarity and consistency in our development process. Learn more about conventional commits [here](https://centr.atlassian.net/wiki/spaces/CEX/pages/2478604344/Engineering+Workflows#%F0%9F%A7%90-Pull-Requests-and-Peer-Review).
    - TL;DR: each branch should be of the form: feature|bug|chore|etc/CX-{NumberOfTicket}-{SmallDescription}.
    - Also, we encourage to prepend to each commit message the ID of the Ticket in which we are working. You can run `enable-hooks` script to do it automatically for you at each commit.

### Build and Deployment
The project uses GitHub Actions for CI/CD automation, including tasks like:

* Running tests
* Linting code
* Building the project
* Deploying to production or staging environments
Check the .github/workflows directory for the configuration files.

### Who to contact? (Team)
- [@Kenny Cardenas](https://github.com/kenny0412) - Mid. Engineering Manager
- [@Michael Arias](https://github.com/micha032799) - Junior Dev
- [@Brandon Cardenas](https://github.com/Kendall-22) - Junior Dev
- [@Kendall Araya](https://github.com/Sean17bcr) - Junior Dev


[contributors-shield]: https://img.shields.io/github/contributors/kenny0412/HappyEggMobile.svg?style=for-the-badge
[contributors-url]: https://github.com/centrfit/Stalker.Android/graphs/contributors
[console]: https://img.shields.io/badge/console-414141?style=for-the-badge&logo=googleplay&logoColor=white
[console-url]: https://play.google.com/console
