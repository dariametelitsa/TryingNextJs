import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import Layout from "@/Layout/Layout";
import { CharacterCard } from "@/components/characterCars/CharacterCard";
import useCharacter from "@/assets/hooks/useCharacter";

export default function Character() {

    const character = useCharacter();
    return (
        <>
            <HeadMeta title={'Character'} description={'Character'}/>
            <Layout>
                {character && <CharacterCard key={character.id} character={character}/>}
            </Layout>
        </>

    );
}