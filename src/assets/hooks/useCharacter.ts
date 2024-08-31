import { useEffect, useState } from 'react';
import axios from "axios";
import { Nullable } from "@/assets/types";
import { Character } from "@/assets/hooks/useCharacters";
import { useRouter } from "next/router";

const useCharacter = (): Nullable<Character>  => {
    const [character, setCharacter] = useState<Nullable<Character>>(null);

    const router = useRouter();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${router.query.id}`)
            .then(res => setCharacter(res.data));
    }, [router]);
    return character;
};



export default useCharacter;