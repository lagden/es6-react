build:
	- rm -rf dist
	mkdir dist
	grunt
	cp -r css dist/css
	jspm bundle-sfx app/main -o dist/app.js
	./node_modules/.bin/uglifyjs dist/app.js -o dist/app.min.js
	./node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html