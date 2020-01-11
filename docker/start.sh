if [ -f $(docker network ls | grep -e docker_ddk-testnet | awk '{print $2'}) ]; then
  docker network create --subnet=10.0.0.0/9 --gateway=10.0.0.1 docker_ddk-testnet
fi

docker-compose -f docker-compose.build.yml up -d
