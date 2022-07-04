import {
  CreateAccount,
  GetExtract,
  MakeDeposit,
  MakeDraft,
  MakeTransfer,
} from "../controllers";
import Router from "express";

const route = Router();

route
  .route("/create-account")
  .post(new CreateAccount().handle.bind(new CreateAccount()));

route.route("/extract").post(new GetExtract().handle.bind(new GetExtract()));
route.route("/deposit").post(new MakeDeposit().handle.bind(new MakeDeposit()));
route.route("/draft").post(new MakeDraft().handle.bind(new MakeDraft()));
route
  .route("/transfer")
  .post(new MakeTransfer().handle.bind(new MakeTransfer()));


export default route;
