class Form {
  getForm() {
    return `
    <form action="" class="burger__form">
      <fieldset>
        <legend>Размер бургера</legend>
        <div class="form_radio_group">
          <div class="form_radio_group-item">
            <input id="radio-1" type="radio" name="size" value="small" checked>
            <label for="radio-1">Маленький</label>
          </div>
          <div class="form_radio_group-item">
            <input id="radio-2" type="radio" name="size" value="great">
            <label for="radio-2">Большой</label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Начинка</legend>
        <div class="form_radio_group">
          <div class="form_radio_group-item">
            <input id="radio-3" type="radio" name="stuffing" value="cheese" checked>
            <label for="radio-3">С сыром</label>
          </div>
          <div class="form_radio_group-item">
            <input id="radio-4" type="radio" name="stuffing" value="salad">
            <label for="radio-4">С салатом</label>
          </div>
          <div class="form_radio_group-item">
            <input id="radio-5" type="radio" name="stuffing" value="potato">
            <label for="radio-5">С картофелем</label>
          </div>
          
        </div>
        <div class="form_radio_group-item">
          <button class="count__btn count-add">+</button>
          <button class="count__btn count-remove">-</button>
        </div>
      </fieldset>
      <div class="form_radio_group-item">
        <fieldset>
          <legend>Доп. опции</legend>
          <label class="checkbox-btn">
            <input type="checkbox" name="extra" value="souce">
            <span>Соус</span>
          </label>
          <label class="checkbox-btn">
            <input type="checkbox" name="extra" value="seasoning">
            <span>Приправы</span>
          </label>
        </fieldset>
      </div>
      <input class="burger__btn" type="button" value="Подробнее о заказе">
    </form>
  `;
  }
};

class Hamburger {
  constructor(container=".burger__wrp") { 
    this.size = 'small';
    this.stuffing = 'cheese';
    this.countStuffing = 1;
    this.seasoning = false;
    this.souce = false;
    this.container = container;
    this.cal = {
      "small": 20,
      "great": 40,
      "cheese": 20,
      "salad": 5,
      "potato": 10,
      "souce": 5,
      "seasoning": 0,
    };
    this.rate = {
      "small": 50,
      "great": 100,
      "cheese": 10,
      "salad": 20,
      "potato": 15,
      "souce": 20,
      "seasoning": 15,
    }
    this.renderForm();
  }

  addTopping() {
    if (this.countStuffing < 4) {
      this.countStuffing++;
    }
  }

  removeTopping() {
    if (this.countStuffing > 1) {
      this.countStuffing--;
    }
  }

  getToppings() {
    const stuffing = document.getElementsByName('stuffing');
    const extra = document.getElementsByName('extra');
    if (extra[0].checked) {
      this.souce = extra[0].value;
    };
    if (extra[1].checked) {
      this.seasoning = extra[1].value;
    };
    stuffing.forEach(el => {
      if (el.checked === true) {
        this.stuffing = el.value;
      }
    })
  }

  getSize() {
    const size = document.getElementsByName('size');
    size.forEach(el => {
      if (el.checked === true) {
        this.size = el.value;
      }
    })
  }

  calculateCalories() {
    let sea = this.seasoning ? this.cal[this.seasoning] : 0;
    let souce = this.souce ? this.cal[this.souce] : 0;
    let sum = this.cal[this.size]
        + (this.cal[this.stuffing] * this.countStuffing)
        + sea + souce;
    return sum;
  }

  calculatePrice() {
    let sea = this.seasoning ? this.rate[this.seasoning] : 0;
    let souce = this.souce ? this.rate[this.souce] : 0;
    let sum = this.rate[this.size]
        + (this.rate[this.stuffing] * this.countStuffing)
        + sea + souce;
    return sum;
  }

  renderForm() {
    const block = document.querySelector(this.container);
    const form = new Form();
    block.insertAdjacentHTML('beforeend', form.getForm());
  }
}

const hamburger = new Hamburger()

const countAdd = document?.querySelector('.count-add');
const countRemove = document?.querySelector('.count-remove');
const btnCalc = document?.querySelector('.burger__btn');

countAdd.addEventListener('click', event => {
  event.preventDefault();
  hamburger.addTopping();
});

countRemove.addEventListener('click', event => {
  event.preventDefault();
  hamburger.removeTopping();
});

btnCalc.addEventListener('click', event => {
  event.preventDefault();
  hamburger.getToppings();
  hamburger.getSize();
  console.log("Калорий в гамбургере", hamburger.calculateCalories());
  console.log("Цена гамбургера", hamburger.calculatePrice());
})