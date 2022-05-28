const { Router } = require("express");
import { Request, Response, Application } from "express";
const outlookRouter = Router();
const { Client } = require("@microsoft/microsoft-graph-client");
const {
  TokenCredentialAuthenticationProvider,
} = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { DeviceCodeCredential } = require("@azure/identity");
import "isomorphic-fetch";

const { AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET } = process.env;
const credential = new DeviceCodeCredential(
  AZURE_TENANT_ID,
  AZURE_CLIENT_ID,
  AZURE_CLIENT_SECRET
);
const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: [],
});

const client = Client.initWithMiddleware({
  debugLogging: true,
  authProvider,
  // Use the authProvider object to create the class.
});

outlookRouter.post("/sendMail", (req: Request, res: Response) => {
  console.log(req.body, "body outlook 28");
  // console.log(req.headers, "headers outlook 29");
  console.log(req.params, "params outlook 30");
  // const { sampleMessgae } = req.body;
  res.sendStatus(200);

  // await client
  //   .api("/me/sendMail")
  //   .post(sampleMessgae)
  //   .then((response: any) => {
  //     console.log(response, "outlook31");
  //     res.sendStatus(202);
  //   })
  //   .catch((err: Error) => console.error(err, "sendMail failed, outlook33"));
});

module.exports = (app: Application) => {
  app.use("/api/outlook/", outlookRouter);
};
