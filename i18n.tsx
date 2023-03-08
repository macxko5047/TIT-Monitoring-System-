import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  th: {
    translation: {
      TIMESTART: "เวลาเริ่ม",
      Date: "วันที่",
      Name: "ชื่อ",
      station: "ไลน์ผลิต",
      Shift: "กะทำงาน",
      Day: "กลางวัน",
      Night: "กลางคืน",
      START: "เริ่ม",
      pause: "หยุดชั่วคราว",
      stop: "หยุด",
      DownTime: "เวลาสูญเสียในการทำงาน",
      Time: "เวลา",
      Detail: "รายละเอียด",
      SUBMIT: "ตกลง",
      CLOSE: "ยกเลิก",
      Donwtimetell: "กรุณากดปุ่ม ดำเนินการต่อ เพื่อจบเวลาสูญเสียในการทำงาน",
      TimerDowntime: "จับเวลาสูญเสียในการทำงาน",
      Running: "กำลังทำงาน",
      Continue: "ดำเนินการต่อ",
      EditOkQty: "แก้ไขจำนวน OK",
      EditNgQty: "แก้ไขจำนวน NG",
      Edit: "แก้ไข",
      NGProduct: "ชิ้นงานเสีย",
      ConfirmDelete: "ยืนยัน ลบ",
      detailConfirmDelete: "คุณต้องการยืนยันที่จะลบชิ้นเสียโค้ด",
      Pcs: "จำนวน",
      NgCode: "โค้ดชิ้นงานเสีย",
      Part: "ชิ้นส่วน",
      NGPartComponent: "ชิ้นส่วนประกอบที่เสียหาย",
      NgQty: "จำนวนชิ้นงานที่เสีย",
    },
  },
  en: {
    translation: {
      TIMESTART: "TIME START",
      Donwtimetell: "please push start when end of downtime",
      EditOkQty: "Edit OK_qty",
      EditNgQty: "Edit NG_qty",
      NGProduct: "NG Product",
      ConfirmDelete: "Confirm Delete",
      detailConfirmDelete: "Do you want to delete NG code ",
      NgCode: "NG Code",
      NGPartComponent: "NG Part Component",
      NgQty: "NG qty",
    },
  },
  chi: {
    translation: {
      TIMESTART: "开始",
      Date: "日期",
      Name: "名字",
      station: "ไลน์ผลิต",
      Shift: "กะทำงาน",
      Day: "早班",
      Night: "晚班",
      START: "开始",
      pause: "หยุดชั่วคราว",
      stop: "做完",
      DownTime: "除外工时",
      Time: "时间",
      Detail: "รายละเอียด",
      SUBMIT: "ตกลง",
      CLOSE: "ยกเลิก",
      Donwtimetell: "กรุณากดปุ่ม ดำเนินการต่อ เพื่อจบเวลาสูญเสียในการทำงาน",
      TimerDowntime: "จับเวลาสูญเสียในการทำงาน",
      Running: "กำลังทำงาน",
      Continue: "ดำเนินการต่อ",
      EditOkQty: "แก้ไขจำนวน OK",
      EditNgQty: "แก้ไขจำนวน NG",
      Edit: "แก้ไข",
      NGProduct: "ชิ้นงานเสีย",
      ConfirmDelete: "ยืนยัน ลบ",
      detailConfirmDelete: "คุณต้องการยืนยันที่จะลบชิ้นเสียโค้ด",
      Pcs: "数量",
      NgCode: "โค้ดชิ้นงานเสีย",
      Part: "ชิ้นส่วน",
      NGPartComponent: "ชิ้นส่วนประกอบที่เสียหาย",
      NgQty: "จำนวนชิ้นงานที่เสีย",
    },
  },
  vn: {
    translation: {
      TIMESTART: "thời gian bắt đầu",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", //ระบุภาษาเริ่มต้น
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };
