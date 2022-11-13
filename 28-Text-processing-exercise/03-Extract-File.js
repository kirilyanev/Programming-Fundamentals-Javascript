function filePathExtract(path) {
    // First solution:

    // const file = path.split('\\').pop();
    // const fileName = file.split('.');
    // const fileExtention = fileName.pop();

    // console.log(`File name: ${fileName.join('.')}`);
    // console.log(`File extension: ${fileExtention}`);

    // Second solution:
    const dir = path.split('\\');
    const file = dir.pop();
    
    const lastComa = file.lastIndexOf('.');
    const fileName = file.substring(0,lastComa);
    const fileExt = file.substring(lastComa+1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}
filePathExtract('C:\\Internal\\training-internal\\Template.pptx');