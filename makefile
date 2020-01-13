.DEFAULT_GOAL := dev

dev:
	vagga run

# init shitbusters
install:
	cd packages && git submodule add --force git@192.168.50.46:shitbusters/core.git
	cd packages && git submodule add --force git@192.168.50.46:shitbusters/ui-kit.git
	cd packages && git submodule add --force git@192.168.50.46:shitbusters/web.git
	cd packages && git submodule add --force git@192.168.50.46:shitbusters/socket-client.git
	cd packages && git submodule add --force git@192.168.50.46:shitbusters/socket-nest.git
	cd packages && git submodule add --force git@192.168.50.46:shitbusters/socket-types.git

# update shitbusters
update:
	git submodule update --remote --rebase
	git submodule foreach 'rm ./node_modules/@app -rf && npm install'

# push with submodules
push:
	git push --recurse-submodules=on-demand

# clean after submodule update
clean:
	rm -rf frontend/node_modules
	rm -rf backend/node_modules
	git submodule foreach 'rm -r ./node_modules'

build-frontend:
	cd docker/build && sh build.frontend.sh

build-backend:
	cd docker/build && sh build.backend.sh

build:
	cd docker/build && sh build.sh

prod-up:
	cd docker && sh start.sh

prod-stop:
	docker-compose -f docker/docker-compose.build.yml down

test-backend:
	cd backend && npm test

test:
	make test-backend

t2:
	find ./packages/ -print0 | xargs -I {} -r0 echo "Working on "{}" file
