# 餐廳論壇
利用node.js與MySQL資料庫打造的餐廳論壇，使用者可以檢視各類餐廳，留下評論，若有喜歡的餐廳，可以按下喜歡，或將餐廳加入自己的最愛。

## 功能介紹
● 使用者登入：使用者可以透過Email、密碼登入，若是密碼不正確，或是帳號不存在，會跳出提示訊息。

● 使用者註冊：使用者需輸入名字、帳號、密碼，並重複輸入密碼確認密碼正確，名字為非必填其他為必填，若Email已註冊、兩次輸入密碼不一致、必填欄位未填，皆會跳出提示訊息。

● 檢視所有餐廳，也可點入單一餐廳查看詳細資料，並留下評論。

● 透過「最新動態」頁面，查看最新的評論。

● 透過「美食達人」頁面，查看目前論壇所有的使用者。

● 透過「Top 10人氣餐廳」頁面，查看目前最受所有使用者喜愛的10家餐廳。

● 透過「Top 10人氣餐廳」頁面，查看目前最受所有使用者喜愛的10家餐廳。

若為擁有 admin權限的管理者，可使用一般使用者的功能，並再多了以下權限：

● 新增/編輯/刪除 餐廳。

● 賦予/取消 一般使用者admin權限。

● 新增/刪除 餐廳分類類別。

## 使用說明
1. 請先確認有安裝 node.js 與 npm

2. 將專案 clone 到本地

3. 在本地開啟之後，透過終端機進入資料夾，輸入：
```
npm install
```
安裝完畢後，建置種子資料，輸入以下：
```
npx sequelize db:seed:all
```
完成後，即可接著執行主程式，輸入以下：
```
npm run dev
```
若看見此行訊息 Example app listening on port 3000! 則代表順利運行，打開瀏覽器進入到以下網址：
```
http://localhost:3000
```
若欲暫停使用
```
ctrl + c

## 預設帳號
以下是資料庫已設定好的帳號：
* 第一組帳號有 admin 權限：
  * email: root@example.com
  * password: 12345678
* 第二組帳號沒有 admin 權限：
  * email: user1@example.com
  * password: 12345678

## 開發工具
● Node.js 14.16.0

● Express 4.17.1

● Express-Handlebars 5.3.3

● mysql2 2.3.0

● sequelize 6.6.5

● sequelize-cli 6.2.0

● bcryptjs 2.4.3

● express-session 1.17.2

● passport 0.4.1

● passport-jwt 4.0.0

● passport-local 1.0.0

● dotenv 10.0.0
