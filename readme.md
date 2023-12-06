# Advent JS version 2023

El [AdventJS](https://adventjs.dev/) es un evento iniciativa de
[@midudev](https://midu.dev/). En él, durante 24 días del mes de diciembre se
estarán publicando retos en la página oficial del evento:

- https://adventjs.dev/

Los retos se pueden resolver tanto en JavaScript como en Typescript, para esta
versión estaré usando TypeScript, en su versión 5.3.2.

## Retos

| Día |                                     Reto                                      | Dificultad [^1]  |                                Solución                                 |
| :-: | :---------------------------------------------------------------------------: | :--------: | :---------------------------------------------------------------------: |
| 01  |   [**¡Primer regalo repetido!**](https://adventjs.dev/es/challenges/2023/1)   |     🟢     | [01 TS](./src/challenges/01.ts) |
| 02  | [**Ponemos en Marcha la fabrica**](https://adventjs.dev/es/challenges/2023/2) |     🟢     | [02 TS](./src/challenges/02.ts) |
| 03  |       [**El elfo travieso**](https://adventjs.dev/es/challenges/2023/3)       |     🟢     | [03 TS](./src/challenges/03.ts) |
| 04  | [**Dale vuelta a los parentesis**](https://adventjs.dev/es/challenges/2023/4) |     🟠     | [04 TS](./src/challenges/04.ts) |
| 05  | [**El CyberTruck de Santa**](https://adventjs.dev/es/challenges/2023/5) |     🟠     | [05 TS](./src/challenges/05.ts) |

## Herramientas

![EsLint](https://img.shields.io/badge/-EsLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![TsNode](https://img.shields.io/badge/-TsNode-3178C6?style=flat-square&logo=ts-node&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-ADD467?style=flat-square&logo=vitest&logoColor=white)

## Ejecutar los tests

Para ejecutar los tests de los retos, se debe ejecutar el siguiente comando:

```bash
pnpm t
```
![Alt text](lib/image-2.png)

## Ejecutar un reto

Para ejecutar un reto en particular, se debe ejecutar el siguiente comando:

```bash
pnpm vitest src/tests/{day}.spec.ts
```
![Alt text](lib/image-1.png)

O también se puede ejecutar el siguiente comando:

```bash
pnpm vitest -t "Challenge #{day}"
```
Este comando los listará todos pero solo ejecutará el que se le indique.

![Alt text](lib/image.png)

## Estado de las pruebas (instalación de dependencias, lint, tests)

[![pnpm ci - eslint - tests](https://github.com/jamerrq/advent-js-2023/actions/workflows/ci-eslint.yml/badge.svg)](https://github.com/jamerrq/advent-js-2023/actions/workflows/ci-eslint.yml)

## Copyrigth

© 2023 [jamerrq](https://github.com/jamerrq)

[^1]: **Dificultad**: 🟢 Facil 🟠 Media 🔴 Dificil
