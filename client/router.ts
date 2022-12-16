import { Router, Request, Response, NextFunction } from "express";
import { requireAuth } from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get(
  "/",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const usuario = await controller.list();
    res.json(usuario);
  }
);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await controller.store(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.patch("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await controller.update(id, data);
    res.json(user);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get(
  "/:id",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await controller.getOne(id);
      res.json(user);
    } catch (error: any) {
      res.json({
        message: error.message,
      });
    }
  }
);

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await controller.delete(id);
  res.json({ message: "El ciente ha sido eliminado" });
});

export default router;
