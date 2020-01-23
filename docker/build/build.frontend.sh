export $(grep -v '^#' ../example.env | xargs -d '\n')
rsync -a ../../packages ../../frontend --exclude **/node_modules --exclude **/.git
cd ../../frontend
VERSION=$(cat ./package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
PACKAGE_NAME=$(cat ./package.json | grep name | head -1 | awk -F= "{ print $2 }" |  sed  -e 's/"//g' -e 's/,//g'  | sed  -e 's/name/ /g' |  sed  -e 's/:/ /g' | sed  -e 's/ //g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
echo $PACKAGE_NAME
cp package.json package-prod.json
sed -i 's/\.\./\./g' package-prod.json

docker build -t $PACKAGE_NAME:$VERSION .

export DOCKER_TAG_BUILD=`docker build -t ${PACKAGE_NAME}:${VERSION} \
--build-arg BACKEND_WS_HOST=$BACKEND_WS_HOST \
--build-arg BACKEND_WS_PORT=$BACKEND_WS_PORT \
--build-arg BACKEND_WS_PROTOCOL=$BACKEND_WS_PROTOCOL . | grep "Successfully built " | awk '{print $3}'`
echo "Start push to registry : "`date`
docker login --username ddkoin --password $CI_DH_PASSWORD
docker tag $DOCKER_TAG_BUILD "ddkoin/$PACKAGE_NAME:"$VERSION
docker push "ddkoin/$PACKAGE_NAME:"$VERSION
echo "End push to registry : "`date`

rm -r packages
rm package-prod.json
cd ../
