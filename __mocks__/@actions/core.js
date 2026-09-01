export const getInput = (name) => process.env[`INPUT_${name.toUpperCase().replace(/ /g, '_')}`] || '';
export const info = () => {};
export const error = () => {};
export const setFailed = () => {};
