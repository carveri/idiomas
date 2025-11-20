import pg from "pg";



// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "IDIOMAS_SECRET";

const client = new SecretsManagerClient({
  region: "us-east-1",
});

let response;

try {
  response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
    })
  );
} catch (error) {
  // For a list of exceptions thrown, see
  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
  throw error;
}

const secret = response.SecretString;

console.log('secreto papuuu:', secret);
// console.log(typeof(secret));
// console.log(secret.split(":")[1]);

export const username = secret.split(":")[1].split(",")[0]
export const password = secret.split(":")[2].split(",")[0]
export const host = secret.split(":")[4].split(",")[0]
export const port = secret.split(":")[5].split(",")[0]
export const database= secret.split(":")[6].split(",")[0].replace("}", "")
console.log(username, password, host, port, database);


export const pool = new pg.Pool({
    user: username,
    host: host,
    password: password,
    database: database,
    port: port
})

pool.query('SELECT NOW()').then(result =>{
    //console.log('resultado de la db:', result);
    
})

