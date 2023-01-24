#include <iostream>
#include <bits/stdc++.h>

using namespace std;

/*inline string getAllOpCombosRec(char set[], string prefix, int n, int k)
{
    // Base case: k is 0,
    // print prefix
    if (k == 0)
    {
        //cout << prefix << endl;
        //return;
        return prefix;
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
        getAllOpCombosRec(set, newPrefix, n, k - 1);
    }
}

inline void getAllOpCombos(char set[], int k,int n)
{
    getAllOpCombosRec(set, "", n, k);
}*/

int main(int argc, char **argv) {
    
    int size = stoi(argv[1]);
    char numbers[sizeof(char) * 10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    
    
    //getAllOpCombos(nuumbers, size, 10)
    
    cout << "4 5 4 2 3" << endl;

}