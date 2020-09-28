// require('../dist/index');
require('./index');

const kitchen = {
  version: '1',
  floor: {
    material: 'wood',
    color: 'walnut',
  },
  drawers: [
    {
      contents: [
        { type: 'fork', count: 2 },
        { type: 'spoon', count: 4 },
      ],
    },
  ],
};

test('the kitchen has walnut colored floor', () => {
  expect(kitchen).toMatchPartial({
    version: '1',
    floor: { color: 'walnut' },
  });
});

test('the kitchen has a drawer that contains spoons', () => {
  expect(kitchen).toMatchPartial({
    drawers: [{ contents: [{ type: 'spoon' }] }],
  });
});

test('there is a drawer with forks', () => {
  expect(kitchen.drawers).toMatchPartial([
    {
      contents: [{ type: 'fork' }],
    },
  ]);
});

test('the kitchen has a drawer that contains 2 forks', () => {
  expect(kitchen).toMatchPartial({
    drawers: [{ contents: [{ type: 'fork', count: 2 }] }],
  });
});

test('the kitchen has a drawer that contains forks and spoons', () => {
  expect(kitchen).toMatchPartial({
    drawers: [{ contents: [{ type: 'fork' }, { type: 'spoon' }] }],
  });
});
