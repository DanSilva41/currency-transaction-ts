<img align="center" src="docs/logo.png" alt="Currency Transaction">
    
<h4 align="center">
    <a href="#">Live demo</a>
</h4>

<h3 align="center">
    Simple, fast and reactive application to convert values between all currencies.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/dansilva41/currency-transaction-ts?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dansilva41/currency-transaction-ts">

  <a href="https://github.com/dansilva41/currency-transaction-ts/commits/main" target="_blank">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dansilva41/currency-transaction-ts">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/dansilva41/currency-transaction-ts/stargazers" target="_blank">
    <img alt="MIT License" src="https://img.shields.io/github/stars/dansilva41/currency-transaction-ts?style=social">
  </a>

  <a href="https://danilosilva.tk" target="_blank">
    <img alt="made by Danilo Silva" src="https://img.shields.io/badge/made%20by-Danilo%20Silva-blue">
  </a>

  <a href="https://developers-friends.gitbook.io/" target="_blank">
    <img alt="Developer's Friends" src="https://img.shields.io/badge/Blog-Developers%20Friends-orange">
    </a> 
</p>

<p align="center">
 <a href="#dizzy-about">About</a> •
 <a href="#mega-features">Features</a> • 
 <a href="#rocket-technologies-and-motivation">Technologies and motivation</a> •
 <a href="#computer-building-locally">Building Locally</a> •
 <a href="#memo-license">License</a>

</p>

## :dizzy: About

This application is designed with currency-based value conversion in mind, where the focus is to get the conversion rates from an [external api](https://exchangeratesapi.io),
perform the conversion calculations, persist the data and return to consistent data.
In addition to offering performance due to its reactive behavior, the application provides a way to consult the conversions already carried out by the user.

---
## :mega: Features

|          Actions                                  |     Available       |
| --------------------------                        | :-----------------: |
| Converting value between all currencies           |         ✔️           |
| Get all conversions performed by user             |         ✔️           |

---

## :rocket: Technologies and motivation

The project was developed using the following technologies

- [NestJS](https://nestjs.com/): Is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
- [NodeJS](https://nodejs.org/): As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
- [GitHub Actions](https://github.com/features/actions): As CI / CD process GitHub Actions provides a simple, powerful, integrated with various cloud providers and with the processing power and full feedback, therefore, it fulfills the final release of this product.

---

## :computer: Building Locally

### Requirements

- [NodeJS](https://nodejs.org/)

### Install

1. Clone the repository

   `git clone git@github.com:DanSilva41/currency-transaction-ts.git`

2. Enter directory
   
    `cd currency-transaction-ts`

3. Install dependencies
   
    `npm install`

### Run application

```bash
    `npm run start`
    # development mode
    `npm run start:dev`
    # production mode
    `npm run start:prod`
```

Open http://localhost:3000

---


## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/dansilva41/currency-transaction-ts/blob/main/LICENSE) for more information.

Developed by Danilo Silva :wave: [Get in touch!](https://www.linkedin.com/in/danilosilvap/)
