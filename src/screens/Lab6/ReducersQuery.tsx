import React, { useState } from 'react';
import { ActivityIndicator, Image, Text } from 'react-native';
import { FONTFAMILY } from '../../../assets/fonts';
import COLORS from '../../assets/colors/Colors';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, TextComponent } from '../../components';
import { useLazyGetPokemonByNameQuery } from '../../store/pokemon-api-slice';

const ReducersQuery = () => {
    const [namePokemon, setNamePokemon] = useState<string>('bulbasaur');
    const [isTextShow, setIsTextShow] = useState<boolean>(false);
    const [pokemonData, setPokemonData] = useState<any>(null); // Note: You might want to create a type/interface for Pokemon data

    const [getPokemonByName, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

    const handleClick = async () => {
        setIsTextShow(true);
        if (namePokemon) {
            try {
                const result = await getPokemonByName(namePokemon);
                setPokemonData(result.data);
                console.log(result.data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }

    return (
        <ContainerComponent styles={{ alignItems: 'center', padding: 20 }}>
            <InputComponent placeholder={'Enter your pokemon'} value={namePokemon} onChange={setNamePokemon} />
            {isLoading ? (
                <ActivityIndicator size={'large'} />
            ) : (
                <>
                    {isTextShow && pokemonData && pokemonData.species && (
                        <SectionComponent styles={{ alignItems: 'center' }}>
                            <RowComponent>
                                <TextComponent
                                    text='Name Pokemon: '
                                    font={FONTFAMILY.poppins_bold}
                                    size={18} />
                                <TextComponent
                                    text={pokemonData.species.name}
                                    color={COLORS.RED}
                                    size={18} />
                            </RowComponent>
                            <Image
                                style={{
                                    width: 200,
                                    height: 200
                                }}
                                source={{ uri: pokemonData.sprites.front_shiny }}
                            />
                            <TextComponent text={JSON.stringify(pokemonData.abilities)} size={10} color={COLORS.HEX_LIGHT_GREY}/>
                      
                        </SectionComponent>
                    )}
                </>
            )}
            <SectionComponent>
                <ButtonComponent
                    text='Click me!'
                    onPress={handleClick}
                    type='orange'
                    styles={{ padding: 10 }} />
            </SectionComponent>
        </ContainerComponent>

    );
}

export default ReducersQuery;


// name:"ivysaur"
// url:"https://pokeapi.co/api/v2/pokemon/2/"
// name:"venusaur"
// url:"https://pokeapi.co/api/v2/pokemon/3/"
// name:"charmander"
// url:"https://pokeapi.co/api/v2/pokemon/4/"
// name:"charmeleon"
// url:"https://pokeapi.co/api/v2/pokemon/5/"
// name:"charizard"
// url:"https://pokeapi.co/api/v2/pokemon/6/"
// name:"squirtle"
// url:"https://pokeapi.co/api/v2/pokemon/7/"
// name:"wartortle"