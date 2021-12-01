#!/bin/sh
# A simple script with a function...


echo "Stopping redis server"
sudo service redis-server stop
echo "Stopping PostgreSQL"
sudo service postgresql stop