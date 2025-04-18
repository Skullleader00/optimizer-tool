async function fetchData() {
  const uid = document.getElementById("uid").value;
  const result = document.getElementById("result");
  result.textContent = "กำลังโหลด...";

  try {
    const res = await fetch(`https://your-proxy-url.workers.dev/api/${uid}`);
    const data = await res.json();

    if (!data.characters) {
      result.textContent = "ไม่พบข้อมูลตัวละคร หรือ UID ไม่ถูกต้อง";
      return;
    }

    result.innerHTML = "";
    Object.values(data.characters).forEach((char) => {
      const div = document.createElement("div");
      div.textContent = `${char.name || "ชื่อไม่ทราบ"} - Lv: ${char.level || "??"}`;
      result.appendChild(div);
    });

  } catch (err) {
    result.textContent = "เกิดข้อผิดพลาด: " + err.message;
  }
}
