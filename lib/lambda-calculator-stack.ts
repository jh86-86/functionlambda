import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { AttributeType, Table } from "aws-cdk-lib/aws-dynamodb";
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import { FunctionUrlAuthType, Runtime } from "aws-cdk-lib/aws-lambda";
import * as path from "path";

export class LambdaCalculatorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new Table(this, "HelloJJ", {
      partitionKey: { name: "name", type: AttributeType.STRING },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const dynamoLambda = new NodejsFunction(this, "dynamoLambdaHandlerJJ", {
      runtime: Runtime.NODEJS_14_X,
      //entry is basically where the typescript file is
      entry: path.join(__dirname, "/../functions/function.ts"),
      handler: "handler",
      environment: {
        HELLO_TABLE_NAME: table.tableName,
      },
    });

    //grant permissions
    table.grantReadWriteData(dynamoLambda);

    const myFunctionUrl = dynamoLambda.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ["*"],
      },
    });

    new CfnOutput(this, 'FunctionUrl', {
      value: myFunctionUrl.url,
    });
  }
}
