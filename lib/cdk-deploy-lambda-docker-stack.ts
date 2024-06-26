import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Architecture, DockerImageCode, DockerImageFunction, FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';

export class CdkDeployLambdaDockerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define the Docker image Lambda function
    const lambdaFunction = new DockerImageFunction(this, 'LambdaDockerFunction', {
      code: DockerImageCode.fromImageAsset('lib/docker'),
      architecture: Architecture.ARM_64
    });

    // Add a Function URL
    const functionUrl = lambdaFunction.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    });

    new CfnOutput(this, 'FunctionUrl', {
      value: functionUrl.url,
    });
  }
}
