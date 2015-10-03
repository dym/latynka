.PHONY: all build run test

# settings
EXEC = jpm
LATYNKA = data/latynka.js

all: build

build:
	cp node_modules/latynka-js/data/translate-table.json data/
	cat src/loader.js > $(LATYNKA)
	cat node_modules/latynka-js/latynka.js >> $(LATYNKA)
	cat src/latynka.js >> $(LATYNKA)

pack: build
	$(EXEC) xpi

run: build
	$(EXEC) run

test:
	$(EXEC) test
