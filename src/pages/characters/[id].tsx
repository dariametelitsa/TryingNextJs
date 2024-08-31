import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { getLayout } from "@/Layout/Layout";
import { CharacterCard } from "@/components/characterCars/CharacterCard";
import useCharacter from "@/assets/hooks/useCharacter";

function Character() {

    const character = useCharacter();
    return (
        <>
            <HeadMeta title={'Character'} description={'Character'}/>
            {character && <CharacterCard key={character.id} character={character}/>}
        </>

    );
}

Character.getLayout = getLayout
export default Character