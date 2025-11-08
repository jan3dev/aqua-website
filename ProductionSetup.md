### set up the web app
```
git clone https://github.com/jan3dev/aqua-website.git
cd ~/aqua-website
sudo apt update && sudo apt upgrade -y
sudo apt install -y nodejs npm 
sudo npm install -g pm2
npm ci || npm install
npm run build
pm2 start ecosystem.config.js --env production
```

### set up nginx
```
sudo apt install nginx certbot python3-certbot-nginx -y
sudo cp nginx.conf /etc/nginx/nginx.conf
sudo nginx -t  # Test configuration
sudo systemctl restart nginx

# Check nginx is running
curl -I 127.0.0.1

# Set up SSL certificate
sudo certbot --nginx -d aqua.net www.aqua.net aquawallet.io www.aquawallet.io
```
