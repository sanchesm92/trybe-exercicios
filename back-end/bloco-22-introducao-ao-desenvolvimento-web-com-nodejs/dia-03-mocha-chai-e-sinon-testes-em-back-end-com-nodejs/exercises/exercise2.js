const fs = require('fs');
const writeSppecificFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, content);
    return 'ok';
  } catch (err) {
    return null;
  }
}
module.exports = writeSppecificFile