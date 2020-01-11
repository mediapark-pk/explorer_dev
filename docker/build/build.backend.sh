# build backend

rsync -av --progress ../../packages ../../backend --exclude **/node_modules --exclude **/.git
cd ../../backend
VERSION=$(cat ./package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
PACKAGE_NAME=$(cat ./package.json | grep name | head -1 | awk -F= "{ print $2 }" | sed 's/[name:,\",]//g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
#cp package.json package-prod.json
docker build -t ${PACKAGE_NAME}:${VERSION} .
rm -rf packages
#rm package-prod.json
cd ../
