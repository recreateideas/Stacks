const saveToFile = (event, args) => {
    const { path, content } = args;
    console.log(path, content);
};

module.exports = {
    saveToFile,
};
