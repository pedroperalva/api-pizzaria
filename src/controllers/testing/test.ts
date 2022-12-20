import { Request, Response } from "express";

class TestController {
  async handle(req: Request, res: Response) {
    return res.json({ ok: true });
  }
}

export { TestController };
