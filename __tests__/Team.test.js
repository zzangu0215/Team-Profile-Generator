const Employee = require('../lib/Employee.js');
const employee = new Employee('Jun', 'tajo0215', 'tajo0215@gmail.com');

const Manager = require('../lib/Manager.js');
const manager = new Manager('Jun', 'tajo0215', 'tajo0215@gmail.com', 1234);

const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Jun', 'tajo0215', 'tajo0215@gmail.com', 'zzangu0215');

const Intern = require('../lib/Intern.js');
const intern = new Intern('Jun', 'tajo0215', 'tajo0215@gmail.com', 'Torrance Highschool');

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


describe('Engineer', () => {
  describe('constructor', () => {
    it('should create an Engineer object', () => {
      expect(engineer.name).toEqual('Jun');
      expect(engineer.id).toEqual('tajo0215');
      expect(engineer.email).toEqual('tajo0215@gmail.com');
      expect(engineer.github).toEqual('zzangu0215');
    });
  });

  describe('getGithub', () => {
    it('should get github information', () => {
      expect(engineer.getGithub()).toEqual('zzangu0215');
    });
  });

  describe('getRole', () => {
    it('should get Engineer role', () => {
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});

describe('Intern', () => {
  describe('constructor', () => {
    it('should create an Intern object', () => {
      expect(intern.name).toEqual('Jun');
      expect(intern.id).toEqual('tajo0215');
      expect(intern.email).toEqual('tajo0215@gmail.com');
      expect(intern.school).toEqual('Torrance Highschool');
    });
  });

  describe('getSchool', () => {
    it('should get school information', () => {
      expect(intern.getSchool()).toEqual('Torrance Highschool');
    });
  });

  describe('getRole', () => {
    it('should get Manager role', () => {
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});