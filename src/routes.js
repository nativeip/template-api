import { Router } from "express";
import QueuesLogsController from "./controllers/QueuesLogsController";

const routes = new Router();

routes.post("/queuesLogs", QueuesLogsController.store);
routes.put("/queuesLogs/:id", QueuesLogsController.update);
routes.get("/queuesLogs", QueuesLogsController.index);
routes.get("/queuesLogs/:id", QueuesLogsController.show);
routes.delete("/queuesLogs/:id", QueuesLogsController.delete);

export default routes;
