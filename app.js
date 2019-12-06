class SelNode {
  constructor(node) {
    return document.querySelector(node);
  }
}

class Sumar {
  constructor(ob) {
    if (!ob) {
      ob = {
        el: new SelNode('#text'),
        a: 4,
        b: 2
      }
    }
    
    ob.el.innerHTML = `${ob.a} + ${ob.b} = ${Number(ob.a) + Number(ob.b)}`;
  }
}

class Event {
  constructor(elem, event, func) {
    elem.addEventListener(event, () => {
      func();
    });
  }
}

class StartedPage {
  constructor(func) {
    new Event(window, "load", () => {
      func();
    });
  }
}

let btnStart = new SelNode('#start');
let btnHide = new SelNode('#hide');

btnStart.addEventListener('click', () => {
    new SelNode('#inputs').innerHTML = `<div class="form-group">
    <label for="exampleInputEmail1">Write a number:</label>
    <input type="text" class="form-control" id="num1" placeholder="Num1">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Write a other number:</label>
    <input type="text" class="form-control" id="num2" placeholder="Num2">
  </div>
  <button id="sumar" class="btn btn-lg btn-block btn-primary">
    Start
  </button>`;

  let btnAdd = new SelNode('#sumar');

  btnAdd.addEventListener('click', () => {
    btnHide.className = 'btn btn-danger btn-lg btn-block';

    new SelNode('#alert').className = 'alert alert-success';
    new SelNode('#alert').innerHTML = `<h4 class="alert-heading">Very Well!</h4>
    <p>
        Your Add has been realized very well, your add is:
    </p>
    <hr>
    <span id="text"></span>`;

    new Sumar({
        el: new SelNode('#text'),
        a: new SelNode('#num1').value,
        b: new SelNode('#num2').value
    });

    new SelNode('#inputs').innerHTML = '';
  });
});

btnHide.addEventListener('click', () => {
  new SelNode('#alert').className = 'hide alert alert-success';
  new SelNode('#alert').innerHTML = '';

  btnHide.className = 'hide btn btn-danger btn-lg btn-block';
});

new StartedPage(() => {
  console.log('This Page has been loaded success');
});