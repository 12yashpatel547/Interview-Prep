# When to Use Objects or Arrays

## Objects
**Objects** - Unordered key-value pairs

```
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```
### When to use Objects
* When you don't need order
* When you need fast acess/insertion and removal

### Big O of Objects
* Insertion -   O(1)
* Removal -   O(1)
* Searching -   O(N)
* Access -   O(1)

### Big O of Objects methods
* Object.keys -   O(N)
* Object.values -   O(N)
* Object.entries -   O(N)
* hasOwnProperty -   O(1)

## Arrays
**Arrays** - ordered lists
```
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];
```
### When to use Arrays
* When you need order
* When you need fast access / insertion and removal (sort of....)

### Big O of Arrays
* Insertion - Depends
* Removal - Depends
* Searching -   O(N)
* Access -   O(1)

### Big O of Arrays methods
* push -   O(1)
* pop -   O(1)
* shift -   O(N)
* unshift -   O(N)
* concat -   O(N)
* slice -   O(N)
* splice -   O(N)
* sort -   O(N * log N)
* forEach/map/filter/reduce/etc. -   O(N)

### Limitation of Arrays
* Inserting at the beginning is not as easy as we might think! There are more efficient data structures for that!
