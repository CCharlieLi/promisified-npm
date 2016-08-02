ENV = DEBUG=pnpm:*
MOCHA_OPTS = -b --timeout 60000 --reporter spec
TESTS = test/*.test.js
NODE_BIN = ./node_modules/.bin
MOCHA = $(NODE_BIN)/_mocha

lint:
	@$(NODE_BIN)/jscs lib test
lint-fix:
	@$(NODE_BIN)/jscs lib test --fix
test:
	@echo "Linting..."
	@make lint-fix
	@make lint
	@echo "Testing..."
	@$(ENV) $(MOCHA) $(MOCHA_OPTS) $(TESTS)
.PHONY: lint lint-fix test

