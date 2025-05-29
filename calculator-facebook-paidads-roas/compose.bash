#!/bin/bash

##

set -e

set -x

##

reset

clear

##

docker-compose pull

docker-compose down --remove-orphans

docker-compose up --build
