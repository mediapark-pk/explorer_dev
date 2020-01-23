# build backend

rsync -av --progress ../../packages ../../backend --exclude **/node_modules --exclude **/.git
cd ../../backend
VERSION=$(cat ./package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
PACKAGE_NAME=$(cat ./package.json | grep name | head -1 | awk -F= "{ print $2 }" |  sed  -e 's/"//g' -e 's/,//g'  | sed  -e 's/name/ /g' |  sed  -e 's/:/ /g' | sed  -e 's/ //g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
#cp package.json package-prod.json

docker build -t $PACKAGE_NAME:$VERSION .

export DOCKER_TAG_BUILD=`docker build -t ${PACKAGE_NAME}:${VERSION} . | grep "Successfully built " | awk '{print $3}'`
echo "Start push to registry : "`date`
docker login --username ddkoin --password $CI_DH_PASSWORD
docker tag $DOCKER_TAG_BUILD "ddkoin/$PACKAGE_NAME:"$VERSION
docker push "ddkoin/$PACKAGE_NAME:"$VERSION
echo "End push to registry : "`date`

rm -rf packages
#rm package-prod.json
cd ../
