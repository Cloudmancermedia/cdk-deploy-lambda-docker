import { v4 as uuidv4 } from 'uuid';
import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  console.log("Event: ", event);
  console.log("UUID: ", uuidv4())

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda using Docker image!",
    }),
  };
};
