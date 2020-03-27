const generateUniqueId = require('../../utils/generateUniqueId');

describe('Generate Unique Id', () => {
    it('Generate Unique Id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});