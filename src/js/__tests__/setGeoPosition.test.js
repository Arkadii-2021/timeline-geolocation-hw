import { checkGeoPos } from '../setGeoPosition';
const el = document.createElement('main');
el.classList.add('timeline');
el.setAttribute('data-id', 'geo-coord');
  
const container = document.createElement('div');
container.classList.add('login');
    
const confirmForm = document.createElement('form');
confirmForm.classList.add('login_form');
    
const nickNameTitle = document.createElement('h3');
nickNameTitle.textContent = 'Что-то пошло не так';
  
const nickNameDescription = document.createElement('p');
nickNameDescription.textContent = 'К сожалениею, определить ваше местоположение нам не удалось. Пожалуйста, дайте разрешение на использование геолокации или введите координаты вручную.';
    
const loginContainer = document.createElement('div');
loginContainer.classList.add('login_container');
    
const loginInput = document.createElement('input');
loginInput.classList.add('login_input');
loginInput.setAttribute('placeholder', '55.0207488, 82.9652992');
    
const ok = document.createElement('button');
ok.setAttribute('type', 'submit');
ok.textContent = 'ОК';
  
const cancel = document.createElement('button');
cancel.classList.add('cancel');
cancel.style = 'margin-left: 20px;';
cancel.textContent = 'Отмена';
document.body.append(el);
  
el.append(container);
container.append(confirmForm);
confirmForm.append(nickNameTitle, nickNameDescription, loginContainer, ok, cancel);
loginContainer.append(loginInput);

const form = el.querySelector('.login_form');

test('корректный ввод кординат', () => {
  expect(checkGeoPos(ok, form, container, '51.50851, 0.12572')).toBe(true);
});

test('ввод координат с отсутствием пробелов', () => {
  expect(checkGeoPos(ok, form, container, '51.50851,0.12572')).toBe(false);
});

test('ввод координат в квадратных скобках', () => {
  expect(checkGeoPos(ok, form, container, '[51.50851, 0.12572]')).toBe(false);
});

