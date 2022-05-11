// From https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs
function importAll(r) {
    return r.keys().map(r);
  }
  
  const imageFiles = importAll(
    require.context('./assets/', false, /\.(png|jpe?g|svg)$/)
  );
  
  // These need to be in file system order
  // Right now the jpg is coming after the pngs not sure why
  const imageNames = [
    'hills1',
    'hills2',
    'hills3',
    'hills4',
    'hills5',
    'hills6',
    'bird1',
    'bird2',
    'bird3',
    'mountain1',
    'mountain2',
    'mountain3',
    'stork1',
    'stork2',
    'stork3',
  ];
  
  let allImages = {};

  for (let [index, image] of imageNames.entries()) {
    console.log({index}, {image})
    console.log(imageFiles[index])
    allImages[image] = imageFiles[index]
  }

export default allImages