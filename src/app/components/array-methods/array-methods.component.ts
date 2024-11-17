import { Component, OnInit } from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { Q } from '@angular/cdk/keycodes';
import { first } from 'rxjs';
import { convertCompilerOptionsFromJson } from 'typescript';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-array-methods',
  standalone: true,
  imports: [TopicComponent],
  templateUrl: './array-methods.component.html',
  styleUrl: './array-methods.component.css',
})
export class ArrayMethodsComponent implements OnInit {
  ngOnInit(): void {
    // let fruits = ['apple', 'banana'];
    // // 1. push()
    // fruits.push('orange');
    // console.log('Fruits: ', fruits);
    // // 2. pop()
    // let lastFruit = fruits.pop();
    // console.log('last fruit:', lastFruit);
    // console.log('Fruits: ', fruits);
    // fruits.push('Orange', 'Mango');
    // console.log('Fruits: ', fruits);
    // // 3. shift()
    // let firstItem = fruits.shift();
    // console.log('First Fruit:', firstItem);
    // console.log('Original Fruit Array: ', fruits);
    // //4. unshift()
    // fruits.unshift('apple');
    // console.log('Original Fruit Array: ', fruits);
    // //5. concat()
    // let moreFruits = ['abc', 'zyx'];
    // let allFruits = moreFruits.concat(fruits);
    // console.log('All Fruits: ', allFruits);
    // let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
    // console.log(fruits);
    // 6. slice()
    // arrayName.slice(fromIndex, uptoIndex)
    // let newFruits = fruits.slice(2, 5); //[0],[1],[2]
    // console.log(newFruits);
    // 7. splice()
    //  arrayName.splice(startIndex, deleteCount, item1, item2....)
    // console.log(fruits);
    // fruits.splice(1, 3);
    // console.log('New Fruits: ', fruits);
    // console.log('Original Fruits :', fruits);
    // 8. indexOf
    // console.log(fruits.indexOf('ABC'));
    //9. lastIndexOf
    // let nums = [1, 2, 3, 2, 4, 2, 5, 6, 7, 2, 4, 2, 5, 6, 10];
    // console.log(nums.lastIndexOf(2));
    // 10. includes()
    // console.log(fruits.includes('xyz'));
    // 11. join()
    // console.log(fruits.join(', '));
    // 12. reverse()
    // console.log(fruits.reverse());
    // 13. sort()
    // console.log('Before Sort: ', fruits);
    // console.log(fruits.sort());
    // console.log('After Sort', fruits);
    // let numbers = [10, 5, 2, 1];
    // console.log(numbers.sort((a, b) => a - b));
    // let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
    // 14. forEach()
    // fruits.forEach((f, i) => {
    //   console.log('Array Item and its index value: ', f, i);
    // });
    // 15. map()
    // let num = [1, 2, 3];
    // let squares = num.map((x) => x * x);
    // console.log('Squares of array: ', squares);

    // 16. filter()
    // let num = [1, 2, 3, 4, 5, 6];
    // let even = num.filter((x) => x % 2 == 0 && x > 4);
    // console.log('Even Numbers array: ', even);
    // console.log('Original Numbers array: ', num);

    // 17. reduce()
    //  array.reduce((accumulator, currentValue) => {logic}, initialValue for accumulator)

    // arrya.reduce((i, value) => i+value, 0  )
    // let numbers = [1, 2, 3, 4];
    // let sum = numbers.reduce((total, num) => total + num, 0);
    // console.log(sum);

    // 18. some()
    // let num = [2, 4, 30, 72, 110, 772, 100];
    // console.log(num.some((x) => x % 2 == 0));

    // 19. every()
    // console.log(num.every((x) => x % 2 == 0));

    // 20. find()
    // let num = [1, 3, 5, 4, 7, 2];
    // console.log(num.find((x) => x % 2 == 0));
    // 21. findIndex()
    // console.log(num.findIndex((x) => x % 2 == 0));

    // 22. flat()
    // Creates a new array with all sub array elements concatenated into it recursively upto specified depth.

    // let num = [1, 2, [3, 4, [5, 6]]];
    // let newArray = num.flat(0);
    // console.log(newArray);

    // 23. Spread operator(...)
    // let arr1 = [1, 2, 3, 4];
    // console.log('Array 1: ', arr1);
    // let arr2 = [...arr1];
    // console.log('Array 2: ', arr2);

    // let newMergedArray = [...arr1, ...arr2];
    // console.log('New Merged Array: ', newMergedArray);

    // 24. Rest Operator (...)
    //   console.log(this.sum(10, 20, 30, 40));
    // }

    // sum(...numbers) {
    //   return numbers.reduce((sum, n) => sum + n, 0);
    // }

    // 25. Destructuring -> for unpacking

    let fruits = ['apple', 'banana', 'orange', 'abc', 'cde', 'efg', 'yuk'];
    let [f1, f2, ...remiaing] = fruits;
    console.log(f1);
    console.log(remiaing);

    let p = {
      myName: 'Satish',
      age: 44,
    };
    console.log(p.myName);

    let { myName, age } = p;
    console.log(myName);
  }
}
