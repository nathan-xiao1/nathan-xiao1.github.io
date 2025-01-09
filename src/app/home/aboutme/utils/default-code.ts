import stripIndent from 'strip-indent';

const randomWords = [
  ',',
  '.',
  '@',
  'Australia',
  'GLaDOS',
  'gmail',
  'gordonfreeman',
  'goromajima',
  'hotmail',
  'Japan',
  'jobs',
  'leonkennedy',
  'me',
  'Melbourne',
  'Nanjing',
  'nathanxiao',
  'New',
  'South',
  'Sydney',
  'Tokyo',
  'Wales',
];

const EMAIL = ['jobs', '@', 'nathanxiao', '.', 'me'];
const LOCATION = ['Sydney', ',', 'New', 'South', 'Wales', ',', 'Australia'];

function findIndex<T>(wordsArray: T[], targetWordsArray: T[]): number[] {
  return targetWordsArray.map((target) => wordsArray.indexOf(target));
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // Create a shallow copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap the elements
  }
  return newArray;
}

function formatArray(array: string[], lineSize = 5): string {
  const lines = [];
  for (let i = 0; i < array.length; i += lineSize) {
    lines.push(
      '  ' +
        array
          .slice(i, i + lineSize)
          .map((item) => `"${item}", `)
          .join('')
    );
  }

  return `${lines.join('\n')}`;
}

export function getDefaultScript(): string {
  const shuffledArray = shuffleArray(randomWords);
  const emailIndex = findIndex(shuffledArray, EMAIL);
  const locationIndex = findIndex(shuffledArray, LOCATION);

  const formattedShuffledArray = formatArray(shuffledArray);

  return stripIndent(`
const words = [
${formattedShuffledArray}
];

const emailIndex = [${emailIndex}];
const locationIndex = [${locationIndex}];

function findWord(wordsArray, targetIndex) {
    return targetIndex.map((index) => wordsArray[index]);
}

console.log("aboutMe:", {
    email: findWord(words, emailIndex).join(''),
    location: findWord(words, locationIndex).join(''),
});
  `).trim();
}
