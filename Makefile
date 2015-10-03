.PHONY: all build

all: build

build:
	cp node_modules/latynka-js/data/translate-table.json data/
	cat src/loader.js > data/latynka.js
	cat node_modules/latynka-js/latynka.js >> data/latynka.js
	cat src/latynka.js >> data/latynka.js
