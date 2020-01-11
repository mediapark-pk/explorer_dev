cd ../
cp docker-compose.yml docker-compose.build.yml

export FRONTEND_VERSION=$(cat ../frontend/package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
export FRONTEND_PACKAGE_NAME=$(cat ../frontend/package.json | grep name | head -1 | awk -F= "{ print $2 }" | sed 's/[name:,\",]//g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
echo $FRONTEND_PACKAGE_NAME:$FRONTEND_VERSION

export BACKEND_VERSION=$(cat ../backend/package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
export BACKEND_PACKAGE_NAME=$(cat ../backend/package.json | grep name | head -1 | awk -F= "{ print $2 }" | sed 's/[name:,\",]//g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
echo $BACKEND_PACKAGE_NAME:$BACKEND_VERSION

sed -i 's/'FRONTEND_VERSION'/'$FRONTEND_VERSION'/g' ./docker-compose.build.yml
sed -i 's/'FRONTEND_PACKAGE_NAME'/'$FRONTEND_PACKAGE_NAME'/g' ./docker-compose.build.yml

sed -i 's/'BACKEND_VERSION'/'$BACKEND_VERSION'/g' ./docker-compose.build.yml
sed -i 's/'BACKEND_PACKAGE_NAME'/'$BACKEND_PACKAGE_NAME'/g' ./docker-compose.build.yml

echo "$(cat docker-compose.build.yml)"
