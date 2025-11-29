install: # Установка зависимостей
	npm ci

lint: #Запуск линтера
	npx eslint

lint-fix: #Фикс ошибок линтера
	npx eslint --fix

test: #Запуск тестов
	npx jest

test-watch: #Запуск тестов в режиме watch
	npx jest --watch	

compare-json: #Сравнение плоских файлов (JSON)
	gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json

compare-yml: #Сравнение плоских файлов (YML)
	gendiff ./__fixtures__/file1.yml ./__fixtures__/file2.yml

flat-format: #Плоский формат
	gendiff --format plain ./__fixtures__/file1.yml ./__fixtures__/file2.yml

output-json: #Вывод JSON
	gendiff --format json ./__fixtures__/file1.yml ./__fixtures__/file2.yml