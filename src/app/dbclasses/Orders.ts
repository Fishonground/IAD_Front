import {Product} from "./Product";
import {User} from "./User";
import {Order_conditions} from "./Order_conditions";

export class Orders{
  id: number;
  productByProduct: Product;
  usersByCustomer: User;
  addresseeId: number;
  orderConditionsByCondition: Order_conditions;
}
