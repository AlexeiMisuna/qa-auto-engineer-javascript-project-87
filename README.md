### Hexlet tests and linter status:
[![Actions Status](https://github.com/AlexeiMisuna/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AlexeiMisuna/qa-auto-engineer-javascript-project-87/actions)

### SonarQube review:
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=AlexeiMisuna_qa-auto-engineer-javascript-project-87)](https://sonarcloud.io/summary/new_code?id=AlexeiMisuna_qa-auto-engineer-javascript-project-87)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=AlexeiMisuna_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/summary/new_code?id=AlexeiMisuna_qa-auto-engineer-javascript-project-87)

# Difference Calculator
Difference Calculator — утилита командной строки для сравнения двух файлов и определения различий между ними. Поддерживаются форматы JSON и YAML, а вывод осуществляется в форматах flat и JSON.
Сравнение JSON и YAML файлов

## Возможности
* Определение добавленных, удалённых, изменённых и неизменённых значений
* Поддержка плоских структур
* Вывод результата в форматах:
  * flat — перечисление изменений в строках 
  * json — структурированный JSON


## Установка и запуск
* Убедитесь, что у Вас установлен NodeJS не менее 16.9.0 версии
* Клонируйте репозиторий 
`git clone https://github.com/AlexeiMisuna/qa-auto-engineer-javascript-project-87.git`
* Перейдите в папку проекта 
`cd qa-auto-engineer-javascript-project-87`
*  Установите зависимости приложения
`make install`

## Запуск сравнения файлов
*  Сравнение плоских файлов (JSON)
`make compare-json`
*  Сравнение плоских файлов (YML)
`make compare-yml`
*  Плоский формат
`make flat-format`
*  Вывод JSON
`make flat-format`

## Использованные технологии
* Node.js
* Парсинг JSON и YAML
* Линтер (ESLint)
* Тестирование (Jest)
* Проверка покрытия тестами
* CI (GitHub Actions)
* Анализ качества кода (SonarCloud)

### Asciinema:
#### Comparison of flat files (JSON)
[![asciicast](https://asciinema.org/a/bf0VRMwi2lFCNYw2jUmge7Cq4.svg)](https://asciinema.org/a/bf0VRMwi2lFCNYw2jUmge7Cq4)

#### Comparison of flat files (YML)
[![asciicast](https://asciinema.org/a/FLVW54elf31OHPLINTEESuCAE.svg)](https://asciinema.org/a/FLVW54elf31OHPLINTEESuCAE)

#### Flat format
[![asciicast](https://asciinema.org/a/bUTnMXHw59vjoyqX6QmhBsbjW.svg)](https://asciinema.org/a/bUTnMXHw59vjoyqX6QmhBsbjW)

#### Output in json
[![asciicast](https://asciinema.org/a/T06BeOQgxJjsuaKOFQLtQ32M7.svg)](https://asciinema.org/a/T06BeOQgxJjsuaKOFQLtQ32M7)