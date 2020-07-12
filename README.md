# covidcases-server

* [ ] TODO: Connect with frontend
* [ ] TODO: Can we automate the deployment steps below?
* [x] TODO: Set up production on DigitalOcean


This application was deployed using [these instructions](https://coderrocketfuel.com/article/create-and-deploy-an-express-rest-api-to-a-digitalocean-server)

## Deploying Updates

Excerpted from the above article:

1. Make code changes on your local development machine
2. Push the changes to the GitHub repository
3. SSH into your DigitalOcean server
4. Remove the `app` directory that holds the old application code
5. Clone the repository from GitHub with the new and updated code
6. Re-install all the npm dependencies for the application
7. Reload the PM2 process manager to fully deploy all changes
8. Test your application to ensure everything works as planned
