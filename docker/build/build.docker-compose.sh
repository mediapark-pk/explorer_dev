cd ../
cp docker-compose.yml docker-compose.build.yml

export FRONTEND_VERSION=$(cat ../frontend/package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
export FRONTEND_PACKAGE_NAME=$(cat ../frontend/package.json | grep name | head -1 | awk -F= "{ print $2 }" | sed  -e 's/"//g' -e 's/,//g'  | sed  -e 's/name/ /g' |  sed  -e 's/:/ /g' | sed  -e 's/ //g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
echo $FRONTEND_PACKAGE_NAME:$FRONTEND_VERSION

export BACKEND_VERSION=$(cat ../backend/package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
export BACKEND_PACKAGE_NAME=$(cat ../backend/package.json | grep name | head -1 | awk -F= "{ print $2 }" | sed  -e 's/"//g' -e 's/,//g'  | sed  -e 's/name/ /g' |  sed  -e 's/:/ /g' | sed  -e 's/ //g' | tr -d '[[:space:]]' | tr '[:upper:]' '[:lower:]')
echo $BACKEND_PACKAGE_NAME:$BACKEND_VERSION

sed -i 's/'FRONTEND_VERSION'/'$FRONTEND_VERSION'/g' ./docker-compose.build.yml
sed -i 's/'FRONTEND_PACKAGE_NAME'/'$FRONTEND_PACKAGE_NAME'/g' ./docker-compose.build.yml

sed -i 's/'BACKEND_VERSION'/'$BACKEND_VERSION'/g' ./docker-compose.build.yml
sed -i 's/'BACKEND_PACKAGE_NAME'/'$BACKEND_PACKAGE_NAME'/g' ./docker-compose.build.yml


#=================================================
#artefacts 128.199.139.77
#mkdir -p ~/128.199.139.77/
#cp ./docker-compose.build.yml ~/128.199.139.77/
#cp ./example.env ~/128.199.139.77/settings.env
#sed -i 's/'BACKEND_WS_HOST=10.6.20.3'/'BACKEND_WS_HOST=128.199.139.77'/g' ~/128.199.139.77/settings.env
#sed -i 's/'BACKEND_HOST=10.6.20.3'/'BACKEND_HOST=128.199.139.77'/g' ~/128.199.139.77/settings.env
#cp ./start.sh ~/128.199.139.77/
#cp ./nginx.template.conf ~/128.199.139.77/
#chmod -R 777 ~/128.199.139.77/
#=================================================

#=================================================
#artefacts 128.199.253.39
#mkdir -p ~/128.199.253.39/
#cp ./docker-compose.build.yml ~/128.199.253.39/
#cp ./example.env ~/128.199.253.39/settings.env
#sed -i 's/'BACKEND_WS_HOST=10.6.20.3'/'BACKEND_WS_HOST=128.199.253.39'/g' ~/128.199.253.39/settings.env
#sed -i 's/'BACKEND_HOST=10.6.20.3'/'BACKEND_HOST=128.199.253.39'/g' ~/128.199.253.39/settings.env
#cp ./start.sh ~/128.199.253.39/
#cp ./nginx.template.conf ~/128.199.253.39/
#chmod -R 777 ~/128.199.253.39/
#=================================================


echo "$(cat docker-compose.build.yml)"
