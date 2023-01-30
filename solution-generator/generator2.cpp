// Arguements to this function are the number of numbers followed by those numbers specifically

#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

char ops[4] = {'a', 's', 'm', 'd'};

inline void getAllOpCombosRec(char set[], string prefix, int n, int k, vector<string>& combos)
{
    // Base case: k is 0,
    // print prefix
    if (k == 0)
    {
        combos.push_back(prefix);
        return;
    }
 
    // One by one add all characters
    // from set and recursively
    // call for k equals to k-1
    for (int i = 0; i < n; i++)
    {
        string newPrefix;
         
        // Next character of input added
        newPrefix = prefix + set[i];
         
        // k is decreased, because
        // we have added a new character
        getAllOpCombosRec(set, newPrefix, n, k - 1, combos);
    }
}

inline void getAllOpCombos(char set[], int k,int n, vector<string>& combos)
{
    getAllOpCombosRec(set, "", n, k, combos);
}

inline void send(vector<char> vec, int size, vector<string> combos) { // sends the finished data to the console
    string s = "";
    for (int i=0; i<size; i++) {
        s = s + vec[i] + " ";
    }
    for (int j=0; j<combos.size(); j++) {
            cout << s << combos[j] << endl;
        }
}

int main(int argc, char **argv) {

    int size = stoi(argv[1]); // defines the number of numbers in the problem
    
    // Checks to see if the size passed matches with the number of numbers passed
    if (argc-2 != size) {
        cerr << "This program requires " << size << " numbers to run corrctly, only " << argc - 2 << " were passed" << endl;
        return -1;
    }
    
    vector<char> nums; // initalizes the vector of numbers and assigns them from the arguements
    vector<string> opCombos; // initializes the array of operations
    int maxParen = size - 2;

    getAllOpCombos(ops, size - 1, 4, opCombos); // finds all combinations of operations
    
    for (int i=0; i<size; i++) {
        nums.push_back(argv[i+2][0]);
    }

    do{
        send(nums, size, opCombos);
    } while(next_permutation(nums.begin(), nums.end()));

    return 0;
}

// dont forget to use ./gen 4 1 2 3 4 | xargs -L1 -P0 ./a.out