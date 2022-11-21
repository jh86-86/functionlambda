# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

##

Simple example how to use a functional url for a lambda

## How to use

deploy
get the url

This functional url is not taking a body event but a query string :

append to the url name=.....
e.g.
with a get request
https://a6ij7jaqbnbxaeo6sgcpisbojm0koiip.lambda-url.eu-west-2.on.aws/?name=JJ

should return a 200 
and if the name is not in the table then 
'no one was greeted by that name'

with a post

https://a6ij7jaqbnbxaeo6sgcpisbojm0koiip.lambda-url.eu-west-2.on.aws/?name=JJ


{
  "name": "JJ",
  "date": 1669054292759
}
and 200 result


then a get with same name should return when the person was greeted
"Was greeted on 21/11/2022"


## useful links

aws docs
https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
https://docs.aws.amazon.com/lambda/latest/dg/lambda-typescript.html






