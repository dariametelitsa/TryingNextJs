import useCharacters from "@/assets/hooks/useCharacters";
import { CharacterCard } from "@/components/characterCars/CharacterCard";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import Layout from "@/Layout/Layout";
import Link from "next/link";

export default function Character() {

    const characters = useCharacters();
    return (
        <>
            <HeadMeta title={'Character page'} description={'Character page'}/>
            <Layout>
                {characters && characters.map(character => (
                    <Link key={character.id} href={`/characters/${character.id}`}>
                        <CharacterCard character={character}/>
                    </Link>
                ))}
            </Layout>
        </>

    );
}

