module.exports = function (inputPath, needsSlash) {
  var hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return inputPath + '/';
  } else {
    return inputPath;
  }
};