export $(grep -v '^#' ../example.env | xargs -d '\n')
rsync -a --progress ../../packages ../../frontend --exclude **/node_modules --exclude **/.git
cd ../../frontend
VERSION=$(cat ./package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
PACKAGE_NAME=$(cat ./package.json | grep name | head -1 | awk -F= "{ print $2 }" | sed 's/[name:,\",]//g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
echo $PACKAGE_NAME
cp package.json package-prod.json
sed -i 's/\.\./\./g' package-prod.json
docker build -t ${PACKAGE_NAME}:${VERSION} \
--build-arg WS_HOST=$BACKEND_WS_HOST \
--build-arg WS_PORT=$BACKEND_WS_PORT \
--build-arg WS_PROTOCOL=$BACKEND_WS_PROTOCOL .
rm -r packages
rm package-prod.json
cd ../
