#!/bin/bash
cd client
ng build --env=prod
cd ..
rm -rf ./server/public
cp -r ./client/dist/ ./server/public

git add .
git commit -m "Commit pre-deploy"

git subtree push --prefix=server heroku master