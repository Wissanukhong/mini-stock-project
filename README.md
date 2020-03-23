# ReactJS

โปรเจคนี้จะทำให้ได้เรียนรู้เกี่ยวกับ Basic ReactJS และได้เรียนรู้โครงสร้างต่างๆ ของการทำเว็บไซต์

### Content

- การติดตั้ง create-react-app (project-name)
- การติดตั้ง AdminLTE
- วิธีการแก้ไข Bug เบื้องต้น
- Document
- Redirec คือการตั้งค่าให้ไปที่หน้าเริ่มต้น
- Backend การติดตั้งเครื่องมือสำหรับการเขียน Backend

### Redirect

- บรรทัดแรกจะเป็นการบอกว่า ให้ Route มองว่าสิ่งนี้คือหน้าแรก
- บรรทัดที่ 2 คือการบอกว่า ถ้า user กดอะไรเข้ามาที่ไม่ถูกต้องหรือว่าไม่มีนั้น ให้ทำการ Redirect กลับไปที่หน้าที่เราต้องการ

```js
    <Route exact={true} path="/" component={this.redirectToLogin} />
    <Route path='*' exact={true} component={this.redirectToLogin} />

```
### การดักจับ Event เพื่อไม่ให้หน้าจอ Refresh หน้าจอ
** เอาไว้ใช้เวลาที่เราไม่ต้องการให้หน้าจอ Refresh
```js
 onClick={(e) => {
        e.preventDefault();
        this.props.history.push("/register");
        }

```

### JSON.stringify() คือคำสั่งเมื่อเราต้องการเช็คว่า สิ่งที่ User พิมพ์เข้ามา ถูกจัดเก็บเข้าไปที่ state หรือไม่ โดยการแสดงที่หน้าจอ 
```js
    <span>#Debug: {JSON.stringify(this.state)}</span>
```
# Backend

### Backend การติดตั้งเครื่องมือสำหรับการเขียน Backend
เราจะต้องสร้าง Folder สำหรับ Backend ขึ้นมาก่อน จากนั้นทำการติดตั้ง คำสั่งต่างๆ ดังต่อไปนี้ 

*ก่อนที่เราจะติดตั้งเราจะต้องทำการเช็ค Path ก่อนว่าถูกต้องหรือไม่ ด้วยคำสั่ง pwd 

```linux

    pwd 

    cd

```

จากนั้นก็ติดตั้งดังต่อไปนี้ 

```node

    npm i init -y
    npm i -g nodemon
    npm install express bodyparser fs-extra formidable 


```

* npm i init -y คือการติดตั้ง pakage แบบ Default โดยที่เราไม่ต้องกด อะไรเลย

* npm i -g nodemon คือการให้ระบบทำการแบบ update auto โดยที่เราไม่ต้อง npm start <_filename> ทุกครั้งที่มีการแก้ไข เป็นการลดขั้นตอนในนั้นเอง

* npm install express bodyparser fs-extra formidable คือการติดตั้ง Libery สำหรับการเขียน Backend 

### การ upload file picture form backend 
```js
    app.use(express.static(__dirname + "/uploaded"))

```
*** ถ้าเรามีคำสั่ง + "/uploaded" จะเป็นการป้องกันไม่ให้ User เห็น Code ของเรา


### ทำการติดตั้ง cors เพื่อความปลอดภัยในการทำ network

```js
    npm i cors
```

จากนั้นทำการเรียกใช้งาน 
```js

    const cors = require('cors');

    app.use(cors());
```

### ทำการติดตั้ง axios เพื่อทำ Client
```js
    npm i axios 
```
จากนั้นทำการตรวจเช็คที่ package.json ว่ามี axios มาหรือยัง