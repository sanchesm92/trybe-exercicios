const service = require('./service')

describe('testes parte 1', () => {
  test('retornar numero aleatorio', () => {
    const number = service.generateRandomNumber();
    const verify = (number < 100 && number > 0);
    expect(verify).toBe(true);
    service.generateRandomNumber = jest.fn().mockReturnValue(10);
    const newNumber = service.generateRandomNumber();
    expect(newNumber).toBe(10);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  })
  
  test('exercicio 2', () => {
    service.generateRandomNumber = jest.fn();
    service.generateRandomNumber.mockImplementation((a, b) => a / b);
    expect(service.generateRandomNumber(10, 5)).toBe(2);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 5);
  })

  test('exercicio 3', () => {
    service.generateRandomNumber = jest.fn();
    service.generateRandomNumber.mockImplementation((a, b, c) => a * b * c);
    expect(service.generateRandomNumber(4, 2, 1)).toBe(8);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(4, 2, 1);
    service.generateRandomNumber.mockImplementation((a) => a * 2);
    expect(service.generateRandomNumber(4)).toBe(8);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(4);

  })

  // generateRandomNumber, transformUpperCase, firstCharacter, concatString 
  test('exercicio 4', () => {
    const transform = jest.spyOn(service, 'transformUpperCase');
    transform.mockImplementation((a) => a.toLowerCase());
    expect(service.transformUpperCase('SeCrEt ArMs')).toBe('secret arms')
    service.firstCharacter = jest.fn().mockImplementation((a) => a[a.length -1]);
    expect(service.firstCharacter('Scandall')).toBe('l');
    service.concatString = jest.fn().mockImplementation((a, b, c) => `${a} ${b} ${c}`);
    expect(service.concatString('spirit power' ,'shikai', 'bankai')).toBe('spirit power shikai bankai');
    service.transformUpperCase.mockRestore();
    expect(service.transformUpperCase('care')).toBe('CARE');
  })

  test('exercicio 5', async () => {
    const data = {
      'message': 'url.com.br',
      'status': 'success',
    }
    service.dogs = jest.fn();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    service.dogs.mockResolvedValue('request sucess');
    service.dogs();
    expect(service.dogs).toHaveBeenCalled();
    await expect(service.dogs()).resolves.toEqual('request sucess')

    service.dogs.mockRejectedValue('request failed');
    await expect(service.dogs()).rejects.toEqual('request failed')

  })

})