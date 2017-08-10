//Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' },
    ]
};
//Another Example
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:22' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15' },
    ]
};

var albumRage = {
    title: 'Evil Empire',
    artist: 'Rage Against the Machine',
    label: 'Epic',
    year: '1996',
    albumArtUrl: 'assets/images/album_covers/rage.png',
    songs: [
        { title: 'People of the Sun', duration: '2:30' },
        { title: 'Bulls on Parade', duration: '3:49' },
        { title: 'Vietnow', duration: '4:39' },
        { title: 'Revolver', duration: '5:30' },
        { title: 'Snakecharmer', duration: '3:56' },
        { title: 'Tire Me', duration: '3:00' },
        { title: 'Down Rodeo', duration: '5:20' },
        { title: 'Without a Face', duration: '3:36' },
        { title: 'Wind Below', duration: '5:50' },
        { title: 'Roll Right', duration: '4:22' },
        { title: 'Year of the Bommerang', duration: '4:02' },

    ]
};

var creatSongRow = function(songNumber, songName, songLength){
    var template =
        '<tr class="album-view-song-item">'
    +   '   <td class="song-item-number">' + songNumber + '</td>'
    +   '   <td class="song-item-title">' + songName + '</td>'
    +   '   <td class="song-item-duration">' + songLength + '</td>'
    +   '</tr>'
    ;

    return template;
};

var setCurrentAlbum = function(album) {
    //#1
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    //#2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    //#3
    albumSongList.innerHTML = '';
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += creatSongRow(i + 1, album.songs[i].title, album.songs[i].duration)
    }
};
var albumArray = [albumPicasso, albumMarconi, albumRage];

window.onload = function() {
    var i = 0
    setCurrentAlbum(albumArray[i]);
    document.getElementsByClassName('album-cover-art')[0].addEventListener("click", function () {
        i++;
        if (i >= albumArray.length)
            i = 0;
        setCurrentAlbum(albumArray[i]);
    });
};
