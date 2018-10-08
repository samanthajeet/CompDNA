/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/

function DNAStrand(dna){
  const compDNA = '';
  const strand = dna;
  for (let i = 0; i < strand.legnth; i++) {
    if (strand[i] === A)  {
      compDNA += 'T';
    } else if (strand[i] === T) {
      compDNA += 'A';
    } else if (strand[i] === C) {
      compDNA += 'G';
    } else {
      compDNA += 'C';
    }
  }
  return compDNA;
}
