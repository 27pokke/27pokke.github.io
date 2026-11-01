# 27pokke — Portfolio

ぽっけ / 27pokke の個人ポートフォリオです。公開済みの GitHub プロフィールとリポジトリを
情報源に、人物像、学習・制作活動、公開アカウントへの導線を1ページにまとめています。

## Local preview

```sh
python3 -m http.server 4173
```

`http://localhost:4173/` を開きます。

## Validation

```sh
npm test
```

テストは、ランドマーク、ページ内リンク、本人情報、作品リンク、外部リンクの安全属性、
レスポンシブ・アクセシビリティ用CSSを確認します。

## Updating content

- プロフィール本文と作品情報は `index.html` にあります。
- 見た目とレスポンシブ対応は `styles.css` にあります。
- `script.js` は必須ではない表示補助だけを担当します。
- 新しい作品を追加するときは、公開リポジトリの説明と状態を確認し、
  `tests/site.test.mjs` の契約も更新してください。

## Spec-driven workflow

GitHub Spec Kit を Codex 連携で導入しています。仕様、計画、タスクは
`specs/001-portfolio-site/`、プロジェクト原則は `.specify/memory/constitution.md` にあります。

## Publishing

このリポジトリは GitHub Pages のユーザーサイトです。`main` ブランチのリポジトリルートを
公開元にすると、`https://27pokke.github.io/` で配信されます。`.nojekyll` により、静的ファイルを
そのまま公開します。
