#include <iostream>
#include <bits/stdc++.h>

using namespace std;


void getCombinations(std::vector<char> &arr, std::vector<char> &data, int start, int end, int index, int n)
{
    if (index == n)
    {
        string s = "";
        s = s + to_string(n);
        for (int i = 0; i < n; i++){
            s = s + " ";
            s = s + data[i];
        }
        cout << s << endl;
        return;
    }
    for (int i = start; i <= end; i++)
    {
        data[index] = arr[i];
        getCombinations(arr, data, i, end, index+1, n);
    }
}

void _getCombinations(std::vector<char> &arr, std::vector<char> &data, int start, int end, int index, int n){
    getCombinations(arr, data, 0, arr.size()-1, 0, n);
}

int main(int argc, char **argv)
{
    char numbers[sizeof(char) * 10] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
    vector<char> arr;
    for (int i = 0; i <= 9; i++)
        arr.push_back(numbers[i]);
    int n = stoi(argv[1]); // change n to the desired combination length
    vector<char> data(n);
    _getCombinations(arr, data, 0, arr.size()-1, 0, n);
    return 0;
}


/*
inline void getAllNumCombosRec(char set[], string prefix, int n, int k, int size)
{
    // Base case: k is 0,
    // print prefix
    if (k == 0)
    {
        cout << size << prefix << endl;
        return;
    }
 
    // One by one add all characters
    // from set and recursively
    // call for k equals to k-1
    for (int i = 0; i < n; i++)
    {
        string newPrefix;
         
        // Next character of input added
        newPrefix = prefix + " ";
        newPrefix = newPrefix + set[i];
         
        // k is decreased, because
        // we have added a new character
        getAllNumCombosRec(set, newPrefix, n, k - 1, size);
    }
}

inline void getAllNumCombos(char set[], int k,int n)
{
    getAllNumCombosRec(set, "", n, k, k);
}

int main(int argc, char **argv) {
    
    int size = stoi(argv[1]);
    char numbers[sizeof(char) * 10] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
    
    getAllNumCombos(numbers, size, 10);


}*/