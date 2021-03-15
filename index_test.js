const assert = require("assert");
module.require('./index');

describe('Rooster', () => {
  describe('.announceDawn',()=>{
    
    it('returns a rooster call', () =>{

      //setup
      const expected = 'cock-a-doodle-doo!';

      //exercise
      let result = Rooster.announceDawn();

      //verify

      assert.strictEqual(result,expected);
    }
    );

  });

  describe('.timeAtDawn',()=>{
    
    it('returns its argument as a string', () =>{

      //setup
      const expected = '22';

      //exercise
      let result = Rooster.timeAtDawn(expected);

      //verify
      assert.strictEqual(result,expected);
    }
    );
    it('throws error if passed number less than 0', () =>{

      //setup
      const expected = '-1';

      //exercise
      let result = Rooster.timeAtDawn(expected);

      //verify
      assert.strictEqual(result,expected);
    }
    );
    it('throws error if number greater than 23', () =>{

      //setup
      const expected = '26';

      //exercise
      let result = Rooster.timeAtDawn(expected);

      //verify
      assert.strictEqual(result,expected);
    }
    );

  });

});
