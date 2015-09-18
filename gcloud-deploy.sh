echo $GAE_KEY_FILE_CONTENT > file.key
echo "Authenticate with $GAE_SERVICE_ACCOUNT"
google-cloud-sdk/bin/gcloud auth activate-service-account $GAE_SERVICE_ACCOUNT --key-file file.key
echo "Deploying to FORMATION_DEPLOY_NAME"
google-cloud-sdk/bin/gcloud --project devfestnantes2015 preview app deploy --version v17 --quiet dist/app.yaml
