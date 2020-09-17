//TODO://Create object that is holding each question and answer

//TODO://Create an Array holding each object


var question = []
for (var i=0; i<40; i++) {
    question[i] = {
        Question: "Question" + i,
        AnswerA: "Answer A",
        AnswerB: "Answer B",
        AnswerC: "Answer C",
        AnswerD: "Answer D",
    };
}
console.log(question);
console.log("-----------------")
//TODO:Create unique questions and answers
question[0].Question = "2 + 2 = x";
question[0].AnswerA = "4";
question[0].AnswerB = "8";
question[0].AnswerC = "22";
question[0].AnswerD = "0";
//
question[1].Question = "24 + 32 = x";
question[1].AnswerA = "56";
question[1].AnswerB = "64";
question[1].AnswerC = "78";
question[1].AnswerD = "45";
//
question[2].Question = "6 + 58 = x";
question[2].AnswerA = "64";
question[2].AnswerB = "73";
question[2].AnswerC = "52";
question[2].AnswerD = "63";
//
question[3].Question = "136 + 398 = x";
question[3].AnswerA = "434";
question[3].AnswerB = "467";
question[3].AnswerC = "424";
question[3].AnswerD = "534";
//
question[4].Question = "4 + 3 + 8 * 3 = x";
question[4].AnswerA = "31";
question[4].AnswerB = "60";
question[4].AnswerC = "37";
question[4].AnswerD = "40";
//
question[5].Question = "5 * 5  = x";
question[5].AnswerA = "25";
question[5].AnswerB = "55";
question[5].AnswerC = "10";
question[5].AnswerD = "125";
//
question[6].Question = "17 - 6 = ?";
question[6].AnswerA = "11";
question[6].AnswerB = "10";
question[6].AnswerC = "23";
question[6].AnswerD = "6";
//
question[7].Question = "32 / 4 = ?";
question[7].AnswerA = "8";
question[7].AnswerB = "28";
question[7].AnswerC = "6";
question[7].AnswerD = "36";
//
question[8].Question = "15^12 = ?";
question[8].AnswerA = "129,746,337,890,625";
question[8].AnswerB = "128,435,234,523,234";
question[8].AnswerC = "127,234,416,786,937";
question[8].AnswerD = "130,654,820,430,102";
//
question[9].Question = "'&radic;'144 = ?";
question[9].AnswerA = "12";
question[9].AnswerB = "10";
question[9].AnswerC = "14";
question[9].AnswerD = "122";
//
question[10].Question = "5 * 5 + 5 / 5 = ?";
question[10].AnswerA = "26";
question[10].AnswerB = "10";
question[10].AnswerC = "6";
question[10].AnswerD = "20";
//
question[11].Question = "7 * 2 = ?";
question[11].AnswerA = "14";
question[11].AnswerB = "9";
question[11].AnswerC = "34";
question[11].AnswerD = "72";
//
question[12].Question = "5 - 4 = ?";
question[12].AnswerA = "1";
question[12].AnswerB = "9";
question[12].AnswerC = "-1";
question[12].AnswerD = "20";
//
question[13].Question = "19 - (3-4) = ?";
question[13].AnswerA = "20";
question[13].AnswerB = "12";
question[13].AnswerC = "18";
question[13].AnswerD = "26";
//
question[14].Question = "6 - (6-20) = ?";
question[14].AnswerA = "20";
question[14].AnswerB = "-20";
question[14].AnswerC = "14";
question[14].AnswerD = "-8";
//
question[15].Question = "7 - (19 + 10) = ?";
question[15].AnswerA = "-22";
question[15].AnswerB = "22";
question[15].AnswerC = "-2";
question[15].AnswerD = "70";
//
question[16].Question = "4 / (4 - 6) = ?";
question[16].AnswerA = "-2";
question[16].AnswerB = "2";
question[16].AnswerC = "-5";
question[16].AnswerD = "8";
//
question[17].Question = "9 - (21 - 25) = ?";
question[17].AnswerA = "13";
question[17].AnswerB = "-37";
question[17].AnswerC = "37";
question[17].AnswerD = "15";
//
question[18].Question = "10 * (6 + 9) = ?";
question[18].AnswerA = "150";
question[18].AnswerB = "69";
question[18].AnswerC = "96";
question[18].AnswerD = "100";
//
question[19].Question = "23 - (11 - 4) = ?";
question[19].AnswerA = "16";
question[19].AnswerB = "8";
question[19].AnswerC = "16";
question[19].AnswerD = "4";
//
question[20].Question = "8 - (12 + 11) = ?";
question[20].AnswerA = "-15";
question[20].AnswerB = "15";
question[20].AnswerC = "31";
question[20].AnswerD = "5";
//
question[21].Question = "Take the derivate of 4x^2 = ?";
question[21].AnswerA = "8x";
question[21].AnswerB = "x^2";
question[21].AnswerC = "24X^2";
question[21].AnswerD = "x^8";
//
question[22].Question = "Take the derivate of -6x^5 = ?";
question[22].AnswerA = "-30x^4";
question[22].AnswerB = "30X^4";
question[22].AnswerC = "-30x^5";
question[22].AnswerD = "-56x^5";
//
question[23].Question = "Take the derivative of 4x^6 = ?";
question[23].AnswerA = "24x^5";
question[23].AnswerB = "4x^6 + 6x^4";
question[23].AnswerC = "24x^4";
question[23].AnswerD = "6x^4";
//
question[24].Question = "Take the derivative of -4x^4 = ?";
question[24].AnswerA = "-16x^3";
question[24].AnswerB = "-44x^3";
question[24].AnswerC = "12x^4";
question[24].AnswerD = "-4x^3";
//
question[25].Question = "Take the derivative of -12x^3 + x^2 = ?";
question[25].AnswerA = "-36x^2 + 2x";
question[25].AnswerB = "12x^4 + x^4";
question[25].AnswerC = "4x^5 + 2x^3";
question[25].AnswerD = "-12x^3 + x^2 + 3x + 2x";
//
question[26].Question = "Take the derivative of 4x^5 - 5x^4 + 3x^3 = ?";
question[26].AnswerA = "20x^4 - 20x^3 + 9x^2";
question[26].AnswerB = "20x^5 - 4x^4 + 3X^4";
question[26].AnswerC = "4x^4 + 5x^4 + 3x^2";
question[26].AnswerD = "7x^4 - 4x^3 -x";
//
question[27].Question = "Take the derivative of -2x^7 = ?";
question[27].AnswerA = "-14x^6";
question[27].AnswerB = "-5";
question[27].AnswerC = "";
question[27].AnswerD = "";
//
question[28].Question = "Take the derivative of 3x^4 = ?";
question[28].AnswerA = "12x^3";
question[28].AnswerB = "";
question[28].AnswerC = "";
question[28].AnswerD = "";
//
question[29].Question = "Take the derivative of -8x^6 = ?";
question[29].AnswerA = "-48x^5";
question[29].AnswerB = "";
question[29].AnswerC = "";
question[29].AnswerD = "";
//
question[30].Question = "Take the derivative of 5x^2 = ?";
question[30].AnswerA = "10x";
question[30].AnswerB = "";
question[30].AnswerC = "";
question[30].AnswerD = "";
//
question[31].Question = "3 * 7 = ?";
question[31].AnswerA = "21";
question[31].AnswerB = "";
question[31].AnswerC = "";
question[31].AnswerD = "";
//
question[32].Question = "2x - 7 = 29";
question[32].AnswerA = "6";
question[32].AnswerB = "";
question[32].AnswerC = "";
question[32].AnswerD = "";
//
question[33].Question = "4x + 5 = 37";
question[33].AnswerA = "8";
question[33].AnswerB = "";
question[33].AnswerC = "";
question[33].AnswerD = "";
//
question[34].Question = "3x = 2x + 8";
question[34].AnswerA = "8";
question[34].AnswerB = "";
question[34].AnswerC = "";
question[34].AnswerD = "";
//
question[35].Question = "5x - 4 = 3x + 10";
question[35].AnswerA = "7";
question[35].AnswerB = "";
question[35].AnswerC = "";
question[35].AnswerD = "";
//
question[37].Question = "4x = 36 - 2x";
question[37].AnswerA = "6";
question[37].AnswerB = "";
question[37].AnswerC = "";
question[37].AnswerD = "";
//
question[38].Question = "1 + 1 = ?";
question[38].AnswerA = "2";
question[38].AnswerB = "11";
question[38].AnswerC = "";
question[38].AnswerD = "";
//
question[39].Question = "Take the derivative of 3x^5 = ?";
question[39].AnswerA = "15x^4";
question[39].AnswerB = "";
question[39].AnswerC = "";
question[39].AnswerD = "";
//
question[40].Question = "Take the derivative of 7x^7= ?";
question[40].AnswerA = "49x^6";
question[40].AnswerB = "";
question[40].AnswerC = "";
question[40].AnswerD = "";
//




console.log(question)