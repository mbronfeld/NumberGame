#include <iostream>
#include <vector>
#include <string>
#include <string.h>

using namespace std;

inline bool isInOrder(vector<char> ops, int opsSize) {
    auto lastSeen = ops.at(0);
    for (int i=1; i<opsSize; i++) {
        //cout << "Looking at: " << ops.at(i) << endl;
        char curr = ops.at(i);
        if ((curr == '*') || (curr == '/')) {
            if ((lastSeen == '+') || (lastSeen == '-')) {
                return false;
            }
        }
        lastSeen = curr;
    }
    return true;
}

inline bool isBetweenNums(int start, int end, int test) {
    if ((start <= test) && (end >= test)) {
        return true;
    }
    return false;
}

inline bool isBetweenOps(int start, int end, int test) {
    if ((start <= test) && (end-1 >= test)) {
        return true;
    }
    return false;
}

inline void solver(vector<int> nums, char ops[], int numsSize, int opsSize, int start, int end, char* name) {
    
    //Creates a vector of specific numbers and operations
    int chosenOpsSize = end-start;
    int chosenNumsSize = (end-start)+1;
    
    vector<int> chosenNums;
    for (int i=start; i<=end; i++) {
        if (isBetweenNums(start, end, i)) {
            chosenNums.push_back(nums[i]);
        }
    }
    vector<char> chosenOps;
    for (int i=start; i<end; i++) {
        if (isBetweenOps(start, end, i)) {
            chosenOps.push_back(ops[i]);
        }
    }
    if (!isInOrder(chosenOps, chosenOpsSize)) { // Checks to see if the operations are in priority order
        //cout << "ending early" << endl;
        //cout << "end" << endl;
        return;
    }
    
    // Performs the chosen mathematical operations on the chosen numbers
    int soFar = 0;
    for (int i=0; i<chosenOpsSize; i++) {
        int a;
        int b;
        int result;
        if (i==0) {
            a = chosenNums[0];
        }
        else {
            a = soFar;
        }
        b = chosenNums[i+1];
        char op = chosenOps[i];
        //cout << "a: " << a << " b: " << b << " op: " << op << endl;
        switch (op) {
            case 'a':
                result = a + b;
                break;
            case 's':
                result = a - b;
                break;
            case 'm':
                result = a * b;
                break;
            case 'd':
                if (b!=0) {
                    if (a%b == 0) {
                    result = a/b;
                    }
                    else {
                        //cout << "end" << endl;
                        return;
                    }
                }
                else {
                    //cout << "ending early" << endl;
                    //cout << "end" << endl;
                    return;
                }
                break;
        }
        soFar = result;
    }
    
    int chosenNumPicker = 0;
    int unchosenNumPicker = 0;
    int chosenOpPicker = 0;
    int unchosenOpPicker = 0;
    string s = ""; 
    //string s = name;
    //s = s + " ";
    int i = 0;
    while (i<numsSize) {
        int toBeAdded;
        if (isBetweenNums(start, end, i)) {
            toBeAdded = soFar;
            i = i + chosenNumsSize - 1;
        }
        else {
            toBeAdded = nums.at(i);
        }
        s = s + to_string(toBeAdded);
        s = s + " ";
        i++;
    }
    i=0;
    while (i<opsSize) {
        char toBeAdded;
        if (isBetweenOps(start, end, i)) {
            i = i + chosenOpsSize;
        }
        toBeAdded = ops[i];
        unchosenOpPicker ++;
        s = s + toBeAdded;
        i++;
    }
    
    cout << s << endl;
    return;
}

int main(int argc, char **argv) {

    if (argc <= 2){ // base case of no further operations
        cout << argv[1] << endl;
        return 0;
    }
    else { // recussive element
        int size = argc - 2;

        // creates an array of characters that represent the operations
        string opString = argv[argc-1];
        char ops[size-1];
        strcpy(ops, opString.c_str());

        // creates a vector of the numbers represented as integers
        vector<int> nums;
        for (int i=1; i<=size; i++) {
            nums.push_back(stoi(argv[i]));
        }     

        for (int start=0; start<size-1; start++) {
            for (int end=start+1; end<size; end++) {
                solver(nums, ops, size, size-1, start, end, argv[0]);
            }
        }
    }
    return 0;
}