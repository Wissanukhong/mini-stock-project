# ReactJS

โปรเจคนี้จะทำให้ได้เรียนรู้เกี่ยวกับ Basic ReactJS และได้เรียนรู้โครงสร้างต่างๆ ของการทำเว็บไซต์

### Content

- การติดตั้ง create-react-app (project-name)
- การติดตั้ง AdminLTE
- วิธีการแก้ไข Bug เบื้องต้น
- Document
- Redirec คือการตั้งค่าให้ไปที่หน้าเริ่มต้น

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
