make lint: #Запуск линтера
	npx eslint

make lint-fix: #Фикс ошибок линтера
	npx eslint --fix

make test: #Запуск тестов
	npx jest

make test-watch: #Запуск тестов в режиме watch
	npx jest --watch	
