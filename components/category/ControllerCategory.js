import { ViewCategory } from './ViewCategory.js';
import { ModelCategory } from './ModelCategory.js';

export class ControllerCategory {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelCategory(this);
    this.view = new ViewCategory(this);
  }

  startFilterByCateg(categ) {
    console.log(categ); // REMOVE ME!

    const filteredProdByCateg = this.model.getProdByCategory(categ);
    this.observer.publish('Category was chosen', categ);
    this.observer.publish('Products are ready for render', filteredProdByCateg);
  }
}