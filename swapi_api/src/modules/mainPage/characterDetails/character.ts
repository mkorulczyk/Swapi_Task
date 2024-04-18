import IPeople from '../types/people.ts';

const peopleData = (IPeople: any): IPeople => ({
    birth_year: IPeople.birth_year,
    eye_color: IPeople.eye_color,
    gender: IPeople.gender,
    hair_color: IPeople.hair_color,
    height: IPeople.height,
    mass: IPeople.mass,
    name: IPeople.name,
    skin_color: IPeople.skin_color,
    created: IPeople.created,
    edited: IPeople.edited,
    url: IPeople.url
});

export default peopleData