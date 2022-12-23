import { matchGeoPos } from '../setGeoPosition';

const coordlist = [
  ['корректный ввод кординат', '51.50851, 0.12572', true],
  ['ввод координат с отсутствием пробелов', '51.50851,0.12572', false],
  ['ввод координат в квадратных скобках', '[51.50851, 0.12572]', false],
];

const handler = test.each(coordlist);
handler('test coords, value: %i, status: %s', (_, coord, isValid) => {
  expect(matchGeoPos(coord)).toEqual(isValid);
});
