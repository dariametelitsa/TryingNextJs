// @flow
import * as React from 'react';
import Image from "next/image";
import { Character } from "@/assets/hooks/useCharacters";
import styles from './CharacterCard.module.scss'

type Props = {
    character: Character
};
export const CharacterCard = ({character}: Props) => {
    return (
        <div className={styles.card}>
            <div>{character.name}</div>
            <Image src={character.image}
                   alt={'Picture of ' + character.name}
                   height={300}
                   width={300}/>
        </div>
    );
};