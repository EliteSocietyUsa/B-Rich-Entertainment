$(document).ready(function(){

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title:"Counting Them Stacks",
            artist: "That Nigga feat. Marlow Whitfield",
            mp3:"music/CountinThemStacks.mp3",

        },
        {
            title:"Knock My Hustle",
            artist: "211 WallStreet",
            mp3:"music/KnockMyHustle.mp3",
        },
        {
            title:"Surf Season",
            artist: "211 WallStreet",
            mp3:"music/SmurfSeason.mp3",
        },
        {
            title:"On Tv",
            artist: "Nino Brown",
            mp3:"music/OnTV.mp3",
        },
        {
            title:"Weed Loud",
            artist: "That Nigga",
            mp3:"music/Loud.mp3",
        },
        {
            title:"Fuck Niggaz",
            artist: "That Nigga",
            mp3:"music/FuckNigga.mp3",
        },
        {
            title:"CrunchTime",
            artist: "That Nigga feat. Marlow Whitfield",
            mp3:"music/CrunchTime.mp3",
        },
    ], {
        swfPath: "../js",
        supplied: "mp3, mp4",
        wmode: "window"
    });

    $("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
});