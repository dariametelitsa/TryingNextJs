import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Nullable } from "@/assets/types";
// import * as process from "node:process";

const useCharacters = (): Nullable<Array<Character>>  => {
    const [characters, setCharacters] = useState<Nullable<Array<Character>>>(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`)
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