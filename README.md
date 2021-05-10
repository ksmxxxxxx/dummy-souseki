# dummy-souseki

![NPM](https://img.shields.io/npm/l/dummy-souseki)
[![GitHub license](https://img.shields.io/github/license/ksmxxxxxx/dummy-souseki)](https://github.com/ksmxxxxxx/dummy-souseki)

## これはなに？

コマンドを実行すると日本語のダミーテキストが表示されるCLIツールです。  
ダミーテキストの素材として、青空文庫で公開されている夏目漱石の「こころ」を使わせてもらっています。

デザインカンプや、ダミーデータを作成する際にある程度の長さがある文章が必要なときにこのツールを使うことを想定しています。

現在CLIツールのみ提供していますが、将来的にはWebアプリなどのダミーデータ作成の際に使えるモジュールとしても提供するかもしれません。

完全に個人の趣味の範囲で開発しています。

### できること

表示されるダミーテキストは夏目漱石の「こころ」本文を、ランダムで表示します。  
デフォルトでは1段落で表示されますが、オプションで表示する段落数を指定することができます。  
また、オプションでクリップボードにコピーすることも可能です。

## 提供している環境

- macOS
- Node.js 14以上
- npm 6.14以上

作者の開発環境がmacOSであることと、他のOSでの動作環境が用意できないため、現状ではmacOSのみの提供となっています。

## インストール

### グローバルで使う場合

#### npm

```
npm install -g dummy-souseki
```

#### yarn

```
yarn global add dummy-souseki
```

### プロジェクトディレクトリで使う場合

#### npm

```
npm install dummy-souseki
```

#### yarn

```
yarn add dummy-souseki
```

## 使い方

```
Usage: dummy-souseki [options]

Options:
  -v, --version              Output the current version          # ツールのバージョンを表示
  -p, --paragraphs <number>  Specifies the number of paragraph   # 段落数を指定できます
  -c, --copy                 Copy to clipboard with dummy text   # ダミーテキストをクリップボードにコピーします
  -h, --help                 display help for command            # ヘルプを表示します
```

## 要望がある場合は

「こんな感じでこのツールを利用したい」という要望がある場合は、このリポジトリをForkし、ご自身で改修しPull Requestを送ってください。

Issueに要望を送っていただいても問題ありませんが、送られた要望はすべて採用されるわけではないことをご留意ください。

## Lisence

Copyright (c) ksmxxxxxx  
Released under the MIT licence  
[The MIT License \| Open Source Initiative](https://opensource.org/licenses/mit-license.php)
