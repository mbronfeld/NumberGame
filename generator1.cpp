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