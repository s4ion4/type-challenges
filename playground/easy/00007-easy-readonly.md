# 7 - Readonly

## 問題概要
組み込みの型ユーティリティ`Readonly<T>`を使用せず、`T`のすべてのプロパティを読み取り専用にする型を実装します。

## 前提知識

### readonly修飾子
プロパティを読み取り専用にする修飾子。再代入を防ぐ。
```typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
user.id = 2;    // Error: Cannot assign to 'id' because it is a read-only property
user.name = "Bob";  // OK
```

### 浅い（Shallow）と深い（Deep）の違い
修飾子は通常、第一階層のプロパティにのみ適用される。
```typescript
interface Nested {
  prop1: {
    prop2: string;
  }
}
// prop1に修飾子を付けても、prop2には影響しない
```

## 考え方
- 型パラメータを受け取る
- 元の型の構造を保持する必要がある
- プロパティの型情報を失わないようにする
- 修飾子の適用方法を理解する

## 参考リンク
- [readonly修飾子](https://typescriptbook.jp/reference/values-types-variables/object/readonly-property)
- [Mapped Types](https://typescriptbook.jp/reference/type-reuse/mapped-types)