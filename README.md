# コマンド

ローカルで起動
```sh
$ npm run client
```

ビルド
```sh
$ npm run build
```

Express起動（本番用）
```sh
$ npm run start
$ # runは省略可能
$ npm start
```


# フォルダ構成
```
./
├─ build              # ビルド先
├─ public             # 静的ファイル
├─ src                # ソースコード
│  ├─ api             # API関連
│  ├─ components      # 汎用コンポーネント
│  ├─ css             # 汎用CSS
│  ├─ routes          # ページ毎
│  │  ├─ Router.js    # ルーティング
│  │  └─ Hoge         # 各ページ
│  │     ├── Hoge.js  # コンポーネント
│  │     └── *        # 独自コンポーネント・CSSなどはご自由に
│  └── index.js       # エントリーポイント
└── server.js         # Expressアプリケーション
```