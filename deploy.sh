read -p "Commit name: " commitName 
git add .
git commit -m "$commitName"
git push
npm run build 
echo samwich.dev > dist/CNAME
npm run post