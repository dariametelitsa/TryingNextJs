import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Nullable } from "assets/types";

const useCharacters = (): Nullable<Array<Character>>  => {
    const [characters, setCharacters] = useState<Nullable<Array<Character>>>(null);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => setCharacters(res.data.results));
    }, []);
    return characters;
};

export type Character = {
    id: number
    name: string
    image: string
}


export default useCharacters;