<p align="center">
  <img src="https://i.imgur.com/yLuFUF5.jpg" />
  <h1 align="center">Telesource API</h1>
</p>

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)
* [Team](#team)
* [Contributing](#contributing)
* [Others](#others)

### Introduction
Telesource API forms the backend of [Telesource](https://github.com/tjtanjin/telesourcebot) that allows users to conveniently execute source code directly on mobile. Note that this repository contains work pertaining to the API that serves up results from executing source code only. Work for the telegram bot that users directly interact with can be found here:
```
https://github.com/tjtanjin/telesourcebot
```
You may check out the bot at the link below:
```
https://t.me/telesourcebot
```

### Features
Telesource API has a single endpoint that allows for POST requests to execute source code. It allows for 2 parameters which are the userid and the version of source to run the code on.
##### Supported Source Versions:
```
1
2
3
4
```

### Technologies
Technologies used by Telesource are as below:
##### Done with:
<p align="center">
  <img height="150" width="150" src="https://i.imgur.com/1D3AoId.png"/>
</p>
<p align="center">
JavaScript
</p>

##### Deployed on:
<p align="center">
  <img height="150" width="150" src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ayzwkdawmlyzvuummuf4" />
</p>
<p align="center">
OVHcloud
</p>

##### Project Repository
```
https://github.com/tjtanjin/telesource_api
```

### Setup
The following section will guide you through setting up your own Telesource (telegram account required).
* First, cd to the directory of where you wish to store the project and clone this repository (note that this project has to reside in the same directory as [telesourcebot](https://github.com/tjtanjin/telesourcebot)). An example is provided below:
```
$ cd /home/user/exampleuser/projects/
$ git clone https://github.com/tjtanjin/telesource_api.git
```
* Following which, execute the following commands to install nodejs, npm and jq:
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo apt-get install jq
```
* Then, install mongodb as well following the [guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) from their official website.
* Next, create a .env file at the base directory of the project with variable name DATABASE_URL as shown below (assumes localhost):
```
DATABASE_URL=mongodb://localhost/subscribers
```
* In the base directory of the project, follow the instructions [here](https://github.com/source-academy/js-slang) to build js-slang.
* Finally, run the following command to start the API:
```
$ sudo npm run start
```
* If you wish to host this API 24/7, you may refer to a similar guide [here](https://gist.github.com/tjtanjin/29875407defe183c5147bb854f9e69ae) that uses telegram bot hosting as a demonstration. 
* Reminder to update the API endpoint on the frontend of the project [here](https://github.com/tjtanjin/telesourcebot#setup)!

### Team
* [Tan Jin](https://github.com/tjtanjin)

### Contributing
If you have code to contribute to the project, open a pull request and describe clearly the changes and what they are intended to do (enhancement, bug fixes etc). Alternatively, you may simply raise bugs or suggestions by opening an issue.

### Others
For any questions regarding the implementation of the project, please drop an email to: cjtanjin@gmail.com.

