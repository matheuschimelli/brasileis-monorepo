#!/bin/sh
# A simple script with a function...


echo "Starting redis server"
sudo service redis-server start
echo "Starting PostgreSQL"
sudo service postgresql start