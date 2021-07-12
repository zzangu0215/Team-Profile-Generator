const Employee = require('../lib/Employee.js');
const employee = new Employee('Jun', 'tajo0215', 'tajo0215@gmail.com');

const Manager = require('../lib/Manager.js');
const manager = new Manager('Jun', 'tajo0215', 'tajo0215@gmail.com', 1234);

describe('Employee', () => {
  describe('constructor', () => {
    it('should create an Employee object', () => {
      expect(employee.name).toEqual('Jun');
      expect(employee.id).toEqual('tajo0215');
      expect(employee.email).toEqual('tajo0215@gmail.com');
    });
  });

  describe('getName', () => {
    it('should get employee name', () => {
      expect(employee.getName()).toEqual('Jun');
    });
  });

  describe('getId', () => {
    it('should get employee id', () => {
      expect(employee.getId()).toEqual('tajo0215');
    });
  });

  describe('getEmail', () => {
    it('should get employee email', () => {
      expect(employee.getEmail()).toEqual('tajo0215@gmail.com');
    });
  });

  describe('getRole', () => {
    it('should get employee role', () => {
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});


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