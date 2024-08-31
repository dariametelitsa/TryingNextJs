import { Inter } from "next/font/google";
import Image from "next/image";
import useCharacters from "assets/hooks/useCharacters";
import { CharacterCard } from "@/components/characterCars/CharacterCard";
const inter = Inter({ subsets: ["latin"] });

export default function Character() {

    const characters = useCharacters();
    return (
        <main>
            {characters && characters.map(character => (
                <CharacterCard key={character.id} character={character}/>
            ))}
        </main>
    );
}

