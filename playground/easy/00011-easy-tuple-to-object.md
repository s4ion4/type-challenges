# 11 - Tuple to Object

## 問題概要
タプルを受け取り、その各値をkey/valueの両方に持つオブジェクトの型に変換する型を実装します。

## 前提知識

### as const アサーション
値をリテラル型として扱うためのアサーション。配列やオブジェクトを読み取り専用の定数として扱う。
```typescript
const arr = ['a', 'b'] as const;
// 型: readonly ['a', 'b'] (タプル型)

const arr2 = ['a', 'b'];
// 型: string[] (配列型)
```

### タプル型の要素へのアクセス
タプル型の各要素は、配列のインデックスを使ってアクセスできる。
```typescript
type Tuple = ['a', 'b', 'c'];
type First = Tuple[0];   // 'a'
type Second = Tuple[1];  // 'b'
type All = Tuple[number]; // 'a' | 'b' | 'c'
```

### PropertyKey型
オブジェクトのキーとして使える型の組み合わせ。
```typescript
type PropertyKey = string | number | symbol;
```

### タプルからユニオン型への変換
`T[number]`を使うことで、タプルの全要素をユニオン型として取得できる。
```typescript
type Colors = ['red', 'green', 'blue'];
type ColorUnion = Colors[number]; // 'red' | 'green' | 'blue'
```

## 考え方
- タプルの各要素を取り出す方法を理解する
- その要素をオブジェクトのキーと値の両方に使用する
- Mapped Typesの`in`演算子でオブジェクトを構築する
- キーとして有効な型（PropertyKey）の制約を考慮する

## 参考リンク
- [as const satisfies](https://typescriptbook.jp/reference/values-types-variables/const-assertion)
- [タプル型 (tuple type)](https://typescriptbook.jp/reference/values-types-variables/tuple)
- [インデックスアクセス型](https://typescriptbook.jp/reference/type-reuse/indexed-access-types)
- [Mapped Types](https://typescriptbook.jp/reference/type-reuse/mapped-types)