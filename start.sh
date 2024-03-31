if [ -d "./node_modules" ]; then
 npm run start
else
 npm install && npm run start
fi