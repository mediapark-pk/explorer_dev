git submodule update --remote --rebase
git submodule foreach 'rm ./node_modules/@app -rf && npm install'

cd backend

rm ./package-lock.json
rm -rf ./node_modules

npm install
cd ..

cd frontend

rm ./package-lock.json
rm -rf ./node_modules

npm install
cd ..

vagga run
