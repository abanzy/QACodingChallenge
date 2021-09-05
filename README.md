# QACodingChallenge

### 1. Clone this repo

If you want to experiment with running this project, you'll need to Clone it first.

To clone this project from `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/QACodingChallenge.git

## cd into the cloned repo
cd QACodingChallenge

## install the node_modules (Careful! we use Node v11.15.0)
npm install

## To run the tests visually use
npm run cypress:open

## To run the tests in a headless inviroment use
npm run cypress
```

Both should work just fine!

### 2. Test Setup

Theses tests run under the premise that you both emails properly validated in the platform

the setup configuration for the test accounts can be found in the cypress.json file
```bash

## Under the name [mex/arg]email and passwords should be configured to a valid email accounts
        "mexemail":"jpwrfdtpp@trythe.net",
        "mexpassword":"DiYS2nAdgcs5SMq@",
        "argemail":"uwpuww@trythe.net",
        "argpassword":"JcSp95PiK2DkpLK@"
        ## these emails are only temporary and were used during the development of these tests
```
### 3. Adressing my Issues with Bitso Platform

During the time that i was creating these tests, the Bitso platform had a strong policy on limiting my login acess and also limiting my API  requests to different routes:
```bash
## The Login and the Deposit API routes baing the most intolerant to repeated requests
POST api/v3/login status 400
GET /api/v3/funding_methods/* status 400
## Making this process way more taxating to go through
```
I strongly belive that both should be 401 status but thats not here nor there.

```bash
The steps 1 through 3 makes no sense in a agile enviroment those are not scalable or repeatable.

The step 5 is poorly writen and leads to dubibous intepretations and flaky tests, albeit its just a 'test'
this kind of automation flow should be avoided.
```

 Yet i hope you guys cant take this feedback to improve these conditions as testable code is a serious thing.

