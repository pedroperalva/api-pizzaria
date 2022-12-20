import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrder";

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const detailOrderService = new DetailOrderService();

    const order_id = req.query.order_id as string;

    const orders = await detailOrderService.execute({ order_id });

    return res.json(orders);
  }
}

export { DetailOrderController };
