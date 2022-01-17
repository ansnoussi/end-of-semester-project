install:
	npm install

test: install
	npm run test -- --coverage

start_dev: install
	npm run dev

lint: install
	npm run lint
