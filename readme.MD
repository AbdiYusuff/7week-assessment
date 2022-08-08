
|               | tinyArry | smallArray | mediumArray | largeArray | extraLargeArray |
|---------------|----------|------------|-------------|------------|-----------------|
| doublerAppend | 202.1 μs | 243 μs     | 336.1 μs    | 1.97 ms    | 8.0312 ms       |
| doublerInsert | 74.6 μs  | 101.5 μs   | 411.1 μs    | 22.41 ms   | 1.8972088 s     |



- [ ]  Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

The doublerAppend increases more steadily compared doublerInsert. The both functions start at microseconds. Interestingly enough, the doublerInsert increases more slowly initially. However, the doublerInsert spikes quite fast when it gets to largeArray, going from microseconds to milliseconds to seconds. In comparison, doublerAppend remains increasing at steadier increments, going from microseconds to milliseconds. As the input in the getSizedArray(size) grows, the runtime for doublerAppend increases somewhat proportionally while doublerInsert increases exponentially. Therefore: 
doublerAppend is: O(n)
doublerInsert is: O(n^2)


- [ ]  For extra credit, do some review / research on why the slower function is so slow, and summarize the reasoning for this.