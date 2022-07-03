/// Question --1 ///
// Calculator
// Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.

// Note: You have to complete Calculator. No need to take any input.

const Calculator = (A, B, C) => 
{
 switch (A)
{
    case "+": console.log(B+C);
        break;
    case "-": console.log(B-C);
        break;
    case "*": console.log(B*C);
        break;
    case "/": console.log(B/C);
        break;
}    
};
Calculator( "*", 4, 2);


/// Question --2 ///
// Check whether the condition is fulfilled or not?
// Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.

// Note: You have to complete Check_divisibility. No need to take any input


const Check_divisibility = (N) => {
    
    if(N%6===0 && N%9===0){
      console.log("Divisible by both"); 
    }
    else{
      console.log( "Not Divisible by both");
      
    }
        
    };
    Check_divisibility(36);



/// Question --3 ///
// Eligible Voter
// You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.

// Note: You have to complete isEligible function. No need to take any input.

const isEligible = (a) => {
    if(a>=18 ){
    console.log("Eligible for Voting"); 
    }
    else{
       console.log("Not Eligible for Voting");
    }
    
};
isEligible(19);




/// Question --4 ///
// Find Relation
// PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.The relationships between integers X and Y are as follows:
// If X<Y, it means that X is smaller than Y.
// If X>Y, it means that X is greater than Y.
// If X=Y, it means that X is equal to Y. 
// Note: You have to complete findRelationship function. No need to take any input.


const findRelation = (x,y) => {
    if (x < y) {
    console.log(x + " is smaller than " + y );
} else if (x > y) {
    console.log(x + " is greater than " + y);
} else if (x = y) {
    console.log(x + " is equal to " + y);
} else {
    console.log("folseee!!!!!");
}
};
findRelation(3,11);



/// Question --5 ///
// Find Grades
// Your school has the following grading system based upon the marks(M) obtained by a student:
// If M≤10, the grade will be E.
// If 11≥M≤20, the grade will be D.
// If 21≥M≤30, the grade will be C.
// If 31≥M≤40, the grade will be B.
// If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.

// Note: You have to complete findGrades function. No need to take any input.

 

const findGrades = (a) => {
    switch (true) {
         case (a <= 10):
             console.log("E");
 
        case (a >= 11 && a <= 20):
            console.log("D");
            break;
        case (a >= 21 && a <= 30):
             return ("C");
             break;
 
         case (a >= 31 && a <= 40):
             console.log("B");
             break;
 
         case (a >= 41 && a <= 50):
             console.log("A");
             break;
        default:
            console.log("folseee!!!");
            break;
    }
 };
 findGrades(12);




 /// Question --6 ///
// Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|

// Note: You have to complete getValue function. No need to take any input.


const getValue = (a) => {
    if (a === "P"|| a==="p") {
       console.log("PrepBytes");
   } else if (a === "Z" || a === "z"){
       console.log("Zenith");
   } else if (a === "E" || a === "e") {
       console.log(" Expert Coder");
   } else if (a === "D" || a === "d") {
       console.log("Data Structure");
   }else{
       console.log("folseeee");
   }
};
getValue("p");




/// Question --7 ///
// Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print  −1.

// Note: You have to complete Max_out_of_three. No need to take any input.
// Input Format The input contains three numbers A, B and C.



const Max_out_of_three = (A,B,C) => {
    if(A > B && A > C){
       console.log(A);
   } else if (B > A&& B > C){
    console.log(B); 
   } else if (C > A && C > B) {
       console.log(C);
   }
   else{
       console.log("-1");
   }

};
Max_out_of_three(2,4,5);




/// Question --8 ///
// Second Smallest
// You are given 3 distinct integers X,Y, and Z, and your task is to find and return the second smallest integer among the three provided integers.

// Note: You have to complete findSndSmallest function. No need to take any input.

// Input Format
// The first and the only line of the input contains three space-separated integers X, Y, and Z, denoting the integers among which you have to find the second smallest element.



const findSndSmallest = (x,y,z) => {
    if ((x < y && y < z) || (x > y && y > z)) {
        console.log(y); 
    }
    if ((y < x && x < z) || (y > x && x > z)) {
        console.log(x);
    }
    else {
        console.log(z); 
    }
};
findSndSmallest(2,9,23);



/// Question --9 ///
// Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// Note: You have to complete Triangle_Check. No need to take any input

// Input Format
// The input contains three numbers A, B and C which denotes the angles of a triangle.

const Triangle_Check = (A,B,C) => {
    if (A < 90 && B < 90 && C < 90) {
        console.log("acute"); 
    } else if (A > 90 || B > 90 || C > 90) {
        console.log("obtuse"); 
    } else {
        console.log( "enter correct angles");
    }
};

Triangle_Check(50,80,30);


