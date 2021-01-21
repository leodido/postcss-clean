# [1.1.0](https://github.com/leodido/postcss-clean/compare/v1.0.4...v1.1.0) (2017-09-15)


### New

* Version 1.1.0 ([ff57ebc](https://github.com/leodido/postcss-clean/commit/ff57ebc64098c769ecdc05fc83044aa652e91a71))

### Upgrade

* Dependencies upgraded to support clean-css versions >=4.0.0 and <5.0.0 (fixes #26) ([f526ae7](https://github.com/leodido/postcss-clean/commit/f526ae72b3e90a2a1557c083708ccd03a8bf5506)), closes [#26](https://github.com/leodido/postcss-clean/issues/26)
* Dependencies upgraded to support postcss versions >=6.0.0 and <7.0.0 ([0ecf266](https://github.com/leodido/postcss-clean/commit/0ecf2666296a09081c24df04f2c594f01f6c9915))



## [1.0.4](https://github.com/leodido/postcss-clean/compare/v1.0.3...v1.0.4) (2017-09-15)


### New

* Version 1.0.4 ([8464145](https://github.com/leodido/postcss-clean/commit/8464145df4e15a334f10d6a7ed8ab53058c67b87))

### Upgrade

* Dependencies lock file ([8fa0aed](https://github.com/leodido/postcss-clean/commit/8fa0aed770f4923f2cfea9e18735742c9041a0b0))
* Use caret ranges for broader dependency matching ([5e9b761](https://github.com/leodido/postcss-clean/commit/5e9b76128a9171d5e8a2cbdddbd30bcdf8dc74dd)), closes [#18](https://github.com/leodido/postcss-clean/issues/18)



## [1.0.3](https://github.com/leodido/postcss-clean/compare/v1.0.2...v1.0.3) (2017-07-06)


### Build

* Also node 7 in the test matrix ([cd67df6](https://github.com/leodido/postcss-clean/commit/cd67df681de261bfaaf01e500062da861be459c1))
* Automation of releasing process ([fc20365](https://github.com/leodido/postcss-clean/commit/fc20365dbea58d543d57bc61dd7b40668313083e))
* Dependency constraints relaxed ([75bc817](https://github.com/leodido/postcss-clean/commit/75bc817330f414e46e5aa8a9ee06956d596b1368))
* Destructuring within the configuration file not possible for node <= 5 ([1e4765f](https://github.com/leodido/postcss-clean/commit/1e4765f1c3157e34edf93b328c5adfb8d039cd33))
* Improvements (fixes #3, fixes #4, fixes #6) ([bc6d241](https://github.com/leodido/postcss-clean/commit/bc6d2414a3208dde865086309a565a3f88ddf79e)), closes [#3](https://github.com/leodido/postcss-clean/issues/3) [#4](https://github.com/leodido/postcss-clean/issues/4) [#6](https://github.com/leodido/postcss-clean/issues/6)
* Node 0.12.x support (fixes #8) ([297cd0e](https://github.com/leodido/postcss-clean/commit/297cd0e23efb3bc3ce3befd3e3c3e43a497052cc)), closes [#8](https://github.com/leodido/postcss-clean/issues/8)
* Send text lcov to coveralls (fixes #9) ([68de5f2](https://github.com/leodido/postcss-clean/commit/68de5f2f00d8113ae36e97e2aebd7b7388488ff0)), closes [#9](https://github.com/leodido/postcss-clean/issues/9)
* Switch to Buble ([b459d29](https://github.com/leodido/postcss-clean/commit/b459d2959973f02ec14047c286fe0bcaf4d7ed49))

### Docs

* Coverage badge ([cc8c954](https://github.com/leodido/postcss-clean/commit/cc8c954f20019f563f19cad05a94bdf67a2f3ada))
* Monthly downloads badge ([3b9514f](https://github.com/leodido/postcss-clean/commit/3b9514f10e03572101d63dee292cb6ed4126dc13))

### Fix

* Field jsnext:main ([629439f](https://github.com/leodido/postcss-clean/commit/629439f152523bc342a2210fcd0e809929eba65a))
* Now using the "module" field to point to the ES module ([a0870fd](https://github.com/leodido/postcss-clean/commit/a0870fdbee292f2bd1064b2a9d723faa6384aae8))
* Temporarily frozen eslint dependency (refs eslint/eslint#5476) ([9993b0a](https://github.com/leodido/postcss-clean/commit/9993b0a034cb5e979a1364d1384673e46e13cdf3)), closes [eslint/eslint#5476](https://github.com/eslint/eslint/issues/5476)

### New

* Automate changelog generation (fixes #5) ([c504c5b](https://github.com/leodido/postcss-clean/commit/c504c5b051034be88391639d49061dad1952245e)), closes [#5](https://github.com/leodido/postcss-clean/issues/5)
* Code coverage plus coveralls integration (fixes #7) ([8c9993d](https://github.com/leodido/postcss-clean/commit/8c9993d8e5f7cdc86986d593df5049a6a236ac6f)), closes [#7](https://github.com/leodido/postcss-clean/issues/7)
* Release 1.0.3 ([abbcbd3](https://github.com/leodido/postcss-clean/commit/abbcbd3ea544051eb4925d099e4dc58dbedbe88b))

### Update

* Changelog ([274fda1](https://github.com/leodido/postcss-clean/commit/274fda1de277dd5e2356ed8aaefb97dabf540847))
* Git dotfiles ([3d7d0e6](https://github.com/leodido/postcss-clean/commit/3d7d0e629f920c64907c05deedfedbc30071fa2f))
* Node 5 (travis-ci) ([862d66d](https://github.com/leodido/postcss-clean/commit/862d66d412cd86eccf70ebb6a3c7092500e34cf4))
* Support node 6 ([233bb35](https://github.com/leodido/postcss-clean/commit/233bb35f8f89c54b30f24c0d7c2d9fa6a1b28689))
* Temporarily removing jsnext:main field (refs #3) ([a753cea](https://github.com/leodido/postcss-clean/commit/a753ceabfc7ede6466c75172676a86019410c2c0)), closes [#3](https://github.com/leodido/postcss-clean/issues/3)
* Test suite ([c278d39](https://github.com/leodido/postcss-clean/commit/c278d39122732829a1c1925037486c0f67ea54fe))
* Use shortcut into package.json scripts section ([562e36b](https://github.com/leodido/postcss-clean/commit/562e36bf63ff272efe4d18e02e70b0a0294c8298))

### Upgrade

* Buble rather than Babel, plus new AVA ([5531704](https://github.com/leodido/postcss-clean/commit/5531704f41635da38fcf3996cb06379523b8dac6))
* Deprecating node 0.12 ([93f8efd](https://github.com/leodido/postcss-clean/commit/93f8efd6f8a041caad36c1e22b2c112e7caeddcd))
* Minimum node version is now 4 ([8a0ebe4](https://github.com/leodido/postcss-clean/commit/8a0ebe4bb3ccbf2589b5f6cacf656da01a649792))
* No need to have a dependency to parse the package JSON ([fd08bff](https://github.com/leodido/postcss-clean/commit/fd08bff6254e201b4d088bdfcb0d44d8cad856ad))

### WIP

* Prepare release 1.0.2 ([2a84fa1](https://github.com/leodido/postcss-clean/commit/2a84fa166c8f59ca72dc354e4cb0adf1bbd36110))



## [1.0.1](https://github.com/leodido/postcss-clean/compare/v1.0.0...v1.0.1) (2016-04-19)




