/*
  32427 - Unbox
  -------
  by Julian Coy (@eXamadeus) #上級 #utils #promise #function #tuple #array

  ### 質問

  How can we build a type that "unboxes" arrays, functions, promises, and tuples?

  Example:

  ```typescript
  Unbox<string> // string
  Unbox<()=>number> // number
  Unbox<boolean[]> // boolean
  Unbox<Promise<boolean>> // boolean
  ```

  Bonus: Can we make it recursive?

  ```typescript
  Unbox<() => () => () => () => number> // number
  ```

  Double Bonus: Can we control the recursion?

  ```typescript
  Unbox<() => () => () => () => number, 3> // () => number
  ```

  > GitHubで確認する：https://tsch.js.org/32427/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Unbox<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Base cases
  Expect<Equal<Unbox<number>, number>>,
  Expect<Equal<Unbox<() => number>, number>>,
  Expect<Equal<Unbox<() => number | string>, number | string>>,
  Expect<Equal<Unbox<number[]>, number>>,
  Expect<Equal<Unbox<(number | string)[]>, number | string>>,
  Expect<Equal<Unbox<[number]>, number>>,
  Expect<Equal<Unbox<Promise<number>>, number>>,

  // Bonus: Recursion
  Expect<Equal<Unbox<() => Promise<() => Array<Promise<boolean>>>>, boolean>>,

  // Bonus: Recursion levels
  Expect<Equal<Unbox<() => () => () => () => number, 0>, number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 1>, () => () => () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 2>, () => () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 3>, () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 4>, number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 5>, number>>,
  Expect<Equal<Unbox<number[][][][], 0>, number>>,
  Expect<Equal<Unbox<number[][][][], 1>, number[][][]>>,
  Expect<Equal<Unbox<number[][][][], 2>, number[][]>>,
  Expect<Equal<Unbox<number[][][][], 3>, number[]>>,
  Expect<Equal<Unbox<number[][][][], 4>, number>>,
  Expect<Equal<Unbox<number[][][][], 5>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 0>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 1>, [[[number]]]>>,
  Expect<Equal<Unbox<[[[[number]]]], 2>, [[number]]>>,
  Expect<Equal<Unbox<[[[[number]]]], 3>, [number]>>,
  Expect<Equal<Unbox<[[[[number]]]], 4>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 5>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 0>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 1>, Promise<Promise<number>>>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 2>, Promise<number>>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 3>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 4>, number>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/32427/answer/ja
  > 解答を見る：https://tsch.js.org/32427/solutions
  > その他の課題：https://tsch.js.org/ja
*/
