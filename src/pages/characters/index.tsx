import useCharacters from "@/assets/hooks/useCharacters";
import { CharacterCard } from "@/components/characterCars/CharacterCard";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import Link from "next/link";
import { getLayout } from "@/Layout/Layout";

function Character() {

    const characters = useCharacters();
    return (
        <>
            <HeadMeta title={'Character page'} description={'Character page'}/>
                {characters && characters.map(character => (
                    <Link key={character.id} href={`/characters/${character.id}`}>
                        <CharacterCard character={character}/>
                    </Link>
                ))}
        </>
    );
}

Character.getLayout = getLayout
export default Character
