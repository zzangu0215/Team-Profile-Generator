const Intern = require('../lib/Intern.js');
const intern = new Intern('Jun', 'tajo0215', 'tajo0215@gmail.com', 'Torrance Highschool');

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