

export const prismaMock = () => {
 return {
  dataOfConsults: {
    findMany:
   jest.fn().mockResolvedValue([
      {
         id: 1 , name: 'McDonald',
         id: 2 , name: 'Burguer King'
      }
   ])
  }
}
 }
  

