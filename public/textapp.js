const array = [
  {
    word: "baby",
    phonetic: "/ˈbeɪbi/",
    phonetics: [
      {
        text: "/ˈbeɪbi/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/baby-uk.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9014270",
        license: {
          name: "BY 3.0 US",
          url: "https://creativecommons.org/licenses/by/3.0/us",
        },
      },
      {
        text: "/ˈbeɪbi/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/baby-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=837148",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "A very young human, particularly from birth to a couple of years old or until walking is fully mastered.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "Any very young animal, especially a vertebrate; many species have specific names for their babies, such as kittens for the babies of cats, puppies for the babies of dogs, and chickens for the babies of birds. See for more.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "Unborn young; a fetus.",
            synonyms: [],
            antonyms: [],
            example: "When is your baby due?",
          },
          {
            definition: "A person who is immature, infantile or feeble.",
            synonyms: [],
            antonyms: [],
            example: "Stand up for yourself – don't be such a baby!",
          },
          {
            definition: "A person who is new to or inexperienced in something.",
            synonyms: [],
            antonyms: [],
            example:
              "I only qualified as an architect this summer, so I'm still a baby.",
          },
          {
            definition:
              "The lastborn of a family; the youngest sibling, irrespective of age.",
            synonyms: [],
            antonyms: [],
            example: "Adam is the baby of the family.",
          },
          {
            definition:
              "A term of endearment used to refer to or address one's girlfriend, boyfriend or spouse.",
            synonyms: [],
            antonyms: [],
            example: "Baby, don't cry.",
          },
          {
            definition:
              "A form of address to a man or a woman considered to be attractive.",
            synonyms: [],
            antonyms: [],
            example: "Hey baby, what are you doing later?",
          },
          {
            definition: "A pet project or responsibility.",
            synonyms: [],
            antonyms: [],
            example: "You need to talk to John about that – it's his baby.",
          },
          {
            definition: "An affectionate term for anything.",
            synonyms: [],
            antonyms: [],
            example:
              "See my new car here? I can't wait to take this baby for a drive.",
          },
          {
            definition: "A small image of an infant; a doll.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: ["big baby", "love", "babbie", "babby", "babe", "infant"],
        antonyms: [],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To coddle; to pamper somebody like an infant.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "To tend (something) with care; to be overly attentive to (something), fuss over.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          {
            definition:
              "Of a child: very young; of the age when he or she would be termed a baby or infant.",
            synonyms: [],
            antonyms: [],
            example: "a baby boy",
          },
          {
            definition: "Of an animal: young.",
            synonyms: [],
            antonyms: [],
            example: "a baby elephant",
          },
          {
            definition: "Intended for babies.",
            synonyms: [],
            antonyms: [],
            example: "baby clothes",
          },
          {
            definition:
              "(of vegetables, etc.) Picked when small and immature (as in baby corn, baby potatoes).",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: ["little"],
        antonyms: [],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/baby"],
  },
];


function extractMeaningsData(meanings) {
  return meanings.map((meaning) => {
    const partOfSpeech = meaning.partOfSpeech;
    const definitions = meaning.definitions.map((definition) => definition.definition);
    const synonyms = meaning.synonyms;

    return {
      partOfSpeech,
      definitions,
      synonyms,
    };
  });
}


const smallArrayMeanings = extractMeaningsData(array[0].meanings);

console.log(smallArrayMeanings);