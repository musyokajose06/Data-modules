require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: new Date().toString('M/d/yyyy')
  };

  for (const userArray of args) {
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};