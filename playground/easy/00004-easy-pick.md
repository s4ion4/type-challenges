# 4 - Pick
## 問題概要
組み込みの型ユーティリティ`Pick<T, K>`を使用せず、`T`から`K`のプロパティを抽出する型を実装します。

## 前提知識
### ジェネリクス (Generics)
型を「変数」のように扱える機能。<T>のように山括弧で囲む。
```typescript
function Box<T>(value: T): T {
  return value;
}

Box<string>("hello");  // T = string
Box<number>(42);       // T = number
```

### ユニオン型（Union Types）
複数の型のうち、どれか1つを表す型。|（パイプ）で区切る。
```typescript
type Color = 'red' | 'blue' | 'green';  // 3つの文字列のどれか
```

### keyof型演算子
オブジェクトのプロパティ名を型として取得する。
```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;  // 'name' | 'age'
```

### 型引数の制約
`K` は `T` のキーでなければならないという制約
```typescript
K extends keyof T
```

### インデックスアクセス型
オブジェクトのプロパティの型を取得する。
```typescript
interface Todo {
  title: string;
  completed: boolean;
}

type TitleType = Todo['title'];  // string
```

### インデックス型
動的なプロパティ名を定義する
```typescript
type StringIndex = {
  [key: string]: number;
}
```

### Mapped Types (マップ型)
既存の型のプロパティを基に新しい型を作成する仕組み。
```typescript
type MappedType<T> = {
  [P in keyof T]: string;
}
```
- `[K in keyof T]`: `T` の各要素を `K` として繰り返し処理
- ``T` のプロパティ `P` の型をすべて文字列にする

## 考え方
- ジェネリック型で2つの型パラメータを受け取る
- extendsで適切な制約を設定する
- Mapped Typesとin演算子で新しい型を構築する
- インデックスアクセスで元の型情報を取得する

## 参考リンク
- [ジェネリクス (generics)](https://typescriptbook.jp/reference/generics)
- [ユニオン型 (union type)](https://typescriptbook.jp/reference/values-types-variables/union)
- [keyof型演算子](https://typescriptbook.jp/reference/values-types-variables/union)
- [型引数の制約](https://typescriptbook.jp/reference/generics/type-parameter-constraint)
- [インデックスアクセス型](https://typescriptbook.jp/reference/type-reuse/indexed-access-types)
- [Mapped Types](https://typescriptbook.jp/reference/type-reuse/mapped-types)