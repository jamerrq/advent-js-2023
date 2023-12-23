# Advent JS version 2023 🎄

> [!NOTE]
> Si este repositorio llega a 16+ estrellas, estaré desarrollando una librería
> de npm para resolver los retos del [AdventJS](https://adventjs.dev/) 2023.

Soluciones bizarras a los retos del [AdventJS](https://adventjs.dev/) 2023.

![Alt text](./lib/rank.png)

El [AdventJS](https://adventjs.dev/) es un evento iniciativa de
[@midudev](https://midu.dev/). En él, durante 24 días del mes de diciembre se
estarán publicando retos en la página oficial del evento:

- https://adventjs.dev/

Los retos se pueden resolver tanto en JavaScript como en Typescript.
Para esta versión estaré usando TypeScript, en su versión 5.3.2.

## Retos 🎅

| Día | Reto | Dificultad [^1] | Solución | Tests |
| :-: | :---------------------------------------------------------------------------: | :--------: | :---------------------------------------------------------------------: | :---: |
| 01  | [**🎁 ¡Primer regalo repetido!**](https://adventjs.dev/es/challenges/2023/1)     |     🟢     | [TS](./src/challenges/01.ts) | [SPEC](./src/tests/01.spec.ts) |
| 02  | [**🏭 Ponemos en Marcha la fabrica**](https://adventjs.dev/es/challenges/2023/2) |     🟢     | [TS](./src/challenges/02.ts) | [SPEC](./src/tests/02.spec.ts) |
| 03  | [**😏 El elfo travieso**](https://adventjs.dev/es/challenges/2023/3)             |     🟢     | [TS](./src/challenges/03.ts) | [SPEC](./src/tests/03.spec.ts) |
| 04  | [**😵‍💫 Dale vuelta a los parentesis**](https://adventjs.dev/es/challenges/2023/4) |     🟠     | [TS](./src/challenges/04.ts) | [SPEC](./src/tests/04.spec.ts) |
| 05  | [**🛷 El CyberTruck de Santa**](https://adventjs.dev/es/challenges/2023/5)       |     🟠     | [TS](./src/challenges/05.ts) | [SPEC](./src/tests/05.spec.ts) |
| 06  | [**🦌 Los renos a prueba**](https://adventjs.dev/es/challenges/2023/6)           |     🟢     | [TS](./src/challenges/06.ts) | [SPEC](./src/tests/06.spec.ts) |
| 07  | [**📦 Las cajas en 3d**](https://adventjs.dev/es/challenges/2023/7)              |     🟢     | [TS](./src/challenges/07.ts) | [SPEC](./src/tests/07.spec.ts) |
| 08  | [**🏭 Ordenando el almacen**](https://adventjs.dev/es/challenges/2023/8)         |     🟠     | [TS](./src/challenges/08.ts) | [SPEC](./src/tests/08.spec.ts) |
| 09  | [**🚦 Alterna las luces**](https://adventjs.dev/es/challenges/2023/9)            |     🟢     | [TS](./src/challenges/09.ts) | [SPEC](./src/tests/09.spec.ts) |
| 10  | [**🎄 Crea tu propio árbol de navidad**](https://adventjs.dev/es/challenges/2023/10)       |     🟢     | [TS](./src/challenges/10.ts) | [SPEC](./src/tests/10.spec.ts) |
| 11  | [**📖 Los elfos estudiosos**](https://adventjs.dev/es/challenges/2023/11)       |     🟠     | [TS](./src/challenges/11.ts) | [SPEC](./src/tests/11.spec.ts) |
| 12  | [**📸 Es una copia válida?**](https://adventjs.dev/es/challenges/2023/12)       |     🟠     | [TS](./src/challenges/12.ts) | [SPEC](./src/tests/12.spec.ts) |
| 13  | [**⌚ Calculando el tiempo**](https://adventjs.dev/es/challenges/2023/13)           |     🟢     | [TS](./src/challenges/13.ts) | [SPEC](./src/tests/13.spec.ts) |
| 14  | [**🚨 Evita la alarma**](https://adventjs.dev/es/challenges/2023/14)           |     🟠     | [TS](./src/challenges/14.ts) | [SPEC](./src/tests/14.spec.ts) |
| 15  | [**↔️ Robot autónomo**](https://adventjs.dev/es/challenges/2023/15)           |     🟠     | [TS](./src/challenges/15.ts) | [SPEC](./src/tests/15.spec.ts) |
| 16  | [**❌ Viernes de deploy**](https://adventjs.dev/es/challenges/2023/16)           |     🟢     | [TS](./src/challenges/16.ts) | [SPEC](./src/tests/16.spec.ts) |
| 17  | [**🛷 Optimizando el alquiler**](https://adventjs.dev/es/challenges/2023/17)           |     🟢     | [TS](./src/challenges/17.ts) | [SPEC](./src/tests/17.spec.ts) |
| 18  | [**🔢 El reloj digital**](https://adventjs.dev/es/challenges/2023/18)           |     🔴     | [TS](./src/challenges/18.ts) | [SPEC](./src/tests/18.spec.ts) |
| 19  | [**💣 Enfrenta el sabotage**](https://adventjs.dev/es/challenges/2023/19)           |     🟠     | [TS](./src/challenges/19.ts) | [SPEC](./src/tests/19.spec.ts) |
| 20  | [**🏋️ Distribuye el peso**](https://adventjs.dev/es/challenges/2023/20)           |     🔴     | [TS](./src/challenges/20.ts) | [SPEC](./src/tests/20.spec.ts) |
| 21  | [**🪐 Mensaje Binario**](https://adventjs.dev/es/challenges/2023/21)           |     🟠     | [TS](./src/challenges/21.ts) | [SPEC](./src/tests/21.spec.ts) |
| 22  | [**🚂 Lenguaje de programación**](https://adventjs.dev/es/challenges/2023/22)           |     🟢     | [TS](./src/challenges/22.ts) | [SPEC](./src/tests/22.spec.ts) |
| 23  | [**🍽️ Cena de navidad**](https://adventjs.dev/es/challenges/2023/23)           |     🟢     | [TS](./src/challenges/23.ts) | [SPEC](./src/tests/23.spec.ts) |

## Herramientas utilizadas 🛠️

![Pnpm](https://img.shields.io/badge/-Pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)
![EsLint](https://img.shields.io/badge/-EsLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

![NodeJS](https://img.shields.io/badge/-NodeJS-339933?style=flat-square&logo=node.js&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-ADD467?style=flat-square&logo=vitest&logoColor=white)

![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Bash](https://img.shields.io/badge/-Bash-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white)

![Github Actions](https://img.shields.io/badge/-Github%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)

## Tests 🧪

Para ejecutar los tests de los retos, se debe ejecutar el siguiente comando:

```bash
pnpm test-all
```
![Alt text](-/../lib/all-tests.png)

## Test individuales 🔬

Para ejecutar un reto en particular, se debe ejecutar el siguiente comando:

```bash
pnpm t $N
```
Donde `$N` es el número del reto.
![Alt text](./lib/individual-tests.png)

## CI/CD 🚀

[![pnpm ci - eslint -
tests](https://github.com/jamerrq/advent-js-2023/actions/workflows/ci-eslint-tests.yml/badge.svg)](https://github.com/jamerrq/advent-js-2023/actions/workflows/ci-eslint-tests.yml)

## Copyrigth

© 2023 [jamerrq](https://github.com/jamerrq)

[^1]: **Dificultad**: 🟢 Facil 🟠 Media 🔴 Dificil
