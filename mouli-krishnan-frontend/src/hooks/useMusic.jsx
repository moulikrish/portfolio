import { useEffect, useRef, useState } from "react";

import englishSong from "../assets/songs/believer.mp3";
import tamilSong from "../assets/songs/karuppa.mp3";

export default function useMusic(language){

    const audioRef = useRef(null);

    const [playing,setPlaying] = useState(false);

    useEffect(()=>{

        const song =
            language==="ta"
            ? tamilSong
            : englishSong;

        if(audioRef.current){
            audioRef.current.pause();
        }

        audioRef.current = new Audio(song);

        audioRef.current.onended=()=>{

            setPlaying(false);

        };

    },[language]);

    const toggleMusic=()=>{

        // setShowIntro(false);

        if(audioRef.current.paused){

            audioRef.current.play();

            setPlaying(true);

        }else{

            audioRef.current.pause();

            setPlaying(false);

        }

    };

    return{
        playing,
        toggleMusic
    };

}