import { Inter } from "next/font/google";
import useCharacters from "assets/hooks/useCharacters";
import { CharacterCard } from "@/components/characterCars/CharacterCard";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Character() {

    const characters = useCharacters();
    return (
        <>
            <HeadMeta title={'Character page'} description={'Character page'}/>
            <main>
                <Navbar/>
                {characters && characters.map(character => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </main>
        </>

    );
}

