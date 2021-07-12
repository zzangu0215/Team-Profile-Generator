const Employee = require('../lib/Employee.js');
const employee = new Employee('Jun', 'tajo0215', 'tajo0215@gmail.com');

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
