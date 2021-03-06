# DevFest site 2015 [ ![Codeship Status for GDG-Nantes/devFestSite-2015](https://codeship.com/projects/3af878d0-d194-0132-1723-16c1124d299d/status?branch=master)](https://codeship.com/projects/77346)

Based on https://github.com/gdg-x/zeppelin

# Let's encrypt on AppEngine

```
docker run -it -p 443:443 -p 80:80 \
  -v "$(pwd)/ssl-keys:/etc/letsencrypt" \
  quay.io/letsencrypt/letsencrypt:latest \
  -a manual certonly
```

Go to `devfest.go` and change the challenge (L27)
Enter an email for urgent notices, agree the terms and enter the domain to secure.
Upload the application with the new challenge.
Complete the docker command line.
Go to `/ssl-keys/live/devfest2015.gdgnantes.com/` and upload the files on AppEngine:
- fullchain.pem
- rsa.pem doing the convertion `openssl rsa -in privkey.pem -out rsa.pem`


# How to

* use `npm install` to install node-static
* launch with `npm start` to run on localhost:8080
* Or `gulp serve` with watch files

#Commit message convention

Example: `feat(#5): add more speakers`

* feat: A new feature
* fix: A bug fix
* docs: Documentation only changes
* style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* refactor: A code change that neither fixes a bug or adds a feature
* perf: A code change that improves performance
* test: Adding missing tests
* chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

Use Slack for further information : #devfest
Application available on : https://devfestnantes2015.appspot.com


#Socials
Pour Google aller voir https://console.developers.google.com projet DevQuest pour récupérer l'identifiant client
Pour Twitter : https://apps.twitter.com/
Pour Github : https://github.com/settings/applications

Pour Twitter & Github aller en plus sur https://auth-server.herokuapp.com/#-auth-server