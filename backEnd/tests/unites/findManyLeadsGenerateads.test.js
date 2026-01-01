jest.mock('../../src/prismaClient.js', () => ({
  prisma: {
    dataOfConsults: {
      findMany: jest.fn().mockResolvedValue([
        { id: 1, name: 'McDonald' },
        { id: 2, name: 'Burger King' },
      ]),
    },
  },
}));

import { findManyLeadsGenerateads } from "../../src/controller/findManyLeadsGenerateads.controller.js";

test('testar se todos os dados armazenados são enviados como resposta', async () => {
  const req = {}
   // simulando req e res
  const res = {
    status: jest.fn().mockReturnThis(), // são matchers?
    send: jest.fn(),
  }

  await findManyLeadsGenerateads(req, res)

  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.send).toHaveBeenCalledWith([
    { id: 1, name: 'McDonald' },
    { id: 2, name: 'Burger King'},
  ])
})


// pra Estudar é exelennte focar nos matchers : mockReturnThis() / fn() / toHaveBeenCalledWith / mockResolvedValue
