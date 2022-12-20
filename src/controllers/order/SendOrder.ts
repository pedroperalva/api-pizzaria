import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrder";

class SendOrderController {
  async handle(req: Request, res: Response) {
    const sendOrderService = new SendOrderService();

    const { order_id } = req.body;

    const order = await sendOrderService.execute({ order_id });

    return res.json(order);
  }
}

export { SendOrderController };
