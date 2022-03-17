/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
For example: "GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. 
All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
My though process 
 
   //P => they gave me a seqence of DNa, they want the same sequence returned but in rna 
   // R => turn dna with T replaced with U 
   //R=> GGTAC = GGUAC
   // P => I need to go through the dna sequence and replaced each T with U, 
   // my mind went to splitting the sting up, and then looping thorugh it
   // passing in a values to get an rna value kk
*/

function DNAtoRNA(dna) {
 
    return dna.split('').map(function(rna){
      return rna.replace("T", "U")
    }).join("")
   }
   
   

   function DNAtoRNA(dna) {
       return dna.replace(/T/g, "U")
   }