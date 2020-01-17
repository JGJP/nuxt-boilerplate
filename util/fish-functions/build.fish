function build --description 'alias build=yarn build'
	cd ~/site/client/;
	yarn build;
	rm -rf /usr/share/nginx/html/*;
	cp -a dist/* /usr/share/nginx/html/;
end
