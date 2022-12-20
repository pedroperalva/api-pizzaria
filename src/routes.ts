import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/multer";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateUserController } from "./controllers/user/CreateUser";
import { AuthUserController } from "./controllers/user/AuthUser";
import { DetailUserController } from "./controllers/user/DetailUser";
import { CreateCategoryController } from "./controllers/category/CreateCategory";
import { ListCategoryController } from "./controllers/category/ListCategory";
import { CreateProductController } from "./controllers/product/CreateProduct";
import { ListByCategoryController } from "./controllers/product/ListByCategory";
import { CreateOrderController } from "./controllers/order/CreateOrder";
import { RemoveOrderController } from "./controllers/order/RemoveOrder";
import { AddItemController } from "./controllers/order/AddItem";
import { RemoveItemController } from "./controllers/order/RemoveItem";
import { SendOrderController } from "./controllers/order/SendOrder";
import { ListOrderController } from "./controllers/order/ListOrder";
import { DetailOrderController } from "./controllers/order/DetailOrder";
import { FinishOrderController } from "./controllers/order/FinishOrder";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// ROTAS USER
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

// ROTAS CATEGORY

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// ROTAS PRODUCT

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

// ROTAS ORDER

router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

router.post("/order/add", isAuthenticated, new AddItemController().handle);

router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);

router.put("/order/send", isAuthenticated, new SendOrderController().handle);

router.get("/orders", isAuthenticated, new ListOrderController().handle);

router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);

router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

export { router };
