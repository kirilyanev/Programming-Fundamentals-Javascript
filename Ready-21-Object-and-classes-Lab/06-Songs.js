function songs(input) {
    let numberOfSongs = input.shift();
    let checkTypeList = input.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        printName() {

            if (checkTypeList === 'all') {
                console.log(this.name);
            } else if (this.typeList === checkTypeList) {
                console.log(this.name);
            }
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        let songData = input[i].split('_');

        let list = songData[0];
        let songName = songData[1];
        let songLength = songData[2];

        let song = new Song(list, songName, songLength);

        song.printName();
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);