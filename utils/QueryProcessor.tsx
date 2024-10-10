export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "I do not have an Andrew ID, but I am a bot created by a student."
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return "Rohan";
  }

  const addMatch2 = query.match(/What is (\d+) plus (\d+) plus (\d+)/);
  if (addMatch2) {
    const x: number = parseInt(addMatch2[1]);
    const y: number = parseInt(addMatch2[2]);
    const z: number = parseInt(addMatch2[3]);
    var sum = x + y + z;
    return (sum).toString();
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }

  return "";
}
