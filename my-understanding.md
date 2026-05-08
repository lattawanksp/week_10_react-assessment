แนวคิด

- ลง npm install react + tailwind ในเครื่อง เช็คตัว react-router-dom ช่วยให้เปลี่ยน component ทันทีแบบไม่ต้อง reload หน้าใหม่
- แบ่ง UI เป็นสามส่วน Navbar (component) / Home (มีปุ่มสลับ section มีตาราง) / Owner
- state ที่สร้าง:
  section เก็บค่าว่าปุ่มไหนอยู่ตรง user / admin
  member เก็บ data ที่ดึงมาจาก API: https://67eca027aa794fb3222e43e2.mockapi.io/members ไม่มีการส่ง props เพราะอยู่ที่หน้า Home หน้าเดียว

//TH Version
ใช้ไฟล์นี้เพื่ออธิบายการตัดสินใจเชิงเทคนิคในการออกแบบของคุณ ตัวอย่างเช่น:
อธิบายว่าเหตุใดคุณจึงแบ่ง UI ของแอปออกเป็นคอมโพเนนต์ต่าง ๆ และแบ่งอย่างไร
คุณสร้างตัวแปร state อะไรบ้าง และสร้างขึ้นมาเพื่ออะไร
คุณจัดการ state เหล่านี้อย่างไร ใช้การส่ง Props หรือใช้ React Context และทำไมถึงเลือกวิธีนั้น

อธิบายวิธีการและเหตุผลที่คุณใช้ useEffect hook
อธิบายว่าคุณสามารถใช้ fetch() โดยไม่ใช้ useEffect ได้หรือไม่ และเพราะเหตุใด
อธิบายว่าการใช้ fetch() ควรเป็นแบบ Synchronous หรือ Asynchronous JavaScript และเพราะเหตุใด
ระบุบันทึกอื่น ๆ เกี่ยวกับ React และการพัฒนาเว็บ Frontend ที่คุณต้องการสรุปความเข้าใจในเนื้อหาเชิงเทคนิคนี้ รวมถึงสามารถจดคำถามที่คุณมีไว้ได้ด้วย

//EN version
Use this file to explain your technical design decisions for example,

- explain how and why you divided the app's UI into components,
- what state variables did you created and why?,
- How did you manage these states? Was it via Passing Props or React Context, why?
- Explain how and why you used the useEffect hook?
- Explain whether you could and why, you would use fetch() without using useEffect?
- Explain whether the use of fetch() should be synchronous or asynchronous JavaScript, why?
- Include any other notes about React and Frontend Web Development you want to summarize your understanding of this technical domain. You can also note down questions you have.
