const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Jun', 'tajo0215', 'tajo0215@gmail.com', 'zzangu0215');

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