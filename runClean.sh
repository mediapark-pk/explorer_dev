cd packages

# cd web
# rm ./node_modules/@app -rf
# rm package-lock.json
# npm install
# cd ..

cd core
rm ./node_modules/@app -rf
rm package-lock.json
npm install
cd ..

cd ui-kit
rm ./node_modules/@app -rf
rm package-lock.json
npm install
cd ..

cd ../frontend
rm ./node_modules/@app -rf
rm ./node_modules/ui-kit -rf
rm package-lock.json
npm install
cd ..

vagga run