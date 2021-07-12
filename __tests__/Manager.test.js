const Manager = require('../lib/Manager.js');
const manager = new Manager('Jun', 'tajo0215', 'tajo0215@gmail.com', 1234);

describe('Manager', () => {
  describe('constructor', () => {
    it('should create an Manager object', () => {
      expect(manager.name).toEqual('Jun');
      expect(manager.id).toEqual('tajo0215');
      expect(manager.email).toEqual('tajo0215@gmail.com');
      expect(manager.officeNumber).toEqual(1234);
    });
  });

  describe('getOfficeNumber', () => {
    it('should get officeNumber property', () => {
      expect(manager.getOfficeNumber()).toEqual(1234);
    });
  });

  describe('getRole', () => {
    it('should get Manager role', () => {
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});