const editor = document.querySelector('[data-testid="tweetTextarea_0"][contenteditable="true"]');

if (!editor) {
  console.error("❌ ما لقيت بوكس الكتابة");
} else {
  editor.focus();

  // توليد رقم عشوائي من 5 خانات
  const randomNumber = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");

  const text =
`#مساحه
#سبيس

${randomNumber}`;

  const pasteEvent = new ClipboardEvent("paste", {
    bubbles: true,
    cancelable: true,
    clipboardData: new DataTransfer()
  });

  pasteEvent.clipboardData.setData("text/plain", text);
  editor.dispatchEvent(pasteEvent);
}
