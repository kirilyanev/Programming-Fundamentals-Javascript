function turntable(band,album,song) {
    let bandName = band;
    let albumName = album;
    let songName = song;
    const oneRotationInSeconds = 2.5;
    let songDuration = (Number(albumName.length) * Number(bandName.length)) * Number(songName.length) / 2;
    let plateRotation = Math.ceil(songDuration / oneRotationInSeconds);
    
    console.log(`The plate was rotated ${plateRotation} times.`)
}
turntable('Rammstein', 'Sehnsucht', 'Engel');